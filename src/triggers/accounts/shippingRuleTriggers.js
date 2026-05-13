// Auto-generated trigger map for: Shipping Rule
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/shipping_rule/shipping_rule.js
// Generated: 2026-05-13T23:34:09.373Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const shippingRuleTriggers = {
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  company: {
    onChange: [
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  calculate_based_on: {
    onChange: [
    ],
  },
  toggle_reqd: {
    onChange: [
    ],
  },
};

export default shippingRuleTriggers;