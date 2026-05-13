// Auto-generated trigger map for: Unreconcile Payment
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/unreconcile_payment/unreconcile_payment.js
// Generated: 2026-05-13T23:34:09.301Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const unreconcilePaymentTriggers = {
  get_allocations: {
    onChange: [
      {
        type: "serverCall",
        method: "get_allocations_from_payment",
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
};

export default unreconcilePaymentTriggers;