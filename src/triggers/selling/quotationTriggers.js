// Auto-generated trigger map for: Quotation
// Source: ../frappe-bench/apps/erpnext/erpnext/selling/doctype/quotation/quotation.js
// Generated: 2026-05-13T23:34:09.190Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const quotationTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "quotation_to",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer_name",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("packed_items", "cannot_add_rows", true),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("packed_items", "cannot_delete_rows", true),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer_name",
        value: (doc) => "",
      },
    ],
  },
  quotation_to: {
    onChange: [
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer_name",
        value: (doc) => "",
      },
    ],
  },
  set_label: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Sales Order", action: "TODO" },
    { label: "Update Items", action: "TODO" },
    { label: "Set as Lost", action: "TODO" },
    { label: "Opportunity", action: "TODO" },
  ],
};

export default quotationTriggers;