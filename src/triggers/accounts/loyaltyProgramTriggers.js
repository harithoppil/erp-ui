// Auto-generated trigger map for: Loyalty Program
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/loyalty_program/loyalty_program.js
// Generated: 2026-05-13T23:34:09.333Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const loyaltyProgramTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "expense_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "company",
        value: (doc) => "TODO: frappe.defaults.get_user_default('Company'",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select the Multiple Tier Program type for more than one collection rules.",
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "expense_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "company",
        value: (doc) => "TODO: frappe.defaults.get_user_default('Company'",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select the Multiple Tier Program type for more than one collection rules.",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select the Multiple Tier Program type for more than one collection rules.",
      },
    ],
  },
  company: {
    onChange: [
    ],
  },
};

export default loyaltyProgramTriggers;