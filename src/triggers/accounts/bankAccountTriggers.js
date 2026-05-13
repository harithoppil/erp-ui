// Auto-generated trigger map for: Bank Account
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/bank_account/bank_account.js
// Generated: 2026-05-13T23:34:09.337Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bankAccountTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "party_type",
        query: (doc) => ({ query: "erpnext.setup.doctype.party_type.party_type.get_party_type" }),
      },
      {
        type: "setValue",
        field: "integration_id",
        value: (doc) => "",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "integration_id",
        value: (doc) => "",
      },
    ],
  },
  $buttons: [
    { label: "Unlink external integrations", action: "TODO" },
  ],
};

export default bankAccountTriggers;