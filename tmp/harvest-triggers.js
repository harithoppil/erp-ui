#!/usr/bin/env node
/**
 * Frappe Trigger Harvester
 * 
 * Parses ERPNext/Frappe doctype JS files and generates typed TypeScript trigger maps.
 * 
 * Usage:
 *   node harvest-triggers.js \
 *     --input ../frappe-bench/apps/erpnext/erpnext \
 *     --output src/triggers \
 *     --schemas ../frappe-bench/apps/erpnext/erpnext/**/doctype/*/*.json
 */

const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// ─── Configuration ─────────────────────────────────────────────────────────

const CONFIG = {
  // Directories to scan for doctype JS files
  inputDirs: [
    'apps/erpnext/erpnext',
    'apps/frappe/frappe'
  ],
  
  // Where to write generated TypeScript
  outputDir: 'src/triggers',
  
  // Shared controller files that define base behavior
  controllerDirs: [
    'apps/erpnext/erpnext/public/js/controllers',
    'apps/erpnext/erpnext/public/js/utils'
  ],
  
  // Patterns to match doctype JS files
  doctypePattern: '**/doctype/*/*.js',
  
  // Patterns to EXCLUDE (tests, bundles, etc.)
  excludePatterns: [
    '**/*.bundle.js',
    '**/test_*.js',
    '**/__tests__/**',
    '**/node_modules/**'
  ]
};

// ─── AST Parser (lightweight regex-based for Frappe patterns) ──────────────

class FrappeJSParser {
  constructor(source, filePath) {
    this.source = source;
    this.filePath = filePath;
    this.doctype = this.extractDoctypeName();
    this.triggers = [];
    this.serverCalls = [];
    this.queryFilters = [];
    this.customButtons = [];
    this.validations = [];
    this.inheritanceChain = [];
  }

  /**
   * Extract doctype name from file path
   * e.g., "apps/erpnext/erpnext/accounts/doctype/payment_entry/payment_entry.js"
   *       → "Payment Entry"
   */
  extractDoctypeName() {
    const base = path.basename(this.filePath, '.js');
    // Convert snake_case to Title Case
    return base
      .split('_')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  /**
   * Parse the entire file
   */
  parse() {
    this.parseInheritance();
    this.parseFormOnHandlers();
    this.parseClassControllers();
    this.parseServerCalls();
    this.parseSetQuery();
    this.parseSetValue();
    this.parseCustomButtons();
    this.parseValidations();
    return this;
  }

  /**
   * Detect controller inheritance chain
   * e.g., `class SalesInvoiceController extends erpnext.selling.SellingController`
   */
  parseInheritance() {
    const classRegex = /class\s+(\w+)\s+extends\s+([\w.]+)/g;
    let match;
    while ((match = classRegex.exec(this.source)) !== null) {
      this.inheritanceChain.push({
        className: match[1],
        extends: match[2]
      });
    }
  }

  /**
   * Parse `frappe.ui.form.on("Doctype", { fieldname: function() {...} })`
   */
  parseFormOnHandlers() {
    // Match: frappe.ui.form.on("Payment Entry", { ... })
    const formOnRegex = /frappe\.ui\.form\.on\s*\(\s*["']([^"']+)["']\s*,\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}\s*\)/gs;
    
    let match;
    while ((match = formOnRegex.exec(this.source)) !== null) {
      const doctype = match[1];
      const body = match[2];
      
      // Extract individual field handlers from the body
      const fieldHandlerRegex = /(\w+)\s*:\s*function\s*\(\s*(\w+)\s*\)\s*\{/g;
      let fhMatch;
      while ((fhMatch = fieldHandlerRegex.exec(body)) !== null) {
        const fieldName = fhMatch[1];
        const frmVar = fhMatch[2];
        
        // Extract the function body (naive: find matching braces)
        const startIdx = fhMatch.index + fhMatch[0].length - 1;
        const endIdx = this.findMatchingBrace(body, startIdx);
        const funcBody = body.slice(startIdx + 1, endIdx);
        
        this.triggers.push({
          type: 'field_change',
          doctype,
          field: fieldName,
          frmVar,
          rawBody: funcBody,
          lineNumber: this.getLineNumber(fhMatch.index)
        });
      }
    }
  }

  /**
   * Parse class-based controllers
   * e.g., erpnext.accounts.SalesInvoiceController = class extends ... { company() {...} }
   */
  parseClassControllers() {
    // Match method definitions inside class bodies
    const methodRegex = /(\w+)\s*\(\s*(\w*)\s*\)\s*\{/g;
    
    let match;
    while ((match = methodRegex.exec(this.source)) !== null) {
      const methodName = match[1];
      
      // Skip common non-field methods
      if (['setup', 'onload', 'refresh', 'validate', 'before_submit', 'on_submit', 'before_cancel', 'on_cancel'].includes(methodName)) {
        this.triggers.push({
          type: 'lifecycle',
          event: methodName,
          rawBody: this.extractMethodBody(match.index),
          lineNumber: this.getLineNumber(match.index)
        });
        continue;
      }
      
      // If it looks like a field name (not a reserved word), treat as field trigger
      if (!['function', 'return', 'if', 'for', 'while', 'switch', 'try', 'catch', 'class', 'const', 'let', 'var'].includes(methodName)) {
        this.triggers.push({
          type: 'field_change',
          field: methodName,
          rawBody: this.extractMethodBody(match.index),
          lineNumber: this.getLineNumber(match.index)
        });
      }
    }
  }

  /**
   * Extract `frappe.call({ method: "...", args: {...}, callback: fn })`
   */
  parseServerCalls() {
    const callRegex = /(?:frappe|frm)\.call\s*\(\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}\s*\)/gs;
    
    let match;
    while ((match = callRegex.exec(this.source)) !== null) {
      const callBlock = match[1];
      
      const methodMatch = callBlock.match(/method\s*:\s*["']([^"']+)["']/);
      const argsMatch = callBlock.match(/args\s*:\s*(\{[^}]*\})/);
      
      this.serverCalls.push({
        method: methodMatch ? methodMatch[1] : null,
        args: argsMatch ? argsMatch[1] : null,
        rawBlock: callBlock,
        lineNumber: this.getLineNumber(match.index)
      });
    }
  }

