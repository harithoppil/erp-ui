// Auto-generated trigger map for: Company
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/company/company.js
// Generated: 2026-05-13T23:34:09.260Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const companyTriggers = {
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "create_default_tax_template",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_company",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_operating_cost_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_selling_terms",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_sales_contact",
        query: (doc) => ({ query: "frappe.contacts.doctype.contact.contact.contact_query", filters: { link_doctype: "Company", link_name: doc.name } }),
      },
      {
        type: "setQuery",
        targetField: "default_buying_terms",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_in_transit_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_warehouse_for_sales_return",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "parent_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "reporting_currency",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "abbr",
        value: (doc) => doc.abbr ?? abbr,
      },
      {
        type: "setValue",
        field: "create_chart_of_accounts_based_on",
        value: (doc) => bool ? "Existing Company" : "",
      },
      {
        type: "setValue",
        field: "existing_company",
        value: (doc) => bool ? frm.doc.parent_company : "",
      },
      {
        type: "setValue",
        field: "reporting_currency",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Date of Commencement should be greater than Date of Incorporation",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("abbr", "read_only", 1),
      },
    ],
  },
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "create_default_tax_template",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_company",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_operating_cost_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_selling_terms",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_sales_contact",
        query: (doc) => ({ query: "frappe.contacts.doctype.contact.contact.contact_query", filters: { link_doctype: "Company", link_name: doc.name } }),
      },
      {
        type: "setQuery",
        targetField: "default_buying_terms",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_in_transit_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_warehouse_for_sales_return",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "abbr",
        value: (doc) => doc.abbr ?? abbr,
      },
      {
        type: "setValue",
        field: "create_chart_of_accounts_based_on",
        value: (doc) => bool ? "Existing Company" : "",
      },
      {
        type: "setValue",
        field: "existing_company",
        value: (doc) => bool ? frm.doc.parent_company : "",
      },
      {
        type: "setValue",
        field: "reporting_currency",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Date of Commencement should be greater than Date of Incorporation",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("abbr", "read_only", 1),
      },
    ],
  },
  company_name: {
    onChange: [
      {
        type: "serverCall",
        method: "create_default_tax_template",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "abbr",
        value: (doc) => doc.abbr ?? abbr,
      },
      {
        type: "setValue",
        field: "create_chart_of_accounts_based_on",
        value: (doc) => bool ? "Existing Company" : "",
      },
      {
        type: "setValue",
        field: "existing_company",
        value: (doc) => bool ? frm.doc.parent_company : "",
      },
      {
        type: "setValue",
        field: "reporting_currency",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Date of Commencement should be greater than Date of Incorporation",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("abbr", "read_only", 1),
      },
    ],
  },
  parent_company: {
    onChange: [
      {
        type: "serverCall",
        method: "create_default_tax_template",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "create_chart_of_accounts_based_on",
        value: (doc) => bool ? "Existing Company" : "",
      },
      {
        type: "setValue",
        field: "existing_company",
        value: (doc) => bool ? frm.doc.parent_company : "",
      },
      {
        type: "setValue",
        field: "reporting_currency",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Date of Commencement should be greater than Date of Incorporation",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("abbr", "read_only", 1),
      },
    ],
  },
  date_of_commencement: {
    onChange: [
      {
        type: "serverCall",
        method: "create_default_tax_template",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "reporting_currency",
        value: (doc) => "",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Date of Commencement should be greater than Date of Incorporation",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("abbr", "read_only", 1),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "create_default_tax_template",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "reporting_currency",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("abbr", "read_only", 1),
      },
    ],
  },
  make_default_tax_template: {
    onChange: [
      {
        type: "serverCall",
        method: "create_default_tax_template",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.company.company.create_transaction_deletion_request",
        args: (doc) => ({
										company: data.company_name,
									}),
        patches: [
        ],
      },
    ],
  },
  country: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
    ],
  },
  delete_company_transactions: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.is_deletion_doc_running",
        args: (doc) => ({
				company: doc.name,
			}),
        patches: [
        ],
      },
    ],
  },
  onerror: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Cost Centers", action: "TODO" },
    { label: "Chart of Accounts", action: "TODO" },
    { label: "Sales Tax Template", action: "TODO" },
    { label: "Purchase Tax Template", action: "TODO" },
    { label: "Create Tax Template", action: "TODO" },
    { label: "Delete Transactions", action: "TODO" },
  ],
};

export default companyTriggers;