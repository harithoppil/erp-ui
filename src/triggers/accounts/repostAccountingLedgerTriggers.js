// Auto-generated trigger map for: Repost Accounting Ledger
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/repost_accounting_ledger/repost_accounting_ledger.js
// Generated: 2026-05-13T23:34:09.333Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const repostAccountingLedgerTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "generate_preview",
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
        method: "generate_preview",
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
    { label: "Show Preview", action: "TODO" },
  ],
};

export default repostAccountingLedgerTriggers;