// Auto-generated trigger map for: Purchase Invoice
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/purchase_invoice/purchase_invoice.js
// Generated: 2026-05-13T23:34:09.345Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const purchaseInvoiceTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.purchase_receipt.purchase_receipt.make_lcv",
        args: (doc) => ({
				doctype: doc.doctype,
				docname: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "additional_discount_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "cash_bank_account",
        value: (doc) => doc.account ?? account,
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.purchase_receipt.purchase_receipt.make_lcv",
        args: (doc) => ({
				doctype: doc.doctype,
				docname: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "cash_bank_account",
        value: (doc) => doc.account ?? account,
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  mode_of_payment: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.purchase_receipt.purchase_receipt.make_lcv",
        args: (doc) => ({
				doctype: doc.doctype,
				docname: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "cash_bank_account",
        value: (doc) => doc.account ?? account,
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  add_custom_buttons: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.purchase_receipt.purchase_receipt.make_lcv",
        args: (doc) => ({
				doctype: doc.doctype,
				docname: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  is_subcontracted: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  update_stock: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  make_purchase_receipt: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_account",
        args: (doc) => ({
					party_type: "Supplier",
					party: doc.supplier,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "credit_to",
        value: (doc) => response.message,
      },
    ],
  },
  $buttons: [
    { label: "Change Release Date", action: "TODO" },
    { label: "Unblock Invoice", action: "TODO" },
    { label: "Block Invoice", action: "TODO" },
    { label: "Payment", action: "TODO" },
    { label: "Return / Debit Note", action: "TODO" },
    { label: "Payment Request", action: "TODO" },
    { label: "Purchase Order", action: "TODO" },
    { label: "Purchase Receipt", action: "TODO" },
    { label: "Inter Company Invoice", action: "TODO" },
    { label: "Purchase Receipt", action: "TODO" },
    { label: "Purchase Receipt", action: "TODO" },
    { label: "Landed Cost Voucher", action: "TODO" },
  ],
};

export default purchaseInvoiceTriggers;