// Auto-generated trigger map for: Payment Reconciliation
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/payment_reconciliation/payment_reconciliation.js
// Generated: 2026-05-13T23:34:09.316Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const paymentReconciliationTriggers = {
  allocated_amount: {
    onChange: [
      {
        type: "serverCall",
        method: "calculate_difference_on_allocation_change",
        args: (doc) => ({
				payment_entry: payment,
				invoice: invoice,
				allocated_amount: row.allocated_amount,
			}),
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
    { label: "Get Unreconciled Entries", action: "TODO" },
    { label: "Allocate", action: "TODO" },
    { label: "Reconcile", action: "TODO" },
  ],
};

export default paymentReconciliationTriggers;