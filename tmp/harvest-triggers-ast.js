#!/usr/bin/env node
/**
 * Frappe Trigger Harvester — AST-Based (Quality over Simplicity)
 * 
 * Uses @babel/parser + @babel/traverse for proper AST analysis.
 * Extracts trigger maps from Frappe doctype JS files with full semantic understanding.
 * 
 * Prerequisites:
 *   npm install @babel/parser @babel/traverse @babel/types @babel/generator
 * 
 * Usage:
 *   node harvest-triggers-ast.js \
 *     --input ../frappe-bench/apps/erpnext/erpnext \
 *     --output src/triggers
 */

const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// Babel AST tools (must be installed)
let parser, traverse, t, generate;
try {
  parser = require('@babel/parser');
  traverse = require('@babel/traverse').default;
  t = require('@babel/types');
  generate = require('@babel/generator').default;
} catch (e) {
  console.error('❌ Missing dependencies. Run:');
  console.error('   npm install @babel/parser @babel/traverse @babel/types @babel/generator');
  process.exit(1);
}

// ─── Configuration ─────────────────────────────────────────────────────────

const CONFIG = {
  inputDirs: [
    'apps/erpnext/erpnext',
    'apps/frappe/frappe'
  ],
  outputDir: 'src/triggers',
  controllerDirs: [
    'apps/erpnext/erpnext/public/js/controllers',
    'apps/erpnext/erpnext/public/js/utils'
  ],
  doctypePattern: '**/doctype/*/*.js',
  excludePatterns: [
    '**/*.bundle.js',
    '**/test_*.js',
    '**/__tests__/**',
    '**/node_modules/**'
  ]
};

// ─── AST Parser ────────────────────────────────────────────────────────────

class FrappeASTParser {
  constructor(source, filePath) {
    this.source = source;
    this.filePath = filePath;
    this.doctype = this.extractDoctypeName();
    this.ast = null;
    
    // Extracted data structures
    this.inheritanceChain = [];
    this.formOnHandlers = [];      // frappe.ui.form.on("Doctype", { field: fn })
    this.classControllers = [];    // class X extends Y { methods }
    this.serverCalls = [];         // frappe.call({ method: "..." })
    this.queryFilters = [];        // frm.set_query("field", fn)
    this.uiPatches = [];           // frm.set_value("field", value)
    this.customButtons = [];       // frm.add_custom_button(label, fn)
    this.validations = [];         // frappe.throw(...), validations
    this.lifecycleHooks = [];      // setup, onload, refresh, validate, etc.
    this.setQueryCalls = [];       // All set_query invocations
  }