  /**
   * Extract `frm.set_query("field", function() { ... })`
   */
  parseSetQuery() {
    const queryRegex = /frm\.set_query\s*\(\s*["']([^"']+)["']\s*,\s*(?:function\s*\([^)]*\)\s*\{([^}]*)\}|\{[^}]*\})\s*\)/gs;
    
    let match;
    while ((match = queryRegex.exec(this.source)) !== null) {
      this.queryFilters.push({
        field: match[1],
        rawBody: match[2] || match[0],
        lineNumber: this.getLineNumber(match.index)
      });
    }
  }

  /**
   * Extract `frm.set_value("field", value)` patterns
   */
  parseSetValue() {
    const setValueRegex = /frm\.set_value\s*\(\s*["']([^"']+)["']\s*,\s*([^)]+)\)/g;
    
    let match;
    while ((match = setValueRegex.exec(this.source)) !== null) {
      this.triggers.push({
        type: 'set_value',
        field: match[1],
        value: match[2].trim(),
        lineNumber: this.getLineNumber(match.index)
      });
    }
  }

  /**
   * Extract `frm.add_custom_button(label, function() {...})`
   */
  parseCustomButtons() {
    const buttonRegex = /frm\.add_custom_button\s*\(\s*__\s*\(\s*["']([^"']+)["']\s*\)\s*,\s*function\s*\([^)]*\)\s*\{/g;
    
    let match;
    while ((match = buttonRegex.exec(this.source)) !== null) {
      this.customButtons.push({
        label: match[1],
        lineNumber: this.getLineNumber(match.index)
      });
    }
  }

  /**
   * Extract validation patterns
   */
  parseValidations() {
    // frappe.throw(...) patterns
    const throwRegex = /frappe\.throw\s*\(\s*__\s*\(\s*["']([^"']+)["']\s*\)\s*\)/g;
    
    let match;
    while ((match = throwRegex.exec(this.source)) !== null) {
      this.validations.push({
        type: 'throw',
        message: match[1],
        lineNumber: this.getLineNumber(match.index)
      });
    }
  }

  // ─── Helpers ─────────────────────────────────────────────────────────────

  findMatchingBrace(str, openIdx) {
    let depth = 1;
    for (let i = openIdx + 1; i < str.length; i++) {
      if (str[i] === '{') depth++;
      if (str[i] === '}') depth--;
      if (depth === 0) return i;
    }
    return str.length - 1;
  }

  extractMethodBody(startIdx) {
    const openBrace = this.source.indexOf('{', startIdx);
    if (openBrace === -1) return '';
    const closeBrace = this.findMatchingBrace(this.source, openBrace);
    return this.source.slice(openBrace + 1, closeBrace);
  }

  getLineNumber(index) {
    return this.source.slice(0, index).split('\n').length;
  }
}

