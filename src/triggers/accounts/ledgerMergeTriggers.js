// Auto-generated trigger map for: Ledger Merge
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/ledger_merge/ledger_merge.js
// Generated: 2026-05-13T23:34:09.342Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const ledgerMergeTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "form_start_merge",
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
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Root Type",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Root Type",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Account",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "form_start_merge",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
    ],
  },
  after_save: {
    onChange: [
      {
        type: "serverCall",
        method: "form_start_merge",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
    ],
  },
  update_primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "form_start_merge",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
    ],
  },
  start_merge: {
    onChange: [
      {
        type: "serverCall",
        method: "form_start_merge",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
    ],
  },
  set_merge_status: {
    onChange: [
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
    ],
  },
  root_type: {
    onChange: [
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
    ],
  },
  company: {
    onChange: [
      {
        type: "setValue",
        field: "account",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "merge_accounts",
        value: (doc) => [],
      },
    ],
  },
  merge_accounts_add: {
    onChange: [
    ],
  },
  merge_accounts_remove: {
    onChange: [
    ],
  },
  account: {
    onChange: [
    ],
  },
};

export default ledgerMergeTriggers;