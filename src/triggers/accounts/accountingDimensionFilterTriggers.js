// Auto-generated trigger map for: Accounting Dimension Filter
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/accounting_dimension_filter/accounting_dimension_filter.js
// Generated: 2026-05-13T23:34:09.313Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const accountingDimensionFilterTriggers = {
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "allow_or_restrict",
        value: (doc) => "Restrict",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("dimension_filter_help", "options", help_content),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("accounting_dimension", "options", options),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "allow_or_restrict",
        value: (doc) => "Restrict",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("accounting_dimension", "options", options),
      },
    ],
  },
  setup_filters: {
    onChange: [
      {
        type: "setValue",
        field: "allow_or_restrict",
        value: (doc) => "Restrict",
      },
    ],
  },
  accounting_dimension: {
    onChange: [
      {
        type: "setValue",
        field: "allow_or_restrict",
        value: (doc) => "Restrict",
      },
    ],
  },
  apply_restriction_on_values: {
    onChange: [
      {
        type: "setValue",
        field: "allow_or_restrict",
        value: (doc) => "Restrict",
      },
    ],
  },
  dimensions_add: {
    onChange: [
    ],
  },
};

export default accountingDimensionFilterTriggers;