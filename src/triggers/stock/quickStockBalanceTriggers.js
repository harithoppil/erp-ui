// Auto-generated trigger map for: Quick Stock Balance
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/quick_stock_balance/quick_stock_balance.js
// Generated: 2026-05-13T23:34:09.418Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const quickStockBalanceTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  make_custom_stock_report_button: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  check_warehouse_and_date: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  warehouse: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  date: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  item: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  item_barcode: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  get_stock_and_item_details: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Stock Balance Report", action: "TODO" },
  ],
};

export default quickStockBalanceTriggers;