// Auto-generated trigger map for: Warranty Claim
// Source: ../frappe-bench/apps/erpnext/erpnext/support/doctype/warranty_claim/warranty_claim.js
// Generated: 2026-05-13T23:34:09.377Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const warrantyClaimTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "serial_no",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "item_code",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  customer: {
    onChange: [
    ],
  },
  customer_address: {
    onChange: [
    ],
  },
  contact_person: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Maintenance Visit", action: "TODO" },
  ],
};

export default warrantyClaimTriggers;