// Auto-generated trigger map for: Issue
// Source: ../frappe-bench/apps/erpnext/erpnext/support/doctype/issue/issue.js
// Generated: 2026-05-13T23:34:09.378Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const issueTriggers = {
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("service_level_section", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reset_service_level_agreement", "hidden", 1),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
    ],
  },
  reset_service_level_agreement: {
    onChange: [
    ],
  },
  primary_action: {
    onChange: [
    ],
  },
  timeline_refresh: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Close", action: "TODO" },
    { label: "Task", action: "TODO" },
    { label: "Reopen", action: "TODO" },
  ],
};

export default issueTriggers;