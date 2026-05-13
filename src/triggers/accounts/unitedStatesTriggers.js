// Auto-generated trigger map for: United States
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/accounts_settings/regional/united_states.js
// Generated: 2026-05-13T23:34:09.299Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const unitedStatesTriggers = {
  refresh: {
    onChange: [
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("credit_controller", "label", "Credit Manager"),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("accounts_frozen_till_date", "label", "Books Closed Through"),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("role_allowed_for_frozen_entries", "label", "Role Allowed to Close Books & Make Changes to Closed Periods"),
      },
    ],
  },
};

export default unitedStatesTriggers;