// ─── TypeScript Generator ──────────────────────────────────────────────────

class TypeScriptGenerator {
  constructor(parserResult, schemaJson) {
    this.result = parserResult;
    this.schema = schemaJson;
    this.doctypePascal = this.toPascalCase(parserResult.doctype);
  }

  toPascalCase(str) {
    return str.replace(/(?:^|\s)(\w)/g, (_, c) => c.toUpperCase()).replace(/\s/g, '');
  }

  toCamelCase(str) {
    return str.charAt(0).toLowerCase() + str.slice(1).replace(/\s+(\w)/g, (_, c) => c.toUpperCase()).replace(/\s/g, '');
  }

  /**
   * Generate the TypeScript file content
   */
  generate() {
    const lines = [];
    
    // Imports
    lines.push(`import { FormTriggerMap, ServerCallAction, ValidateAction, SetQueryAction, ClearFieldsAction } from "./types";`);
    
    // Determine base controller to extend
    const baseImport = this.detectBaseController();
    if (baseImport) {
      lines.push(`import { ${baseImport} } from "../base/${this.toCamelCase(baseImport)}";`);
    }
    
    lines.push('');
    
    // DocType interface
    lines.push(...this.generateInterface());
    lines.push('');
    
    // Trigger map
    lines.push(...this.generateTriggerMap());
    lines.push('');
    
    // Export
    lines.push(`export default ${this.toCamelCase(this.doctypePascal)}Triggers;`);
    
    return lines.join('\n');
  }

  /**
   * Detect which base controller this doctype extends
   */
  detectBaseController() {
    for (const inherit of this.result.inheritanceChain) {
      if (inherit.extends.includes('TransactionController')) return 'TransactionTriggers';
      if (inherit.extends.includes('SellingController')) return 'SellingTriggers';
      if (inherit.extends.includes('BuyingController')) return 'BuyingTriggers';
      if (inherit.extends.includes('StockController')) return 'StockTriggers';
      if (inherit.extends.includes('AccountsController')) return 'AccountsTriggers';
    }
    return null;
  }

  /**
   * Generate the DocType interface from schema
   */
  generateInterface() {
    const lines = [];
    lines.push(`export interface ${this.doctypePascal} {`);
    
    if (this.schema && this.schema.fields) {
      for (const field of this.schema.fields) {
        const tsType = this.mapFieldType(field.fieldtype);
        const optional = field.reqd ? '' : '?';
        lines.push(`  ${field.fieldname}${optional}: ${tsType};`);
      }
    }
    
    lines.push('}');
    return lines;
  }

  mapFieldType(fieldtype) {
    const typeMap = {
      'Data': 'string',
      'Text': 'string',
      'Text Editor': 'string',
      'Int': 'number',
      'Float': 'number',
      'Currency': 'number',
      'Percent': 'number',
      'Check': 'boolean',
      'Date': 'string',
      'Datetime': 'string',
      'Time': 'string',
      'Link': 'string',
      'Select': 'string',
      'Table': 'any[]',
      'Section Break': 'never',
      'Column Break': 'never',
      'HTML': 'string',
      'Button': 'never',
      'Attach': 'string',
      'Attach Image': 'string',
      'Barcode': 'string',
      'Color': 'string',
      'Geolocation': 'any',
      'Password': 'string',
      'Rating': 'number',
      'Read Only': 'any',
      'JSON': 'any',
      'Dynamic Link': 'string',
      'Signature': 'string',
      'Duration': 'number',
      'Autocomplete': 'string',
      'Small Text': 'string',
      'Long Text': 'string',
      'Code': 'string'
    };
    return typeMap[fieldtype] || 'any';
  }

