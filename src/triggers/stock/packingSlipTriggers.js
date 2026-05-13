// Auto-generated trigger map for: Packing Slip
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/packing_slip/packing_slip.js
// Generated: 2026-05-13T23:34:09.402Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const packingSlipTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "delivery_note",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "items",
        value: (doc) => null,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select a Delivery Note",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "items",
        value: (doc) => null,
      },
    ],
  },
  delivery_note: {
    onChange: [
      {
        type: "setValue",
        field: "items",
        value: (doc) => null,
      },
    ],
  },
};

export default packingSlipTriggers;