// Auto-generated trigger map for: Department
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/department/department.js
// Generated: 2026-05-13T23:34:09.245Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const departmentTriggers = {
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "parent_department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "You cannot edit root node.",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "You cannot edit root node.",
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "You cannot edit root node.",
      },
    ],
  },
};

export default departmentTriggers;