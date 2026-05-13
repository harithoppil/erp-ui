// Auto-generated trigger map for: Delivery Note
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/delivery_note/delivery_note.js
// Generated: 2026-05-13T23:34:09.410Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const deliveryNoteTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "transporter",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "driver",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
  print_without_amount: {
    onChange: [
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  expense_account: {
    onChange: [
    ],
  },
  company: {
    onChange: [
    ],
  },
  unhide_account_head: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Credit Note", action: "TODO" },
    { label: "Sales Order", action: "TODO" },
    { label: "Pick List", action: "TODO" },
    { label: "Shipment", action: "TODO" },
    { label: "Installation Note", action: "TODO" },
    { label: "Sales Return", action: "TODO" },
    { label: "Delivery Trip", action: "TODO" },
    { label: "Packing Slip", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Sales Invoice", action: "TODO" },
    { label: "Reopen", action: "TODO" },
  ],
};

export default deliveryNoteTriggers;