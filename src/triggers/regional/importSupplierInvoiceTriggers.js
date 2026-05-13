// Auto-generated trigger map for: Import Supplier Invoice
// Source: ../frappe-bench/apps/erpnext/erpnext/regional/doctype/import_supplier_invoice/import_supplier_invoice.js
// Generated: 2026-05-13T23:34:09.387Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const importSupplierInvoiceTriggers = {
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tax_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_buying_price_list",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 0),
      },
    ],
  },
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "tax_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "default_buying_price_list",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 0),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 0),
      },
    ],
  },
  toggle_read_only_fields: {
    onChange: [
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("import_invoices", "hidden", 0),
      },
    ],
  },
};

export default importSupplierInvoiceTriggers;