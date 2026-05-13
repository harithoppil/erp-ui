// Auto-generated trigger map for: Repost Payment Ledger
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/repost_payment_ledger/repost_payment_ledger.js
// Generated: 2026-05-13T23:34:09.330Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const repostPaymentLedgerTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.repost_payment_ledger.repost_payment_ledger.execute_repost_payment_ledger",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "voucher_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.repost_payment_ledger.repost_payment_ledger.execute_repost_payment_ledger",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
};

export default repostPaymentLedgerTriggers;