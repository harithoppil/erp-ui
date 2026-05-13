// Auto-generated trigger map for: Accounting Period
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/accounting_period/accounting_period.js
// Generated: 2026-05-13T23:34:09.374Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const accountingPeriodTriggers = {
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "get_doctypes_for_closing",
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

export default accountingPeriodTriggers;