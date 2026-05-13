// Auto-generated trigger map for: Asset Repair
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/asset_repair/asset_repair.js
// Generated: 2026-05-13T23:34:09.441Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const assetRepairTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_repair.asset_repair.get_downtime",
        args: (doc) => ({
					failure_date: doc.failure_date,
					completion_date: doc.completion_date,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "asset",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "downtime",
        value: (doc) => r.message + " Hrs",
      },
      {
        type: "setValue",
        field: "completion_date",
        value: (doc) => "TODO: frappe.datetime.now_datetime(",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_repair.asset_repair.get_downtime",
        args: (doc) => ({
					failure_date: doc.failure_date,
					completion_date: doc.completion_date,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "downtime",
        value: (doc) => r.message + " Hrs",
      },
      {
        type: "setValue",
        field: "completion_date",
        value: (doc) => "TODO: frappe.datetime.now_datetime(",
      },
    ],
  },
  show_general_ledger: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_repair.asset_repair.get_downtime",
        args: (doc) => ({
					failure_date: doc.failure_date,
					completion_date: doc.completion_date,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "downtime",
        value: (doc) => r.message + " Hrs",
      },
      {
        type: "setValue",
        field: "completion_date",
        value: (doc) => "TODO: frappe.datetime.now_datetime(",
      },
    ],
  },
  repair_status: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_repair.asset_repair.get_downtime",
        args: (doc) => ({
					failure_date: doc.failure_date,
					completion_date: doc.completion_date,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "downtime",
        value: (doc) => r.message + " Hrs",
      },
      {
        type: "setValue",
        field: "completion_date",
        value: (doc) => "TODO: frappe.datetime.now_datetime(",
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "downtime",
        value: (doc) => r.message + " Hrs",
      },
    ],
  },
  stock_consumption: {
    onChange: [
    ],
  },
  purchase_invoice: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_repair.asset_repair.get_unallocated_repair_cost",
        args: (doc) => ({
				purchase_invoice: row.purchase_invoice,
				expense_account: row.expense_account,
			}),
        patches: [
        ],
      },
    ],
  },
  expense_account: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_repair.asset_repair.get_unallocated_repair_cost",
        args: (doc) => ({
				purchase_invoice: row.purchase_invoice,
				expense_account: row.expense_account,
			}),
        patches: [
        ],
      },
    ],
  },
  warehouse: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.utils.get_incoming_rate",
        args: (doc) => ({
				args: item_args,
			}),
        patches: [
        ],
      },
    ],
  },
  consumed_quantity: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Accounting Ledger", action: "TODO" },
  ],
};

export default assetRepairTriggers;