// Auto-generated trigger map for: Warehouse
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/warehouse/warehouse.js
// Generated: 2026-05-13T23:34:09.416Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const warehouseTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "default_in_transit_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "parent_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "disabled",
        value: (doc) => 1 - frm.doc.disabled,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "read_only", frm.doc.__onload.stock_exists),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "disabled",
        value: (doc) => 1 - frm.doc.disabled,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "read_only", frm.doc.__onload.stock_exists),
      },
    ],
  },
  $buttons: [
    { label: "Stock Balance", action: "TODO" },
  ],
};

export default warehouseTriggers;