  /**
   * Generate the trigger map object
   */
  generateTriggerMap() {
    const lines = [];
    const base = this.detectBaseController();
    const extendsClause = base ? ` extends ${base}<${this.doctypePascal}>` : '';
    
    lines.push(`const ${this.toCamelCase(this.doctypePascal)}Triggers: FormTriggerMap<${this.doctypePascal}>${extendsClause} = {`);
    
    // Group triggers by field
    const byField = {};
    for (const trigger of this.result.triggers) {
      const key = trigger.field || trigger.event || 'unknown';
      if (!byField[key]) byField[key] = [];
      byField[key].push(trigger);
    }
    
    for (const [field, triggers] of Object.entries(byField)) {
      lines.push(`  ${field}: {`);
      
      // Separate by action type
      const serverCalls = triggers.filter(t => t.type === 'field_change' && this.hasServerCall(t.rawBody));
      const validations = triggers.filter(t => this.result.validations.some(v => t.rawBody?.includes(v.message)));
      const setQueries = this.result.queryFilters.filter(q => q.field === field);
      
      if (serverCalls.length > 0) {
        lines.push(`    onChange: [`);
        
        // Add validation actions
        for (const v of this.result.validations) {
          lines.push(`      {`);
          lines.push(`        type: "validate",`);
          lines.push(`        rule: (doc) => {`);
          lines.push(`          // TODO: Extract from line ${v.lineNumber}`);
          lines.push(`          return true;`);
          lines.push(`        },`);
          lines.push(`        error: "${v.message}"`);
          lines.push(`      },`);
        }
        
        // Add setQuery actions
        for (const q of setQueries) {
          lines.push(`      {`);
          lines.push(`        type: "setQuery",`);
          lines.push(`        targetField: "${q.field}",`);
          lines.push(`        query: (doc) => {`);
          lines.push(`          // Extracted from line ${q.lineNumber}`);
          lines.push(`          return {}; // TODO: Parse filter logic`);
          lines.push(`        }`);
          lines.push(`      },`);
        }
        
        // Add server call actions
        for (const trigger of serverCalls) {
          const serverCall = this.findServerCallForTrigger(trigger);
          if (serverCall) {
            lines.push(`      {`);
            lines.push(`        type: "serverCall",`);
            lines.push(`        method: "${serverCall.method}",`);
            lines.push(`        args: (doc) => ({`);
            lines.push(`          // TODO: Extract args from line ${serverCall.lineNumber}`);
            lines.push(`        }),`);
            lines.push(`        patches: [`);
            lines.push(`          // TODO: Extract frm.set_value patterns`);
            lines.push(`        ]`);
            lines.push(`      },`);
          }
        }
        
        lines.push(`    ]`);
      }
      
      lines.push(`  },`);
    }
    
    // Add custom buttons
    if (this.result.customButtons.length > 0) {
      lines.push(`  $buttons: [`);
      for (const btn of this.result.customButtons) {
        lines.push(`    { label: "${btn.label}", action: "TODO" },`);
      }
      lines.push(`  ]`);
    }
    
    lines.push('};');
    return lines;
  }

  hasServerCall(body) {
    return body && (body.includes('frappe.call') || body.includes('frm.call'));
  }

