// Auto-generated trigger map for: Stock Settings
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/stock_settings/stock_settings.js
// Generated: 2026-05-13T23:34:09.407Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const stockSettingsTriggers = {
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "disable_serial_no_and_batch_selector",
        value: (doc) => 1,
      },
      {
        type: "setValue",
        field: "disable_serial_no_and_batch_selector",
        value: (doc) => 1,
      },
      {
        type: "setValue",
        field: "allow_negative_stock",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "update_price_list_based_on",
        value: (doc) => "TODO: cint(frappe.defaults.get_default('editable_price_list_rate'",
      },
      {
        type: "setValue",
        field: "update_price_list_based_on",
        value: (doc) => "Rate",
      },
    ],
  },
  allow_negative_stock: {
    onChange: [
      {
        type: "setValue",
        field: "allow_negative_stock",
        value: (doc) => 0,
      },
      {
        type: "setValue",
        field: "update_price_list_based_on",
        value: (doc) => "TODO: cint(frappe.defaults.get_default('editable_price_list_rate'",
      },
      {
        type: "setValue",
        field: "update_price_list_based_on",
        value: (doc) => "Rate",
      },
    ],
  },
};

export default stockSettingsTriggers;