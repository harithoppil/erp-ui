// Auto-generated trigger map for: Bank Transaction
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/bank_transaction/bank_transaction.js
// Generated: 2026-05-13T23:34:09.304Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bankTransactionTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "party_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  bank_account: {
    onChange: [
    ],
  },
  get_payment_doctypes: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Unreconcile Transaction", action: "TODO" },
  ],
};

export default bankTransactionTriggers;