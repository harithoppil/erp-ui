// Auto-generated trigger map for: Share Transfer
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/share_transfer/share_transfer.js
// Generated: 2026-05-13T23:34:09.300Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const shareTransferTriggers = {
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "equity_or_liability_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "asset_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  no_of_shares: {
    onChange: [
      {
        type: "setQuery",
        targetField: "equity_or_liability_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "asset_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  rate: {
    onChange: [
      {
        type: "setQuery",
        targetField: "equity_or_liability_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "asset_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  transfer_type: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Create Journal Entry", action: "TODO" },
  ],
};

export default shareTransferTriggers;