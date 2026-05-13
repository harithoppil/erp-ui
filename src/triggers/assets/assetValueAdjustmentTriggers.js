// Auto-generated trigger map for: Asset Value Adjustment
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/asset_value_adjustment/asset_value_adjustment.js
// Generated: 2026-05-13T23:34:09.441Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const assetValueAdjustmentTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset.asset.get_asset_value_after_depreciation",
        args: (doc) => ({
					asset_name: doc.asset,
					finance_book: doc.finance_book,
				}),
        patches: [
          { field: "current_asset_value", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment.get_value_of_accounting_dimensions",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "asset",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "difference_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "current_asset_value",
        value: (doc) => r.message,
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset.asset.get_asset_value_after_depreciation",
        args: (doc) => ({
					asset_name: doc.asset,
					finance_book: doc.finance_book,
				}),
        patches: [
          { field: "current_asset_value", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment.get_value_of_accounting_dimensions",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "current_asset_value",
        value: (doc) => r.message,
      },
    ],
  },
  company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset.asset.get_asset_value_after_depreciation",
        args: (doc) => ({
					asset_name: doc.asset,
					finance_book: doc.finance_book,
				}),
        patches: [
          { field: "current_asset_value", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment.get_value_of_accounting_dimensions",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "current_asset_value",
        value: (doc) => r.message,
      },
    ],
  },
  asset: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset.asset.get_asset_value_after_depreciation",
        args: (doc) => ({
					asset_name: doc.asset,
					finance_book: doc.finance_book,
				}),
        patches: [
          { field: "current_asset_value", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment.get_value_of_accounting_dimensions",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "current_asset_value",
        value: (doc) => r.message,
      },
    ],
  },
  finance_book: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset.asset.get_asset_value_after_depreciation",
        args: (doc) => ({
					asset_name: doc.asset,
					finance_book: doc.finance_book,
				}),
        patches: [
          { field: "current_asset_value", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment.get_value_of_accounting_dimensions",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "current_asset_value",
        value: (doc) => r.message,
      },
    ],
  },
  set_current_asset_value: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset.asset.get_asset_value_after_depreciation",
        args: (doc) => ({
					asset_name: doc.asset,
					finance_book: doc.finance_book,
				}),
        patches: [
          { field: "current_asset_value", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment.get_value_of_accounting_dimensions",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "current_asset_value",
        value: (doc) => r.message,
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "current_asset_value",
        value: (doc) => r.message,
      },
    ],
  },
  set_acc_dimension: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_value_adjustment.asset_value_adjustment.get_value_of_accounting_dimensions",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
};

export default assetValueAdjustmentTriggers;