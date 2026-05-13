// Auto-generated trigger map for: Accounts Settings
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/accounts_settings/accounts_settings.js
// Generated: 2026-05-13T23:34:09.299Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const accountsSettingsTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "drop_ar_sql_procedures",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "enable_immutable_ledger",
        value: (doc) => 0,
      },
    ],
  },
  enable_immutable_ledger: {
    onChange: [
      {
        type: "serverCall",
        method: "drop_ar_sql_procedures",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "enable_immutable_ledger",
        value: (doc) => 0,
      },
    ],
  },
  drop_ar_procedures: {
    onChange: [
      {
        type: "serverCall",
        method: "drop_ar_sql_procedures",
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
};

export default accountsSettingsTriggers;