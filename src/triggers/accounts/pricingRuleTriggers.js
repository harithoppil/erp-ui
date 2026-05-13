// Auto-generated trigger map for: Pricing Rule
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/pricing_rule/pricing_rule.js
// Generated: 2026-05-13T23:34:09.355Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const pricingRuleTriggers = {
  setup: {
    onChange: [
      {
        type: "setValue",
        field: "for_price_list",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("pricing_rule_help", "options", help_content),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "for_price_list",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("pricing_rule_help", "options", help_content),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "for_price_list",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("pricing_rule_help", "options", help_content),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  apply_on: {
    onChange: [
      {
        type: "setValue",
        field: "for_price_list",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  toggle_reqd_apply_on: {
    onChange: [
      {
        type: "setValue",
        field: "for_price_list",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  rate_or_discount: {
    onChange: [
      {
        type: "setValue",
        field: "for_price_list",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  selling: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  buying: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  margin_type: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("margin_rate_or_amount", "description", frm.doc.margin_type == "Percentage" ? "In Percentage %" : "In Amount"),
      },
    ],
  },
  set_options_for_applicable_for: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
    ],
  },
};

export default pricingRuleTriggers;