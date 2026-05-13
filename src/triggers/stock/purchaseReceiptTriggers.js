// Auto-generated trigger map for: Purchase Receipt
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/purchase_receipt/purchase_receipt.js
// Generated: 2026-05-13T23:34:09.415Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const purchaseReceiptTriggers = {
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
        type: "setQuery",
        targetField: "taxes_and_charges",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  onload: {
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
    ],
  },
  callback: {
    onChange: [
    ],
  },
  add_custom_buttons: {
    onChange: [
    ],
  },
  company: {
    onChange: [
    ],
  },
  toggle_display_account_head: {
    onChange: [
    ],
  },
  item_code: {
    onChange: [
    ],
  },
  qty: {
    onChange: [
    ],
  },
  sample_quantity: {
    onChange: [
    ],
  },
  batch_no: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Debit Note", action: "TODO" },
    { label: "Delivery Note", action: "TODO" },
    { label: "Landed Cost Voucher", action: "TODO" },
    { label: "Purchase Invoice", action: "TODO" },
    { label: "Asset", action: "TODO" },
    { label: "Asset Movement", action: "TODO" },
    { label: "Purchase Order", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Purchase Return", action: "TODO" },
    { label: "Make Stock Entry", action: "TODO" },
    { label: "Purchase Invoice", action: "TODO" },
    { label: "Sample Retention Stock Entry", action: "TODO" },
    { label: "Reopen", action: "TODO" },
  ],
};

export default purchaseReceiptTriggers;