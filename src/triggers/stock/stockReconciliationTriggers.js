// Auto-generated trigger map for: Stock Reconciliation
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/stock_reconciliation/stock_reconciliation.js
// Generated: 2026-05-13T23:34:09.398Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const stockReconciliationTriggers = {
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
        args: (doc) => ({
						warehouse: data.warehouse,
						posting_date: doc.posting_date,
						posting_time: doc.posting_time,
						company: doc.company,
						item_code: data.item_code,
						ignore_empty_stock: data.ignore_empty_stock,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
        args: (doc) => ({
						warehouse: data.warehouse,
						posting_date: doc.posting_date,
						posting_time: doc.posting_time,
						company: doc.company,
						item_code: data.item_code,
						ignore_empty_stock: data.ignore_empty_stock,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
        args: (doc) => ({
						warehouse: data.warehouse,
						posting_date: doc.posting_date,
						posting_time: doc.posting_time,
						company: doc.company,
						item_code: data.item_code,
						ignore_empty_stock: data.ignore_empty_stock,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  scan_barcode: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
        args: (doc) => ({
						warehouse: data.warehouse,
						posting_date: doc.posting_date,
						posting_time: doc.posting_time,
						company: doc.company,
						item_code: data.item_code,
						ignore_empty_stock: data.ignore_empty_stock,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  scan_mode: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
        args: (doc) => ({
						warehouse: data.warehouse,
						posting_date: doc.posting_date,
						posting_time: doc.posting_time,
						company: doc.company,
						item_code: data.item_code,
						ignore_empty_stock: data.ignore_empty_stock,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  set_warehouse: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
        args: (doc) => ({
						warehouse: data.warehouse,
						posting_date: doc.posting_date,
						posting_time: doc.posting_time,
						company: doc.company,
						item_code: data.item_code,
						ignore_empty_stock: data.ignore_empty_stock,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  get_items: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_items",
        args: (doc) => ({
						warehouse: data.warehouse,
						posting_date: doc.posting_date,
						posting_time: doc.posting_time,
						company: doc.company,
						item_code: data.item_code,
						ignore_empty_stock: data.ignore_empty_stock,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  get_query: {
    onChange: [
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  posting_date: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  posting_time: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  set_valuation_rate_and_qty_for_all_items: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  set_valuation_rate_and_qty: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_stock_balance_for",
        args: (doc) => ({
					item_code: d.item_code,
					warehouse: d.warehouse,
					posting_date: doc.posting_date,
					posting_time: doc.posting_time,
					batch_no: d.batch_no,
					row: doc.d ?? d,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  set_amount_quantity: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  toggle_display_account_head: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  purpose: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  set_expense_account: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.stock_reconciliation.stock_reconciliation.get_difference_account",
        args: (doc) => ({
					purpose: doc.purpose,
					company: doc.company,
				}),
        patches: [
          { field: "expense_account", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "expense_account",
        value: (doc) => r.message,
      },
    ],
  },
  warehouse: {
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
  valuation_rate: {
    onChange: [
    ],
  },
  serial_no: {
    onChange: [
    ],
  },
  items_add: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Fetch Items from Warehouse", action: "TODO" },
  ],
};

export default stockReconciliationTriggers;