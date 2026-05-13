// Auto-generated trigger map for: Bank Reconciliation Tool
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/bank_reconciliation_tool/bank_reconciliation_tool.js
// Generated: 2026-05-13T23:34:09.356Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bankReconciliationToolTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_statement_import.bank_statement_import.upload_bank_statement",
        args: (doc) => ({
					dt: doc.doctype,
					dn: doc.name,
					company: doc.company,
					bank_account: doc.bank_account,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.auto_reconcile_vouchers",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: frappe.datetime.add_days(doc.bank_statement_from_date, -1),
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: doc.bank_statement_to_date,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "bank_statement_from_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "bank_statement_to_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "from_reference_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "to_reference_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "account_opening_balance",
        value: (doc) => response.message,
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_statement_import.bank_statement_import.upload_bank_statement",
        args: (doc) => ({
					dt: doc.doctype,
					dn: doc.name,
					company: doc.company,
					bank_account: doc.bank_account,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.auto_reconcile_vouchers",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: frappe.datetime.add_days(doc.bank_statement_from_date, -1),
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: doc.bank_statement_to_date,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "bank_statement_from_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "bank_statement_to_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "from_reference_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "to_reference_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "account_opening_balance",
        value: (doc) => response.message,
      },
    ],
  },
  filter_by_reference_date: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_statement_import.bank_statement_import.upload_bank_statement",
        args: (doc) => ({
					dt: doc.doctype,
					dn: doc.name,
					company: doc.company,
					bank_account: doc.bank_account,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.auto_reconcile_vouchers",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: frappe.datetime.add_days(doc.bank_statement_from_date, -1),
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: doc.bank_statement_to_date,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "bank_statement_from_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "bank_statement_to_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "from_reference_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "to_reference_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "account_opening_balance",
        value: (doc) => response.message,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_statement_import.bank_statement_import.upload_bank_statement",
        args: (doc) => ({
					dt: doc.doctype,
					dn: doc.name,
					company: doc.company,
					bank_account: doc.bank_account,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.auto_reconcile_vouchers",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: frappe.datetime.add_days(doc.bank_statement_from_date, -1),
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: doc.bank_statement_to_date,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_opening_balance",
        value: (doc) => response.message,
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "account_opening_balance",
        value: (doc) => response.message,
      },
    ],
  },
  bank_account: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: frappe.datetime.add_days(doc.bank_statement_from_date, -1),
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: doc.bank_statement_to_date,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_opening_balance",
        value: (doc) => response.message,
      },
    ],
  },
  bank_statement_from_date: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: frappe.datetime.add_days(doc.bank_statement_from_date, -1),
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_reconciliation_tool.bank_reconciliation_tool.get_account_balance",
        args: (doc) => ({
					bank_account: doc.bank_account,
					till_date: doc.bank_statement_to_date,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_opening_balance",
        value: (doc) => response.message,
      },
    ],
  },
  $buttons: [
    { label: "Upload Bank Statement", action: "TODO" },
    { label: "Auto Reconcile", action: "TODO" },
    { label: "Get Unreconciled Entries", action: "TODO" },
  ],
};

export default bankReconciliationToolTriggers;