  extractDoctypeName() {
    const base = path.basename(this.filePath, '.js');
    return base
      .split('_')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  // ─── Parse Entry Point ──────────────────────────────────────────────────

  parse() {
    try {
      this.ast = parser.parse(this.source, {
        sourceType: 'script',
        allowReturnOutsideFunction: true,
        plugins: []
      });
    } catch (err) {
      // Some Frappe files use old JS patterns that might not parse cleanly
      // Try with looser settings
      try {
        this.ast = parser.parse(this.source, {
          sourceType: 'unambiguous',
          allowReturnOutsideFunction: true,
          allowUndeclaredExports: true,
          plugins: ['objectRestSpread']
        });
      } catch (err2) {
        throw new Error(`Parse failed: ${err2.message}`);
      }
    }

    this.extractInheritance();
    this.extractFormOnHandlers();
    this.extractClassControllers();
    this.extractServerCalls();
    this.extractSetQueryCalls();
    this.extractSetValueCalls();
    this.extractCustomButtons();
    this.extractValidations();
    this.extractLifecycleHooks();

    return this;
  }

  // ─── Inheritance Chain ──────────────────────────────────────────────────

  extractInheritance() {
    traverse(this.ast, {
      AssignmentExpression: (path) => {
        // Pattern: erpnext.accounts.SalesInvoiceController = class extends ...
        const { node } = path;
        if (
          t.isMemberExpression(node.left) &&
          t.isClassExpression(node.right) &&
          node.right.superClass
        ) {
          const className = this.memberExpressionToString(node.left);
          const extendsName = this.nodeToString(node.right.superClass);
          this.inheritanceChain.push({ className, extendsName });
        }
      },
      ClassDeclaration: (path) => {
        // Pattern: class SalesInvoiceController extends SellingController
        const { node } = path;
        if (node.superClass) {
          this.inheritanceChain.push({
            className: node.id?.name || 'Anonymous',
            extendsName: this.nodeToString(node.superClass)
          });
        }
      }
    });
  }

  // ─── frappe.ui.form.on Handlers ─────────────────────────────────────────

  extractFormOnHandlers() {
    traverse(this.ast, {
      CallExpression: (path) => {
        const { node } = path;
        if (!this.isFrappeUIFormOn(node)) return;

        // frappe.ui.form.on("Doctype", { fieldname: function() {...} })
        const doctypeArg = node.arguments[0];
        const handlersArg = node.arguments[1];

        if (!t.isStringLiteral(doctypeArg) || !t.isObjectExpression(handlersArg)) {
          return;
        }

        const doctype = doctypeArg.value;

        // Extract each field handler from the object
        handlersArg.properties.forEach(prop => {
          if (!t.isObjectProperty(prop) && !t.isObjectMethod(prop)) return;

          const fieldName = t.isIdentifier(prop.key) ? prop.key.name :
                           t.isStringLiteral(prop.key) ? prop.key.value : null;
          
          if (!fieldName) return;

          const handlerBody = t.isObjectMethod(prop) ? prop.body :
                             t.isFunctionExpression(prop.value) ? prop.value.body :
                             t.isArrowFunctionExpression(prop.value) ? prop.value.body : null;

          if (!handlerBody) return;

          this.formOnHandlers.push({
            doctype,
            field: fieldName,
            body: handlerBody,
            source: generate(handlerBody).code,
            line: prop.loc?.start?.line
          });
        });
      }
    });
  }

  // ─── Class Controllers ──────────────────────────────────────────────────

  extractClassControllers() {
    traverse(this.ast, {
      ClassExpression: (path) => this.extractClassMethods(path.node),
      ClassDeclaration: (path) => this.extractClassMethods(path.node)
    });
  }

  extractClassMethods(classNode) {
    classNode.body.body.forEach(member => {
      if (!t.isClassMethod(member)) return;

      const methodName = t.isIdentifier(member.key) ? member.key.name :
                        t.isStringLiteral(member.key) ? member.key.value : null;
      
      if (!methodName) return;

      // Categorize methods
      const lifecycleEvents = ['setup', 'onload', 'refresh', 'validate', 
        'before_save', 'after_save', 'before_submit', 'on_submit',
        'before_cancel', 'on_cancel', 'before_update_after_submit',
        'on_update_after_submit', 'on_change'];

      if (lifecycleEvents.includes(methodName)) {
        this.lifecycleHooks.push({
          event: methodName,
          body: member.body,
          source: generate(member.body).code,
          line: member.loc?.start?.line
        });
      } else if (!['constructor', 'function', 'class'].includes(methodName)) {
        // Treat as field trigger
        this.classControllers.push({
          field: methodName,
          body: member.body,
          source: generate(member.body).code,
          line: member.loc?.start?.line
        });
      }
    });
  }

  // ─── Server Calls ───────────────────────────────────────────────────────

  extractServerCalls() {
    traverse(this.ast, {
      CallExpression: (path) => {
        const { node } = path;
        if (!this.isServerCall(node)) return;

        const configArg = node.arguments[0];
        if (!t.isObjectExpression(configArg)) return;

        const call = { method: null, args: null, callback: null, line: node.loc?.start?.line };

        configArg.properties.forEach(prop => {
          if (!t.isObjectProperty(prop)) return;
          const key = t.isIdentifier(prop.key) ? prop.key.name :
                     t.isStringLiteral(prop.key) ? prop.key.value : null;

          switch (key) {
            case 'method':
              call.method = t.isStringLiteral(prop.value) ? prop.value.value : null;
              break;
            case 'args':
              call.args = prop.value;
              call.argsSource = generate(prop.value).code;
              break;
            case 'callback':
              call.callback = prop.value;
              call.callbackSource = generate(prop.value).code;
              break;
          }
        });

        if (call.method) {
          this.serverCalls.push(call);
        }
      }
    });
  }

  // ─── frm.set_query Calls ────────────────────────────────────────────────

  extractSetQueryCalls() {
    traverse(this.ast, {
      CallExpression: (path) => {
        const { node } = path;
        if (!this.isSetQueryCall(node)) return;

        const fieldArg = node.arguments[0];
        const filterFn = node.arguments[1];

        const field = t.isStringLiteral(fieldArg) ? fieldArg.value :
                     t.isIdentifier(fieldArg) ? fieldArg.name : null;

        this.setQueryCalls.push({
          field,
          filterFn: filterFn ? generate(filterFn).code : null,
          filterFnNode: filterFn,
          line: node.loc?.start?.line
        });

        // Also try to extract static filter information
        const staticFilter = this.extractStaticFilter(filterFn);
        if (staticFilter) {
          this.queryFilters.push({
            field,
            ...staticFilter,
            line: node.loc?.start?.line
          });
        }
      }
    });
  }

  extractStaticFilter(fnNode) {
    // Try to extract filter if it's a simple conditional returning static objects
    if (!fnNode || (!t.isFunctionExpression(fnNode) && !t.isArrowFunctionExpression(fnNode))) {
      return null;
    }

    const body = t.isBlockStatement(fnNode.body) ? fnNode.body.body : [fnNode.body];
    const filters = [];

    // Look for patterns like:
    // if (doc.party_type == "Employee") return { query: "..." }
    body.forEach(stmt => {
      if (t.isIfStatement(stmt)) {
        const condition = generate(stmt.test).code;
        const consequent = this.extractReturnObject(stmt.consequent);
        if (consequent) {
          filters.push({ condition, ...consequent });
        }
      } else if (t.isReturnStatement(stmt)) {
        const returnObj = this.extractReturnObjectValue(stmt.argument);
        if (returnObj) {
          filters.push({ condition: 'default', ...returnObj });
        }
      }
    });

    return filters.length > 0 ? { filters } : null;
  }

  extractReturnObject(blockOrStmt) {
    if (t.isBlockStatement(blockOrStmt)) {
      const returnStmt = blockOrStmt.body.find(s => t.isReturnStatement(s));
      if (returnStmt) {
        return this.extractReturnObjectValue(returnStmt.argument);
      }
    } else if (t.isReturnStatement(blockOrStmt)) {
      return this.extractReturnObjectValue(blockOrStmt.argument);
    }
    return null;
  }

  extractReturnObjectValue(node) {
    if (!t.isObjectExpression(node)) return null;
    
    const result = {};
    node.properties.forEach(prop => {
      if (!t.isObjectProperty(prop)) return;
      const key = t.isIdentifier(prop.key) ? prop.key.name :
                 t.isStringLiteral(prop.key) ? prop.key.value : null;
      if (!key) return;

      if (t.isStringLiteral(prop.value)) {
        result[key] = prop.value.value;
      } else if (t.isObjectExpression(prop.value)) {
        // For filters objects: { company: doc.company }
        result[key] = generate(prop.value).code;
      }
    });

    return Object.keys(result).length > 0 ? result : null;
  }

  // ─── frm.set_value Calls ────────────────────────────────────────────────

  extractSetValueCalls() {
    traverse(this.ast, {
      CallExpression: (path) => {
        const { node } = path;
        if (!this.isSetValueCall(node)) return;

        const fieldArg = node.arguments[0];
        const valueArg = node.arguments[1];

        const field = t.isStringLiteral(fieldArg) ? fieldArg.value :
                     t.isIdentifier(fieldArg) ? fieldArg.name : null;

        this.uiPatches.push({
          type: 'set_value',
          field,
          value: valueArg ? generate(valueArg).code : null,
          valueNode: valueArg,
          line: node.loc?.start?.line,
          // Track if this is inside a callback (server response handler)
          inCallback: this.isInsideCallback(path)
        });
      }
    });
  }

  // ─── frm.add_custom_button Calls ────────────────────────────────────────

  extractCustomButtons() {
    traverse(this.ast, {
      CallExpression: (path) => {
        const { node } = path;
        if (!this.isAddCustomButtonCall(node)) return;

        const labelArg = node.arguments[0];
        const actionFn = node.arguments[1];

        let label = null;
        if (t.isStringLiteral(labelArg)) {
          label = labelArg.value;
        } else if (t.isCallExpression(labelArg) && this.isUnderscoreCall(labelArg)) {
          // __("Label") pattern
          label = labelArg.arguments[0]?.value;
        }

        this.customButtons.push({
          label,
          action: actionFn ? generate(actionFn).code : null,
          actionNode: actionFn,
          line: node.loc?.start?.line
        });
      }
    });
  }

  // ─── Validations ────────────────────────────────────────────────────────

  extractValidations() {
    traverse(this.ast, {
      CallExpression: (path) => {
        const { node } = path;
        
        // frappe.throw(__("message"))
        if (this.isFrappeThrow(node)) {
          const msg = this.extractThrowMessage(node.arguments[0]);
          this.validations.push({ type: 'throw', message: msg, line: node.loc?.start?.line });
        }

        // frm.set_df_property("field", "read_only", 1)
        if (this.isSetDfProperty(node)) {
          const field = t.isStringLiteral(node.arguments[0]) ? node.arguments[0].value : null;
          const property = t.isStringLiteral(node.arguments[1]) ? node.arguments[1].value : null;
          const value = node.arguments[2] ? generate(node.arguments[2]).code : null;
          
          this.validations.push({
            type: 'property',
            field,
            property,
            value,
            line: node.loc?.start?.line
          });
        }
      }
    });
  }

  // ─── Lifecycle Hooks ────────────────────────────────────────────────────

  extractLifecycleHooks() {
    // Already extracted in extractClassMethods
    // This ensures we also catch old-style cscript patterns
    traverse(this.ast, {
      AssignmentExpression: (path) => {
        const { node } = path;
        // Pattern: cur_frm.cscript.refresh = function(doc) { ... }
        if (
          t.isMemberExpression(node.left) &&
          this.isCscriptPath(node.left) &&
          t.isFunctionExpression(node.right)
        ) {
          const hookName = this.getCscriptHookName(node.left);
          if (hookName) {
            this.lifecycleHooks.push({
              event: hookName,
              body: node.right.body,
              source: generate(node.right.body).code,
              line: node.loc?.start?.line,
              style: 'old_cscript'
            });
          }
        }
      }
    });
  }

  // ─── Helper Methods ─────────────────────────────────────────────────────

  isFrappeUIFormOn(node) {
    return t.isCallExpression(node) &&
           this.isMemberExpressionPath(node.callee, ['frappe', 'ui', 'form', 'on']);
  }

  isServerCall(node) {
    return t.isCallExpression(node) && (
      this.isMemberExpressionPath(node.callee, ['frappe', 'call']) ||
      this.isMemberExpressionPath(node.callee, ['frm', 'call'])
    );
  }

  isSetQueryCall(node) {
    return t.isCallExpression(node) &&
           this.isMemberExpressionPath(node.callee, ['frm', 'set_query']);
  }

  isSetValueCall(node) {
    return t.isCallExpression(node) &&
           this.isMemberExpressionPath(node.callee, ['frm', 'set_value']);
  }

  isAddCustomButtonCall(node) {
    return t.isCallExpression(node) &&
           this.isMemberExpressionPath(node.callee, ['frm', 'add_custom_button']);
  }

  isFrappeThrow(node) {
    return t.isCallExpression(node) &&
           this.isMemberExpressionPath(node.callee, ['frappe', 'throw']);
  }

  isSetDfProperty(node) {
    return t.isCallExpression(node) &&
           this.isMemberExpressionPath(node.callee, ['frm', 'set_df_property']);
  }

  isUnderscoreCall(node) {
    return t.isCallExpression(node) &&
           t.isIdentifier(node.callee) &&
           node.callee.name === '__';
  }

  isCscriptPath(node) {
    const path = this.memberExpressionToArray(node);
    return path.includes('cscript');
  }

  getCscriptHookName(node) {
    const parts = this.memberExpressionToArray(node);
    const idx = parts.indexOf('cscript');
    return idx >= 0 && idx < parts.length - 1 ? parts[idx + 1] : null;
  }

  isMemberExpressionPath(node, path) {
    const parts = this.memberExpressionToArray(node);
    return JSON.stringify(parts) === JSON.stringify(path);
  }

  memberExpressionToArray(node) {
    const parts = [];
    let current = node;
    while (t.isMemberExpression(current)) {
      if (t.isIdentifier(current.property)) {
        parts.unshift(current.property.name);
      } else if (t.isStringLiteral(current.property)) {
        parts.unshift(current.property.value);
      }
      current = current.object;
    }
    if (t.isIdentifier(current)) {
      parts.unshift(current.name);
    }
    return parts;
  }

  memberExpressionToString(node) {
    return this.memberExpressionToArray(node).join('.');
  }

  nodeToString(node) {
    if (t.isIdentifier(node)) return node.name;
    if (t.isStringLiteral(node)) return node.value;
    if (t.isMemberExpression(node)) return this.memberExpressionToString(node);
    return generate(node).code;
  }

  extractThrowMessage(node) {
    if (t.isStringLiteral(node)) return node.value;
    if (t.isCallExpression(node) && this.isUnderscoreCall(node)) {
      const template = node.arguments[0];
      if (t.isStringLiteral(template)) return template.value;
    }
    return generate(node).code;
  }

  isInsideCallback(path) {
    // Walk up the AST to see if this call is inside a callback function
    let current = path.parentPath;
    while (current) {
      if (t.isFunction(current.node)) {
        // Check if the function is a callback parameter
        const parent = current.parentPath;
        if (t.isObjectProperty(parent.node) && parent.node.key?.name === 'callback') {
          return true;
        }
        if (t.isCallExpression(parent.node) && parent.node.arguments.includes(current.node)) {
          return true;
        }
      }
      current = current.parentPath;
    }
    return false;
  }

  // Get all triggers (merged from all sources)
  getAllTriggers() {
    const byField = new Map();

    // Form.on handlers
    for (const h of this.formOnHandlers) {
      if (!byField.has(h.field)) byField.set(h.field, []);
      byField.get(h.field).push({
        source: 'form.on',
        type: 'field_change',
        ...h
      });
    }

    // Class controller methods
    for (const c of this.classControllers) {
      if (!byField.has(c.field)) byField.set(c.field, []);
      byField.get(c.field).push({
        source: 'class_method',
        type: 'field_change',
        ...c
      });
    }

    // Lifecycle hooks
    for (const h of this.lifecycleHooks) {
      const key = `$${h.event}`;
      if (!byField.has(key)) byField.set(key, []);
      byField.get(key).push({
        source: h.style || 'class_lifecycle',
        type: 'lifecycle',
        ...h
      });
    }

    return byField;
  }
}

// ─── TypeScript Generator ──────────────────────────────────────────────────

class TypeScriptGenerator {
  constructor(parserResult, schemaJson) {
    this.result = parserResult;
    this.schema = schemaJson;
    this.doctypePascal = this.toPascalCase(parserResult.doctype);
    this.doctypeCamel = this.toCamelCase(parserResult.doctype);
  }

