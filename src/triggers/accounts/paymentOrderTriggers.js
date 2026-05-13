// Auto-generated trigger map for: Payment Order
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/payment_order/payment_order.js
// Generated: 2026-05-13T23:34:09.335Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const paymentOrderTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.payment_order.payment_order.make_payment_records",
        args: (doc) => ({
					name: doc.name,
					supplier: args.supplier,
					mode_of_payment: args.mode_of_payment,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "company_bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("references", "cannot_add_rows", true),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.payment_order.payment_order.make_payment_records",
        args: (doc) => ({
					name: doc.name,
					supplier: args.supplier,
					mode_of_payment: args.mode_of_payment,
				}),
        patches: [
        ],
      },
    ],
  },
  remove_row_if_empty: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.payment_order.payment_order.make_payment_records",
        args: (doc) => ({
					name: doc.name,
					supplier: args.supplier,
					mode_of_payment: args.mode_of_payment,
				}),
        patches: [
        ],
      },
    ],
  },
  remove_button: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.payment_order.payment_order.make_payment_records",
        args: (doc) => ({
					name: doc.name,
					supplier: args.supplier,
					mode_of_payment: args.mode_of_payment,
				}),
        patches: [
        ],
      },
    ],
  },
  get_from_payment_entry: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.payment_order.payment_order.make_payment_records",
        args: (doc) => ({
					name: doc.name,
					supplier: args.supplier,
					mode_of_payment: args.mode_of_payment,
				}),
        patches: [
        ],
      },
    ],
  },
  get_from_payment_request: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.payment_order.payment_order.make_payment_records",
        args: (doc) => ({
					name: doc.name,
					supplier: args.supplier,
					mode_of_payment: args.mode_of_payment,
				}),
        patches: [
        ],
      },
    ],
  },
  make_payment_records: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.payment_order.payment_order.make_payment_records",
        args: (doc) => ({
					name: doc.name,
					supplier: args.supplier,
					mode_of_payment: args.mode_of_payment,
				}),
        patches: [
        ],
      },
    ],
  },
  get_query: {
    onChange: [
    ],
  },
  callback: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Payment Request", action: "TODO" },
    { label: "Payment Entry", action: "TODO" },
    { label: "Create Journal Entries", action: "TODO" },
  ],
};

export default paymentOrderTriggers;