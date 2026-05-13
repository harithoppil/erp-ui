// Auto-generated trigger map for: Bank Clearance
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/bank_clearance/bank_clearance.js
// Generated: 2026-05-13T23:34:09.306Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bankClearanceTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "update_clearance_date",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_payment_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => doc.default_bank_account ?? default_bank_account,
      },
      {
        type: "setValue",
        field: "from_date",
        value: (doc) => "TODO: frappe.datetime.month_start(",
      },
      {
        type: "setValue",
        field: "to_date",
        value: (doc) => "TODO: frappe.datetime.month_end(",
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "update_clearance_date",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_payment_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => doc.default_bank_account ?? default_bank_account,
      },
      {
        type: "setValue",
        field: "from_date",
        value: (doc) => "TODO: frappe.datetime.month_start(",
      },
      {
        type: "setValue",
        field: "to_date",
        value: (doc) => "TODO: frappe.datetime.month_end(",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "update_clearance_date",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_payment_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  update_clearance_date: {
    onChange: [
      {
        type: "serverCall",
        method: "update_clearance_date",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_payment_entries",
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
  get_payment_entries: {
    onChange: [
      {
        type: "serverCall",
        method: "get_payment_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Get Payment Entries", action: "TODO" },
    { label: "Update Clearance Date", action: "TODO" },
  ],
};

export default bankClearanceTriggers;