  toPascalCase(str) {
    return str.replace(/(?:^|\s|_)(\w)/g, (_, c) => c.toUpperCase()).replace(/[\s_]/g, '');
  }

  toCamelCase(str) {
    const pascal = this.toPascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
  }

  generate() {
    const lines = [];
    
    lines.push(`// Auto-generated trigger map for ${this.result.doctype}`);
    lines.push(`// Source: ${this.result.filePath}`);
    lines.push(`// Generated by harvest-triggers-ast.js`);
    lines.push('');
    
    // Imports
    lines.push(...this.generateImports());
    lines.push('');
    
    // Interface
    lines.push(...this.generateInterface());
    lines.push('');
    
    // Trigger map
    lines.push(...this.generateTriggerMap());
    lines.push('');
    
    // Export
    lines.push(`export default ${this.doctypeCamel}Triggers;`);
    
    return lines.join('\n');
  }

  generateImports() {
    const imports = [
      'FormTriggerMap',
      'ServerCallAction',
      'ValidateAction', 
      'SetQueryAction',
      'ClearFieldsAction',
      'SetValueAction'
    ];
    
    const lines = [`import { ${imports.join(', ')} } from "../types";`];
    
    // Detect base controller import
    const base = this.detectBaseController();
    if (base) {
      lines.push(`import { ${base} } from "../base/${this.toCamelCase(base)}";`);
    }
    
    return lines;
  }

