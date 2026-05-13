// Auto-generated trigger map for: Item
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/item/item.js
// Generated: 2026-05-13T23:34:09.406Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const itemTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  Quotation: {
    onChange: [
    ],
  },
  Order: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  Note: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  Invoice: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  Receipt: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  Request: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  Entry: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "item_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("is_fixed_asset", "read_only", frm.doc.__onload?.asset_exists ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  image: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  is_customer_provided_item: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  is_fixed_asset: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_asset_naming_series",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "is_stock_item",
        value: (doc) => frm.doc.is_fixed_asset ? 0 : 1,
      },
    ],
  },
  set_asset_naming_series: {
    onChange: [
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("asset_naming_series", "options", naming_series),
      },
    ],
  },
  auto_create_assets: {
    onChange: [
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
    ],
  },
  item_code: {
    onChange: [
      {
        type: "setValue",
        field: "item_name",
        value: (doc) => frm.doc.item_code,
      },
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
    ],
  },
  is_stock_item: {
    onChange: [
      {
        type: "setValue",
        field: "has_batch_no",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "create_new_batch",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "has_serial_no",
        value: (doc) => 0,
      },
    ],
  },
  has_variants: {
    onChange: [
    ],
  },
  reorder_levels_add: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select the Warehouse first",
      },
    ],
  },
  customer_items_add: {
    onChange: [
    ],
  },
  customer_name: {
    onChange: [
    ],
  },
  customer_group: {
    onChange: [
    ],
  },
  uom: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_uom_conv_factor",
        args: (doc) => ({
					uom: row.uom,
					stock_uom: doc.stock_uom,
				}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Stock Balance", action: "TODO" },
    { label: "Stock Ledger", action: "TODO" },
    { label: "Stock Projected Qty", action: "TODO" },
    { label: "Show Variants", action: "TODO" },
    { label: "Item Variant Settings", action: "TODO" },
    { label: "Variant Details Report", action: "TODO" },
    { label: "Single Variant", action: "TODO" },
    { label: "Multiple Variants", action: "TODO" },
    { label: "Variant", action: "TODO" },
    { label: "Duplicate", action: "TODO" },
    { label: "Add / Edit Prices", action: "TODO" },
    { label: "Make Lead Time", action: "TODO" },
  ],
};

export default itemTriggers;