// Auto-generated trigger map for: Invoice Discounting
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/invoice_discounting/invoice_discounting.js
// Generated: 2026-05-13T23:34:09.315Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const invoiceDiscountingTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "loan_end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  filter_accounts: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "loan_end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  refresh_filters: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "loan_end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "loan_end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  loan_start_date: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "loan_end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  loan_period: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "loan_end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  set_end_date: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "loan_end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  calculate_total_amount: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_amount",
        value: (doc) => doc.total_amount ?? total_amount,
      },
    ],
  },
  get_invoices: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.invoice_discounting.invoice_discounting.get_invoices",
        args: (doc) => ({
						filters: data,
					}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  create_disbursement_entry: {
    onChange: [
      {
        type: "serverCall",
        method: "create_disbursement_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  close_loan: {
    onChange: [
      {
        type: "serverCall",
        method: "close_loan",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  show_general_ledger: {
    onChange: [
    ],
  },
  sales_invoice: {
    onChange: [
    ],
  },
  invoices_remove: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Get Invoices", action: "TODO" },
    { label: "Disburse Loan", action: "TODO" },
    { label: "Close Loan", action: "TODO" },
    { label: "Accounting Ledger", action: "TODO" },
  ],
};

export default invoiceDiscountingTriggers;