  findServerCallForTrigger(trigger) {
    // Find server calls that appear in the same trigger body
    // This is a heuristic: match by proximity in the source
    for (const call of this.result.serverCalls) {
      if (trigger.rawBody && trigger.rawBody.includes(call.method?.split('.').pop())) {
        return call;
      }
    }
    return this.result.serverCalls[0] || null;
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
      triggersFound: 0,
      serverCallsFound: 0,
      queryFiltersFound: 0,
      customButtonsFound: 0,
      errors: []
    };
  }

  async run() {
    console.log('🔍 Frappe Trigger Harvester');
    console.log('═══════════════════════════════════════\n');
    
    // 1. Find all JS files
    const jsFiles = this.findJSFiles();
    console.log(`📁 Found ${jsFiles.length} doctype JS files\n`);
    
    // 2. Parse each file
    for (const filePath of jsFiles) {
      this.stats.filesScanned++;
      
      try {
        const source = fs.readFileSync(filePath, 'utf-8');
        const parser = new FrappeJSParser(source, filePath).parse();
        
        // Skip files with no triggers (simple doctypes)
        if (parser.triggers.length === 0 && parser.serverCalls.length === 0) {
          continue;
        }
        
        this.stats.filesParsed++;
        this.stats.triggersFound += parser.triggers.length;
        this.stats.serverCallsFound += parser.serverCalls.length;
        this.stats.queryFiltersFound += parser.queryFilters.length;
        this.stats.customButtonsFound += parser.customButtons.length;
        
        // 3. Find matching schema JSON
        const schema = this.findSchemaForFile(filePath);
        
        // 4. Generate TypeScript
        const generator = new TypeScriptGenerator(parser, schema);
        const tsContent = generator.generate();
        
        // 5. Write output
        const outputPath = this.getOutputPath(filePath, parser.doctype);
        this.writeFile(outputPath, tsContent);
        
        this.results.push({
          doctype: parser.doctype,
          inputPath: filePath,
          outputPath,
          triggers: parser.triggers.length,
          serverCalls: parser.serverCalls.length,
          queryFilters: parser.queryFilters.length,
          customButtons: parser.customButtons.length,
          inheritanceChain: parser.inheritanceChain
        });
        
      } catch (err) {
        this.stats.errors.push({ file: filePath, error: err.message });
      }
    }
    
    // 6. Generate shared types
    this.generateSharedTypes();
    
    // 7. Generate index file
    this.generateIndex();
    
    // 8. Print report
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
    return [...new Set(files)]; // dedupe
  }

  findSchemaForFile(jsFilePath) {
    // Try to find matching JSON schema
    // e.g., payment_entry.js → payment_entry.json
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

  getOutputPath(inputPath, doctypeName) {
    // Convert: apps/erpnext/erpnext/accounts/doctype/payment_entry/payment_entry.js
    // To:      src/triggers/accounts/paymentEntryTriggers.ts
    
    const parts = inputPath.split(path.sep);
    const doctypeDirIdx = parts.indexOf('doctype');
    
    if (doctypeDirIdx === -1) {
      // Fallback: use module name
      const moduleIdx = parts.indexOf('erpnext') !== -1 
        ? parts.indexOf('erpnext') + 1 
        : parts.indexOf('frappe') + 1;
      const moduleName = parts[moduleIdx] || 'unknown';
      const camelName = doctypeName
        .toLowerCase()
        .replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, (_, c) => c.toLowerCase());
      return path.join(this.config.outputDir, moduleName, `${camelName}Triggers.ts`);
    }
    
    const moduleName = parts[doctypeDirIdx - 1] || 'unknown';
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

  generateSharedTypes() {
    const typesContent = `/**
 * Auto-generated shared types for Frappe trigger maps
 * Generated by harvest-triggers.js
 */

export interface FormTriggerMap<T> {
  [fieldName: string]: {
    onChange?: TriggerAction<T>[];
    onBlur?: TriggerAction<T>[];
    onSetup?: TriggerAction<T>[];
  };
}

export type TriggerAction<T> = 
  | ValidateAction<T>
  | ServerCallAction<T>
  | SetQueryAction<T>
  | ClearFieldsAction<T>
  | SetValueAction<T>;

export interface ValidateAction<T> {
  type: "validate";
  rule: (doc: T) => boolean;
  error: string;
}

export interface ServerCallAction<T> {
  type: "serverCall";
  method: string;
  args: (doc: T) => Record<string, any>;
  patches: Array<{
    field: keyof T;
    fromResponse: string;
  }>;
  condition?: (doc: T) => boolean;
}

export interface SetQueryAction<T> {
  type: "setQuery";
  targetField: keyof T;
  query: (doc: T) => { query?: string; filters?: Record<string, any> };
}

export interface ClearFieldsAction<T> {
  type: "clearFields";
  fields: Array<keyof T>;
  condition?: (doc: T) => boolean;
}

export interface SetValueAction<T> {
  type: "setValue";
  field: keyof T;
  value: (doc: T) => any;
}

// Base trigger interfaces for inheritance
export interface TransactionTriggers<T> {
  company?: { onChange: TriggerAction<T>[] };
  currency?: { onChange: TriggerAction<T>[] };
}

export interface SellingTriggers<T> extends TransactionTriggers<T> {
  customer?: { onChange: TriggerAction<T>[] };
}

export interface BuyingTriggers<T> extends TransactionTriggers<T> {
  supplier?: { onChange: TriggerAction<T>[] };
}

export interface StockTriggers<T> extends TransactionTriggers<T> {
  warehouse?: { onChange: TriggerAction<T>[] };
}

export interface AccountsTriggers<T> extends TransactionTriggers<T> {
  account?: { onChange: TriggerAction<T>[] };
}
`;
    
    this.writeFile(
      path.join(this.config.outputDir, 'types.ts'),
      typesContent
    );
  }

  generateIndex() {
    const lines = [
      '/**',
      ' * Auto-generated trigger map index',
      ' * Generated by harvest-triggers.js',
      ' */',
      ''
    ];
    
    for (const result of this.results) {
      const importPath = './' + path.relative(this.config.outputDir, result.outputPath)
        .replace(/\\/g, '/')
        .replace(/\.ts$/, '');
      const varName = path.basename(importPath).replace(/\.ts$/, '');
      lines.push(`import ${varName} from "${importPath}";`);
    }
    
    lines.push('');
    lines.push('export const TRIGGER_MAPS = {');
    for (const result of this.results) {
      const varName = path.basename(result.outputPath, '.ts');
      lines.push(`  "${result.doctype}": ${varName},`);
    }
    lines.push('};');
    
    this.writeFile(
      path.join(this.config.outputDir, 'index.ts'),
      lines.join('\n')
    );
  }

  printReport() {
    console.log('\n═══════════════════════════════════════');
    console.log('📊 Harvest Report');
    console.log('═══════════════════════════════════════');
    console.log(`Files scanned:     ${this.stats.filesScanned}`);
    console.log(`Files parsed:      ${this.stats.filesParsed}`);
    console.log(`Triggers found:    ${this.stats.triggersFound}`);
    console.log(`Server calls:      ${this.stats.serverCallsFound}`);
    console.log(`Query filters:     ${this.stats.queryFiltersFound}`);
    console.log(`Custom buttons:    ${this.stats.customButtonsFound}`);
    console.log(`Errors:            ${this.stats.errors.length}`);
    console.log('═══════════════════════════════════════\n');
    
    if (this.stats.errors.length > 0) {
      console.log('❌ Errors:');
      this.stats.errors.forEach(e => console.log(`  - ${e.file}: ${e.error}`));
    }
    
    console.log('\n📁 Output structure:');
    const tree = this.buildOutputTree();
    this.printTree(tree);
    
    console.log('\n✅ Done! Generated files in:', this.config.outputDir);
  }

  buildOutputTree() {
    const tree = {};
    for (const result of this.results) {
      const parts = path.relative(this.config.outputDir, result.outputPath).split(path.sep);
      let node = tree;
      for (const part of parts) {
        if (!node[part]) node[part] = {};
        node = node[part];
      }
      node.__info = `${result.triggers} triggers, ${result.serverCalls} server calls`;
    }
    return tree;
  }

  printTree(node, prefix = '') {
    const entries = Object.entries(node).filter(([k]) => k !== '__info');
    entries.forEach(([key, child], i) => {
      const isLast = i === entries.length - 1;
      const connector = isLast ? '└── ' : '├── ';
      const info = child.__info ? ` (${child.__info})` : '';
      console.log(`${prefix}${connector}${key}${info}`);
      if (Object.keys(child).length > (child.__info ? 1 : 0)) {
        const extension = isLast ? '    ' : '│   ';
        this.printTree(child, prefix + extension);
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
    }
  }
  
  return config;
}

// ─── Run ───────────────────────────────────────────────────────────────────

if (require.main === module) {
  const config = parseArgs();
  const harvester = new TriggerHarvester(config);
  harvester.run().catch(console.error);
}

module.exports = { FrappeJSParser, TypeScriptGenerator, TriggerHarvester };
