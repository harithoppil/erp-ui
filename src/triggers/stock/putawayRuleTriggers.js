// Auto-generated trigger map for: Putaway Rule
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/putaway_rule/putaway_rule.js
// Generated: 2026-05-13T23:34:09.408Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const putawayRuleTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.get_item_details.get_conversion_factor",
        args: (doc) => ({
					item_code: doc.item_code,
					uom: doc.uom,
				}),
        patches: [
          { field: "conversion_factor", fromResponse: "conversion_factor" },
        ],
      },
      {
        type: "setQuery",
        targetField: "warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "conversion_factor",
        value: (doc) => r.message.conversion_factor,
      },
      {
        type: "setValue",
        field: "stock_capacity",
        value: (doc) => doc.stock_capacity ?? stock_capacity,
      },
      {
        type: "setValue",
        field: "stock_capacity",
        value: (doc) => doc.stock_capacity ?? stock_capacity,
      },
    ],
  },
  uom: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.get_item_details.get_conversion_factor",
        args: (doc) => ({
					item_code: doc.item_code,
					uom: doc.uom,
				}),
        patches: [
          { field: "conversion_factor", fromResponse: "conversion_factor" },
        ],
      },
      {
        type: "setValue",
        field: "conversion_factor",
        value: (doc) => r.message.conversion_factor,
      },
      {
        type: "setValue",
        field: "stock_capacity",
        value: (doc) => doc.stock_capacity ?? stock_capacity,
      },
      {
        type: "setValue",
        field: "stock_capacity",
        value: (doc) => doc.stock_capacity ?? stock_capacity,
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "conversion_factor",
        value: (doc) => r.message.conversion_factor,
      },
      {
        type: "setValue",
        field: "stock_capacity",
        value: (doc) => doc.stock_capacity ?? stock_capacity,
      },
    ],
  },
  capacity: {
    onChange: [
      {
        type: "setValue",
        field: "stock_capacity",
        value: (doc) => doc.stock_capacity ?? stock_capacity,
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
};

export default putawayRuleTriggers;