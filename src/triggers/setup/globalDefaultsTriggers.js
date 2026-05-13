// Auto-generated trigger map for: Global Defaults
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/global_defaults/global_defaults.js
// Generated: 2026-05-13T23:34:09.257Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const globalDefaultsTriggers = {
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get_list",
        args: (doc) => ({
				doctype: "UOM Conversion Factor",
				filters: { category: __("Length") },
				fields: ["to_uom"],
				limit_page_length: 500,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "default_distance_unit",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get_list",
        args: (doc) => ({
				doctype: "UOM Conversion Factor",
				filters: { category: __("Length") },
				fields: ["to_uom"],
				limit_page_length: 500,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "default_distance_unit",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  get_distance_uoms: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get_list",
        args: (doc) => ({
				doctype: "UOM Conversion Factor",
				filters: { category: __("Length") },
				fields: ["to_uom"],
				limit_page_length: 500,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "default_distance_unit",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
};

export default globalDefaultsTriggers;