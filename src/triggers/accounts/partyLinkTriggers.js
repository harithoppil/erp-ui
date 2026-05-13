// Auto-generated trigger map for: Party Link
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/party_link/party_link.js
// Generated: 2026-05-13T23:34:09.332Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const partyLinkTriggers = {
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "primary_role",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "secondary_role",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "primary_party",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "secondary_role",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "secondary_party",
        value: (doc) => "",
      },
    ],
  },
};

export default partyLinkTriggers;