  detectBaseController() {
    for (const inherit of this.result.inheritanceChain) {
      const ext = inherit.extendsName;
      if (ext.includes('TransactionController')) return 'TransactionTriggers';
      if (ext.includes('SellingController')) return 'SellingTriggers';
      if (ext.includes('BuyingController')) return 'BuyingTriggers';
      if (ext.includes('StockController')) return 'StockTriggers';
      if (ext.includes('AccountsController')) return 'AccountsTriggers';
      if (ext.includes('taxes_and_totals')) return 'TaxesAndTotalsTriggers';
    }
    return null;
  }

  generateInterface() {
    const lines = [];
    lines.push(`export interface ${this.doctypePascal} {`);
    
    if (this.schema?.fields) {
      for (const field of this.schema.fields) {
        if (field.fieldtype === 'Section Break' || field.fieldtype === 'Column Break') continue;
        const tsType = this.mapFieldType(field.fieldtype);
        const optional = field.reqd ? '' : '?';
        lines.push(`  ${field.fieldname}${optional}: ${tsType};`);
      }
    }
    
    lines.push('}');
    return lines;
  }

  mapFieldType(fieldtype) {
    const map = {
      'Data': 'string', 'Text': 'string', 'Text Editor': 'string',
      'Small Text': 'string', 'Long Text': 'string', 'Code': 'string',
      'Int': 'number', 'Float': 'number', 'Currency': 'number',
      'Percent': 'number', 'Rating': 'number', 'Duration': 'number',
      'Check': 'boolean',
      'Date': 'string', 'Datetime': 'string', 'Time': 'string',
      'Link': 'string', 'Dynamic Link': 'string', 'Select': 'string',
      'Autocomplete': 'string', 'Barcode': 'string', 'Color': 'string',
      'Attach': 'string', 'Attach Image': 'string', 'Signature': 'string',
      'Table': 'any[]',
      'JSON': 'any', 'Geolocation': 'any',
      'Read Only': 'any',
      'HTML': 'string', 'Button': 'never'
    };
    return map[fieldtype] || 'any';
  }

