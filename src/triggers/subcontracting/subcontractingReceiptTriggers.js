// Auto-generated trigger map for: Subcontracting Receipt
// Source: ../frappe-bench/apps/erpnext/erpnext/subcontracting/doctype/subcontracting_receipt/subcontracting_receipt.js
// Generated: 2026-05-13T23:34:09.384Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const subcontractingReceiptTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_receipt.subcontracting_receipt.make_subcontract_return_against_rejected_warehouse",
        args: (doc) => ({
											source_name: doc.name,
										}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_secondary_items",
        args: (doc) => ({
				recalculate_rate: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "set_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "rejected_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "supplier_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("items", "cannot_add_rows", true),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_receipt.subcontracting_receipt.make_subcontract_return_against_rejected_warehouse",
        args: (doc) => ({
											source_name: doc.name,
										}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_secondary_items",
        args: (doc) => ({
				recalculate_rate: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "set_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "rejected_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "supplier_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("items", "cannot_add_rows", true),
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  set_warehouse: {
    onChange: [
      {
        type: "serverCall",
        method: "get_secondary_items",
        args: (doc) => ({
				recalculate_rate: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "set_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "rejected_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "supplier_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  rejected_warehouse: {
    onChange: [
      {
        type: "serverCall",
        method: "get_secondary_items",
        args: (doc) => ({
				recalculate_rate: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "set_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "rejected_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "supplier_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  get_secondary_items: {
    onChange: [
      {
        type: "serverCall",
        method: "get_secondary_items",
        args: (doc) => ({
				recalculate_rate: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "set_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "rejected_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "supplier_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  set_queries: {
    onChange: [
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "set_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "rejected_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "supplier_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  get_serial_and_batch_bundle_filters: {
    onChange: [
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  setup_quality_inspection: {
    onChange: [
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  set_route_options_for_new_doc: {
    onChange: [
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  reset_raw_materials_table: {
    onChange: [
      {
        type: "serverCall",
        method: "reset_raw_materials",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "posting_time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
    ],
  },
  amount: {
    onChange: [
    ],
  },
  expense_account: {
    onChange: [
    ],
  },
  additional_costs_remove: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Stock Ledger", action: "TODO" },
    { label: "Accounting Ledger", action: "TODO" },
    { label: "Purchase Receipt", action: "TODO" },
    { label: "Subcontract Return", action: "TODO" },
    { label: "Subcontracting Order", action: "TODO" },
  ],
};

export default subcontractingReceiptTriggers;