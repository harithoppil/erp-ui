// Auto-generated trigger map for: Subscription
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/subscription/subscription.js
// Generated: 2026-05-13T23:34:09.328Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const subscriptionTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "party_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_tax_template",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  cancel_this_subscription: {
    onChange: [
    ],
  },
  renew_this_subscription: {
    onChange: [
    ],
  },
  get_subscription_updates: {
    onChange: [
    ],
  },
  force_fetch_subscription_updates: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Fetch Subscription Updates", action: "TODO" },
    { label: "Force-Fetch Subscription Updates", action: "TODO" },
    { label: "Cancel Subscription", action: "TODO" },
    { label: "Restart Subscription", action: "TODO" },
  ],
};

export default subscriptionTriggers;