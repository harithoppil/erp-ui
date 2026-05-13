// Auto-generated trigger map for: Project Update
// Source: ../frappe-bench/apps/erpnext/erpnext/projects/doctype/project_update/project_update.js
// Generated: 2026-05-13T23:34:09.213Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const projectUpdateTriggers = {
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "naming_series",
        value: (doc) => "UPDATE-.project.-.YY.MM.DD.-.####",
      },
      {
        type: "setValue",
        field: "time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
      {
        type: "setValue",
        field: "date",
        value: (doc) => "TODO: frappe.datetime.nowdate(",
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "naming_series",
        value: (doc) => "UPDATE-.project.-.YY.MM.DD.-.####",
      },
      {
        type: "setValue",
        field: "time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
      {
        type: "setValue",
        field: "date",
        value: (doc) => "TODO: frappe.datetime.nowdate(",
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "setValue",
        field: "time",
        value: (doc) => "TODO: frappe.datetime.now_time(",
      },
      {
        type: "setValue",
        field: "date",
        value: (doc) => "TODO: frappe.datetime.nowdate(",
      },
    ],
  },
};

export default projectUpdateTriggers;