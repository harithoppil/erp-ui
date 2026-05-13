// Auto-generated trigger map for: Pos Invoice Merge Log
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/pos_invoice_merge_log/pos_invoice_merge_log.js
// Generated: 2026-05-13T23:34:09.356Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const posInvoiceMergeLogTriggers = {
  setup: {
    onChange: [
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer_group",
        value: (doc) => "",
      },
    ],
  },
  merge_invoices_based_on: {
    onChange: [
      {
        type: "setValue",
        field: "customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "customer_group",
        value: (doc) => "",
      },
    ],
  },
};

export default posInvoiceMergeLogTriggers;