  generateTriggerMap() {
    const lines = [];
    const base = this.detectBaseController();
    const extendsClause = base ? ` extends ${base}<${this.doctypePascal}>` : '';
    
    lines.push(`const ${this.doctypeCamel}Triggers: FormTriggerMap<${this.doctypePascal}>${extendsClause} = {`);

    // Group all triggers by field/event
    const triggers = this.result.getAllTriggers();

    for (const [field, handlers] of triggers) {
      lines.push(`  ${field}: {`);
      
      // Group by event type
      const byEvent = this.groupByEvent(handlers);
      
      for (const [eventType, eventHandlers] of byEvent) {
        lines.push(`    ${eventType}: [`);
        
        for (const handler of eventHandlers) {
          const actions = this.extractActions(handler);
          for (const action of actions) {
            lines.push(...this.renderAction(action, 6));
          }
        }
        
        lines.push(`    ],`);
      }
      
      lines.push(`  },`);
    }

    // Custom buttons
    if (this.result.customButtons.length > 0) {
      lines.push(`  $buttons: [`);
      for (const btn of this.result.customButtons) {
        lines.push(`    {`);
        lines.push(`      label: ${JSON.stringify(btn.label)},`);
        lines.push(`      // action extracted from line ${btn.line}`);
        lines.push(`      action: "TODO: extract button action",`);
        lines.push(`    },`);
      }
      lines.push(`  ],`);
    }

    lines.push('};');
    return lines;
  }

  groupByEvent(handlers) {
    const groups = new Map();
    for (const h of handlers) {
      const eventType = h.type === 'lifecycle' ? 'onSetup' : 'onChange';
      if (!groups.has(eventType)) groups.set(eventType, []);
      groups.get(eventType).push(h);
    }
    return groups;
  }

  extractActions(handler) {
    const actions = [];
    const body = handler.body || handler;

    // Try to find server calls within this handler's body
    // This is a heuristic: match by AST node overlap
    for (const call of this.result.serverCalls) {
      if (this.isNodeContained(call, handler)) {
        actions.push({
          type: 'serverCall',
          method: call.method,
          argsSource: call.argsSource,
          callbackSource: call.callbackSource,
          line: call.line
        });
      }
    }

    // Find set_query calls for this field
    for (const sq of this.result.setQueryCalls) {
      if (sq.field === handler.field || this.isNodeContained(sq, handler)) {
        actions.push({
          type: 'setQuery',
          field: sq.field,
          filterSource: sq.filterFn,
          staticFilter: sq.filters,
          line: sq.line
        });
      }
    }

    // Find set_value calls
    for (const sv of this.result.uiPatches) {
      if (sv.type === 'set_value' && this.isNodeContained(sv, handler)) {
        actions.push({
          type: 'setValue',
          field: sv.field,
          value: sv.value,
          inCallback: sv.inCallback,
          line: sv.line
        });
      }
    }

    // Find validations
    for (const v of this.result.validations) {
      if (this.isNodeContained(v, handler)) {
        actions.push({
          type: 'validate',
          ...v
        });
      }
    }

    return actions.length > 0 ? actions : [{ type: 'raw', source: handler.source, line: handler.line }];
  }

