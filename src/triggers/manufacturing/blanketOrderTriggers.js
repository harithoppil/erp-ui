// Auto-generated trigger map for: Blanket Order
// Source: ../frappe-bench/apps/erpnext/erpnext/manufacturing/doctype/blanket_order/blanket_order.js
// Generated: 2026-05-13T23:34:09.288Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const blanketOrderTriggers = {
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "terms",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 0),
      },
    ],
  },
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "terms",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 0),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "terms",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 0),
      },
    ],
  },
  onload_post_render: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "terms",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 0),
      },
    ],
  },
  tc_name: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "terms",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 0),
      },
    ],
  },
  set_tc_name_filter: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("supplier", "reqd", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("customer", "reqd", 0),
      },
    ],
  },
  blanket_order_type: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Sales Order", action: "TODO" },
    { label: "Quotation", action: "TODO" },
    { label: "Purchase Order", action: "TODO" },
  ],
};

export default blanketOrderTriggers;