// Auto-generated trigger map for: Project
// Source: ../frappe-bench/apps/erpnext/erpnext/projects/doctype/project/project.js
// Generated: 2026-05-13T23:34:09.220Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const projectTriggers = {
  Timesheet: {
    onChange: [
    ],
  },
  Order: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.project.project.update_costing_and_billing",
        args: (doc) => ({ project: doc.name }),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_order",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  Receipt: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.project.project.update_costing_and_billing",
        args: (doc) => ({ project: doc.name }),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_order",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  Invoice: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.project.project.update_costing_and_billing",
        args: (doc) => ({ project: doc.name }),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_order",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.project.project.update_costing_and_billing",
        args: (doc) => ({ project: doc.name }),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_order",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.project.project.update_costing_and_billing",
        args: (doc) => ({ project: doc.name }),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  set_custom_buttons: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.project.project.update_costing_and_billing",
        args: (doc) => ({ project: doc.name }),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  update_costing_and_billing: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.project.project.update_costing_and_billing",
        args: (doc) => ({ project: doc.name }),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  set_project_status_button: {
    onChange: [
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  get_project_status_dialog: {
    onChange: [
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  primary_action: {
    onChange: [
    ],
  },
  create_duplicate: {
    onChange: [
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  set_status: {
    onChange: [
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  collect_progress: {
    onChange: [
      {
        type: "setValue",
        field: "subject",
        value: (doc) => __("For project - {0}, update your status", [frm.doc.project_name],)
      },
    ],
  },
  $buttons: [
    { label: "Duplicate Project with Tasks", action: "TODO" },
    { label: "Update Costing and Billing", action: "TODO" },
    { label: "Gantt Chart", action: "TODO" },
    { label: "Kanban Board", action: "TODO" },
    { label: "Set Project Status", action: "TODO" },
  ],
};

export default projectTriggers;