  renderAction(action, indent) {
    const pad = ' '.repeat(indent);
    const lines = [`${pad}{`];
    
    switch (action.type) {
      case 'serverCall':
        lines.push(`${pad}  type: "serverCall",`);
        lines.push(`${pad}  method: "${action.method}",`);
        if (action.argsSource) {
          lines.push(`${pad}  args: (doc) => (${action.argsSource}),`);
        }
        if (action.callbackSource) {
          // Try to extract UI patches from callback
          const patches = this.extractPatchesFromCallback(action.callbackSource);
          if (patches.length > 0) {
            lines.push(`${pad}  patches: [`);
            for (const p of patches) {
              lines.push(`${pad}    { field: "${p.field}", fromResponse: "${p.from}" },`);
            }
            lines.push(`${pad}  ],`);
          }
        }
        break;
        
      case 'setQuery':
        lines.push(`${pad}  type: "setQuery",`);
        lines.push(`${pad}  targetField: "${action.field}",`);
        if (action.staticFilter) {
          lines.push(`${pad}  query: (doc) => {`);
          for (const f of action.staticFilter) {
            if (f.condition && f.condition !== 'default') {
              lines.push(`${pad}    if (${f.condition}) return { query: "${f.query || ''}", filters: ${f.filters || '{}'} };`);
            } else if (f.query) {
              lines.push(`${pad}    return { query: "${f.query}" };`);
            } else if (f.filters) {
              lines.push(`${pad}    return { filters: ${f.filters} };`);
            }
          }
          lines.push(`${pad}    return {};`);
          lines.push(`${pad}  },`);
        } else {
          lines.push(`${pad}  query: (doc) => {`);
          lines.push(`${pad}    // TODO: Extract from source line ${action.line}`);
          lines.push(`${pad}    return {};`);
          lines.push(`${pad}  },`);
        }
        break;
        
      case 'setValue':
        lines.push(`${pad}  type: "setValue",`);
        lines.push(`${pad}  field: "${action.field}",`);
        lines.push(`${pad}  value: (doc) => ${action.value || 'null'},`);
        break;
        
      case 'validate':
        lines.push(`${pad}  type: "validate",`);
        lines.push(`${pad}  rule: (doc) => {`);
        lines.push(`${pad}    // TODO: Extract validation from line ${action.line}`);
        lines.push(`${pad}    return true;`);
        lines.push(`${pad}  },`);
        if (action.message) {
          lines.push(`${pad}  error: "${action.message}",`);
        }
        break;
        
      case 'raw':
      default:
        lines.push(`${pad}  type: "raw",`);
        lines.push(`${pad}  // Source from line ${action.line}:`);
        lines.push(`${pad}  execute: (frm) => {`);
        lines.push(`${pad}    // TODO: Convert to declarative action`);
        lines.push(`${pad}  },`);
    }
    
    lines.push(`${pad}},`);
    return lines;
  }

  extractPatchesFromCallback(callbackSource) {
    const patches = [];
    // Match patterns like: frm.set_value("field", r.message.x)
    const regex = /frm\.set_value\s*\(\s*["']([^"']+)["']\s*,\s*r\.message\.([\w.]+)\s*\)/g;
    let match;
    while ((match = regex.exec(callbackSource)) !== null) {
      patches.push({ field: match[1], from: match[2] });
    }
    return patches;
  }

  isNodeContained(child, parent) {
    // Heuristic: if child line is within parent's source range
    // In a real implementation, this would use AST node parent/child relationships
    if (!child.line || !parent.line) return false;
    
    // Rough estimate: child should be within a few lines of parent
    // For more accuracy, we'd compare AST node positions
    const parentEnd = parent.line + (parent.source?.split('\n').length || 10);
    return child.line >= parent.line && child.line <= parentEnd;
  }
}

// ─── Main Orchestrator ─────────────────────────────────────────────────────

class TriggerHarvester {
  constructor(config) {
    this.config = config;
    this.results = [];
    this.stats = {
      filesScanned: 0,
      filesParsed: 0,
      filesWithContent: 0,
      totalTriggers: 0,
      totalServerCalls: 0,
      totalQueryFilters: 0,
      totalCustomButtons: 0,
      totalValidations: 0,
      errors: []
    };
  }

  async run() {
    console.log('🔬 Frappe Trigger Harvester (AST-Based)');
    console.log('═══════════════════════════════════════════\n');

    // 1. Find all JS files
    const jsFiles = this.findJSFiles();
    console.log(`📁 Found ${jsFiles.length} doctype JS files\n`);

    // 2. Parse each file
    for (const filePath of jsFiles) {
      this.stats.filesScanned++;
      
      try {
        const source = fs.readFileSync(filePath, 'utf-8');
        
        // Skip very small files (likely just comments or empty)
        if (source.trim().length < 50) continue;
        
        const parser = new FrappeASTParser(source, filePath).parse();
        
        // Only keep files with actual behavior
        const hasContent = parser.formOnHandlers.length > 0 ||
                          parser.classControllers.length > 0 ||
                          parser.serverCalls.length > 0 ||
                          parser.queryFilters.length > 0 ||
                          parser.customButtons.length > 0;
        
        if (!hasContent) continue;
        
        this.stats.filesParsed++;
        this.stats.filesWithContent++;
        this.stats.totalTriggers += parser.formOnHandlers.length + parser.classControllers.length;
        this.stats.totalServerCalls += parser.serverCalls.length;
        this.stats.totalQueryFilters += parser.queryFilters.length;
        this.stats.totalCustomButtons += parser.customButtons.length;
        this.stats.totalValidations += parser.validations.length;

        // 3. Find matching schema
        const schema = this.findSchemaForFile(filePath);

        // 4. Generate TypeScript
        const generator = new TypeScriptGenerator(parser, schema);
        const tsContent = generator.generate();

        // 5. Write output
        const outputPath = this.getOutputPath(parser.doctype, filePath);
        this.writeFile(outputPath, tsContent);

        this.results.push({
          doctype: parser.doctype,
          inputPath: filePath,
          outputPath,
          formOn: parser.formOnHandlers.length,
          classMethods: parser.classControllers.length,
          serverCalls: parser.serverCalls.length,
          queryFilters: parser.queryFilters.length,
          customButtons: parser.customButtons.length,
          validations: parser.validations.length,
          lifecycleHooks: parser.lifecycleHooks.length,
          inheritance: parser.inheritanceChain
        });

      } catch (err) {
        this.stats.errors.push({ file: filePath, error: err.message });
      }
    }

    // 6. Generate shared infrastructure
    this.generateSharedTypes();
    this.generateBaseControllers();
    this.generateIndex();

    // 7. Print report
    this.printReport();
  }

