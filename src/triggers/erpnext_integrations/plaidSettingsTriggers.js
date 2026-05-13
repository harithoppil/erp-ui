// Auto-generated trigger map for: Plaid Settings
// Source: ../frappe-bench/apps/erpnext/erpnext/erpnext_integrations/doctype/plaid_settings/plaid_settings.js
// Generated: 2026-05-13T23:34:09.292Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const plaidSettingsTriggers = {
  enabled: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.erpnext_integrations.doctype.plaid_settings.plaid_settings.enqueue_synchronization",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.erpnext_integrations.doctype.plaid_settings.plaid_settings.enqueue_synchronization",
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
  $buttons: [
    { label: "Link a new bank account", action: "TODO" },
    { label: "Reset Plaid Link", action: "TODO" },
    { label: "Sync Now", action: "TODO" },
  ],
};

export default plaidSettingsTriggers;