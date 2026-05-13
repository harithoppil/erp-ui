// Auto-generated trigger map for: Task
// Source: ../frappe-bench/apps/erpnext/erpnext/projects/doctype/task/task.js
// Generated: 2026-05-13T23:34:09.225Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const taskTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.task.task.check_if_child_exists",
        args: (doc) => ({
				name: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_task",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  Timesheet: {
    onChange: [
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.task.task.check_if_child_exists",
        args: (doc) => ({
				name: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_task",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  is_group: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.task.task.check_if_child_exists",
        args: (doc) => ({
				name: doc.name,
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
  validate: {
    onChange: [
    ],
  },
};

export default taskTriggers;