  findJSFiles() {
    const files = [];
    for (const dir of this.config.inputDirs) {
      const pattern = path.join(dir, this.config.doctypePattern);
      const matches = globSync(pattern, {
        cwd: process.cwd(),
        absolute: true,
        ignore: this.config.excludePatterns
      });
      files.push(...matches);
    }
    return [...new Set(files)].sort();
  }

  findSchemaForFile(jsFilePath) {
    const dir = path.dirname(jsFilePath);
    const base = path.basename(jsFilePath, '.js');
    const jsonPath = path.join(dir, `${base}.json`);
    
    if (fs.existsSync(jsonPath)) {
      try {
        return JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      } catch {
        return null;
      }
    }
    return null;
  }

  getOutputPath(doctypeName, inputPath) {
    const parts = inputPath.split(path.sep);
    const doctypeIdx = parts.indexOf('doctype');
    
    let moduleName;
    if (doctypeIdx > 0) {
      moduleName = parts[doctypeIdx - 1];
    } else {
      moduleName = 'misc';
    }

    const camelName = doctypeName
      .toLowerCase()
      .replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase())
      .replace(/^(.)/, (_, c) => c.toLowerCase());
    
    return path.join(this.config.outputDir, moduleName, `${camelName}Triggers.ts`);
  }

  writeFile(filePath, content) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  // ─── Shared Infrastructure ──────────────────────────────────────────────

  generateSharedTypes() {
    const content = `/**
 * Shared types for Frappe trigger maps
 * Auto-generated by harvest-triggers-ast.js
 */

// ─── Core Action Types ─────────────────────────────────────────────────────

export interface FormTriggerMap<T = any> {
  [fieldName: string]: FieldTriggers<T> | ButtonConfig[] | undefined;
  /** Custom buttons */
  $buttons?: ButtonConfig[];
}

export interface FieldTriggers<T> {
  /** Run when field value changes */
  onChange?: TriggerAction<T>[];
  /** Run when field loses focus */
  onBlur?: TriggerAction<T>[];
  /** Run once when form loads */
  onSetup?: TriggerAction<T>[];
}

export type TriggerAction<T> =
  | ValidateAction<T>
  | ServerCallAction<T>
  | SetQueryAction<T>
  | ClearFieldsAction<T>
  | SetValueAction<T>
  | RawAction<T>;

// ─── Individual Actions ────────────────────────────────────────────────────

export interface ValidateAction<T> {
  type: "validate";
  /** Validation function - return false to block */
  rule: (doc: T) => boolean;
  /** Error message shown when validation fails */
  error: string;
  /** Optional condition - only run when this returns true */
  condition?: (doc: T) => boolean;
}

export interface ServerCallAction<T> {
  type: "serverCall";
  /** Full method path: "erpnext.accounts.party.get_party_details" */
  method: string;
  /** Build args from current doc state */
  args: (doc: T) => Record<string, any>;
  /** Map response fields to form fields */
  patches: Array<{
    /** Form field to update */
    field: keyof T;
    /** Path in server response: "party_account" or "message.party_account" */
    fromResponse: string;
  }>;
  /** Only call server when this condition is true */
  condition?: (doc: T) => boolean;
}

export interface SetQueryAction<T> {
  type: "setQuery";
  /** Which field's dropdown to filter */
  targetField: keyof T;
  /** Return query config based on doc state */
  query: (doc: T) => {
    /** Custom query method path */
    query?: string;
    /** Static filters */
    filters?: Record<string, any>;
  };
}

export interface ClearFieldsAction<T> {
  type: "clearFields";
  /** Fields to set to null/empty */
  fields: Array<keyof T>;
  /** Only clear when this condition is true */
  condition?: (doc: T) => boolean;
}

export interface SetValueAction<T> {
  type: "setValue";
  field: keyof T;
  value: (doc: T) => any;
}

/** Fallback for complex logic that can't be declarative yet */
export interface RawAction<T> {
  type: "raw";
  /** Raw execution function - use sparingly */
  execute: (form: any, doc: T) => void | Promise<void>;
}

// ─── Button Config ─────────────────────────────────────────────────────────

export interface ButtonConfig {
  label: string;
  /** Method to call or action to execute */
  action: string | ((form: any) => void);
  /** Icon name (Lucide icon) */
  icon?: string;
  /** Only show when condition is true */
  condition?: string;
  /** Button style: primary, secondary, danger */
  variant?: "primary" | "secondary" | "danger" | "ghost";
}

// ─── Base Controller Types (for inheritance) ───────────────────────────────

export interface TransactionTriggers<T> {
  company?: { onChange: TriggerAction<T>[] };
  currency?: { onChange: TriggerAction<T>[] };
  posting_date?: { onChange: TriggerAction<T>[] };
  taxes_and_charges?: { onChange: TriggerAction<T>[] };
}

export interface SellingTriggers<T> extends TransactionTriggers<T> {
  customer?: { onChange: TriggerAction<T>[] };
  party_name?: { onChange: TriggerAction<T>[] };
  items?: { onChange: TriggerAction<T>[] };
}

export interface BuyingTriggers<T> extends TransactionTriggers<T> {
  supplier?: { onChange: TriggerAction<T>[] };
  items?: { onChange: TriggerAction<T>[] };
}

export interface StockTriggers<T> extends TransactionTriggers<T> {
  warehouse?: { onChange: TriggerAction<T>[] };
  item_code?: { onChange: TriggerAction<T>[] };
  qty?: { onChange: TriggerAction<T>[] };
}

export interface AccountsTriggers<T> extends TransactionTriggers<T> {
  account?: { onChange: TriggerAction<T>[] };
  debit?: { onChange: TriggerAction<T>[] };
  credit?: { onChange: TriggerAction<T>[] };
}

export interface TaxesAndTotalsTriggers<T> {
  tax_category?: { onChange: TriggerAction<T>[] };
  shipping_rule?: { onChange: TriggerAction<T>[] };
}
`;
    
    this.writeFile(path.join(this.config.outputDir, 'types.ts'), content);
  }

