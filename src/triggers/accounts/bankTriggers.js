// Auto-generated trigger map for: Bank
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/bank/bank.js
// Generated: 2026-05-13T23:34:09.309Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bankTriggers = {
  refresh: {
    onChange: [
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("address_and_contact", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("address_and_contact", "hidden", 0),
      },
    ],
  },
  $buttons: [
    { label: "Refresh Plaid Link", action: "TODO" },
  ],
};

export default bankTriggers;