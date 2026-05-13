// Auto-generated trigger map for: Process Statement Of Accounts
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/process_statement_of_accounts/process_statement_of_accounts.js
// Generated: 2026-05-13T23:34:09.332Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const processStatementOfAccountsTriggers = {
  view_properties: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.send_emails",
        args: (doc) => ({
						document_name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "currency",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "from_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "to_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "collection_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please save before proceeding.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please save before proceeding.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.send_emails",
        args: (doc) => ({
						document_name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "currency",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "from_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "to_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "collection_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please save before proceeding.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please save before proceeding.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  success: {
    onChange: [
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "currency",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "from_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "to_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "collection_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "collection_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  report: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "collection_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  customer_collection: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "collection_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  frequency: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  fetch_customers: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.fetch_customers",
        args: (doc) => ({
					customer_collection: doc.customer_collection,
					collection_name: doc.collection_name,
					primary_mandatory: doc.primary_mandatory,
				}),
        patches: [
        ],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "No Customers found with selected options.",
      },
    ],
  },
  customer: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.process_statement_of_accounts.process_statement_of_accounts.get_customer_emails",
        args: (doc) => ({
				customer_name: row.customer,
				primary_mandatory: doc.primary_mandatory,
			}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Send Emails", action: "TODO" },
    { label: "Download", action: "TODO" },
  ],
};

export default processStatementOfAccountsTriggers;