// Auto-generated trigger map for: Pos Closing Entry
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/pos_closing_entry/pos_closing_entry.js
// Generated: 2026-05-13T23:34:09.375Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const posClosingEntryTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.pos_closing_entry.pos_closing_entry.get_invoices",
        args: (doc) => ({
				start: frappe.datetime.get_datetime_as_string(doc.period_start_date),
				end: frappe.datetime.get_datetime_as_string(doc.period_end_date),
				pos_profile: doc.pos_profile,
				user: doc.user,
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
  closing_amount: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Retry", action: "TODO" },
  ],
};

export default posClosingEntryTriggers;