  generateBaseControllers() {
    // Generate base trigger files for shared controllers
    const bases = [
      {
        name: 'transactionTriggers',
        extends: '',
        content: `import { FormTriggerMap, ServerCallAction } from "../types";

export const transactionTriggers: FormTriggerMap = {
  company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({ from_currency: doc.currency, to_currency: doc.company_currency, transaction_date: doc.posting_date }),
        patches: [{ field: "conversion_rate", fromResponse: "conversion_rate" }]
      }
    ]
  }
};

export default transactionTriggers;`
      }
    ];

    for (const base of bases) {
      this.writeFile(
        path.join(this.config.outputDir, 'base', `${base.name}.ts`),
        base.content
      );
    }
  }

  generateIndex() {
    const lines = [
      '/**',
      ' * Auto-generated trigger map index',
      ' * Maps doctype names to their trigger modules',
      ' */',
      ''
    ];

    for (const result of this.results) {
      const relPath = './' + path.relative(this.config.outputDir, result.outputPath)
        .replace(/\\/g, '/')
        .replace(/\.ts$/, '');
      const varName = path.basename(relPath);
      lines.push(`import ${varName} from "${relPath}";`);
    }

    lines.push('');
    lines.push('export const TRIGGER_MAPS: Record<string, any> = {');
    for (const result of this.results) {
      const varName = path.basename(result.outputPath, '.ts');
      lines.push(`  "${result.doctype}": ${varName},`);
    }
    lines.push('};');
    lines.push('');
    lines.push('export function getTriggers(doctype: string) {');
    lines.push('  return TRIGGER_MAPS[doctype] || null;');
    lines.push('}');

    this.writeFile(path.join(this.config.outputDir, 'index.ts'), lines.join('\n'));
  }

  // ─── Report ─────────────────────────────────────────────────────────────

  printReport() {
    console.log('\n═══════════════════════════════════════════');
    console.log('📊 Harvest Report (AST-Based)');
    console.log('═══════════════════════════════════════════');
    console.log(`Files scanned:        ${this.stats.filesScanned}`);
    console.log(`Files parsed:         ${this.stats.filesParsed}`);
    console.log(`Files with behavior:  ${this.stats.filesWithContent}`);
    console.log(`Total triggers:       ${this.stats.totalTriggers}`);
    console.log(`Server calls:         ${this.stats.totalServerCalls}`);
    console.log(`Query filters:        ${this.stats.totalQueryFilters}`);
    console.log(`Custom buttons:       ${this.stats.totalCustomButtons}`);
    console.log(`Validations:          ${this.stats.totalValidations}`);
    console.log(`Errors:               ${this.stats.errors.length}`);
    console.log('═══════════════════════════════════════════\n');

    // Show breakdown by module
    const byModule = {};
    for (const r of this.results) {
      const module = path.basename(path.dirname(r.outputPath));
      if (!byModule[module]) byModule[module] = { count: 0, triggers: 0 };
      byModule[module].count++;
      byModule[module].triggers += r.formOn + r.classMethods;
    }

    console.log('📁 Breakdown by module:');
    for (const [mod, data] of Object.entries(byModule).sort((a, b) => b[1].count - a[1].count)) {
      console.log(`  ${mod.padEnd(20)} ${data.count} files, ${data.triggers} triggers`);
    }

    console.log('\n📁 Output structure:');
    this.printDirectoryTree(this.config.outputDir);

    console.log(`\n✅ Generated ${this.results.length} trigger files in: ${this.config.outputDir}`);
    console.log('\nNext steps:');
    console.log('  1. Review TODOs in generated files');
    console.log('  2. Implement useFormTriggers() executor hook');
    console.log('  3. Wire up proxy API to Frappe backend');
  }

  printDirectoryTree(dir, prefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const dirs = entries.filter(e => e.isDirectory());
    const files = entries.filter(e => e.isFile());

    [...dirs, ...files].forEach((entry, i, arr) => {
      const isLast = i === arr.length - 1;
      const connector = isLast ? '└── ' : '├── ';
      console.log(`${prefix}${connector}${entry.name}`);
      if (entry.isDirectory()) {
        const extension = isLast ? '    ' : '│   ';
        this.printDirectoryTree(path.join(dir, entry.name), prefix + extension);
      }
    });
  }
}

// ─── CLI ───────────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { ...CONFIG };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--input':
      case '-i':
        config.inputDirs = args[++i].split(',');
        break;
      case '--output':
      case '-o':
        config.outputDir = args[++i];
        break;
      case '--controllers':
      case '-c':
        config.controllerDirs = args[++i].split(',');
        break;
    }
  }

  return config;
}

// ─── Run ───────────────────────────────────────────────────────────────────

if (require.main === module) {
  const config = parseArgs();
  const harvester = new TriggerHarvester(config);
  harvester.run().catch(err => {
    console.error('❌ Fatal error:', err);
    process.exit(1);
  });
}

module.exports = { FrappeASTParser, TypeScriptGenerator, TriggerHarvester };
