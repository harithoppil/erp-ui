// Auto-generated trigger map for: Payment Request
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/payment_request/payment_request.js
// Generated: 2026-05-13T23:34:09.309Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const paymentRequestTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "party_type",
        query: (doc) => ({ query: "erpnext.setup.doctype.party_type.party_type.get_party_type" }),
      },
      {
        type: "setQuery",
        targetField: "payment_gateway_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  $buttons: [
    { label: "Resend Payment Email", action: "TODO" },
    { label: "Create Payment Entry", action: "TODO" },
  ],
};

export default paymentRequestTriggers;