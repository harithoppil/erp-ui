// Auto-generated trigger map for: Cost Center
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/cost_center/cost_center.js
// Generated: 2026-05-13T23:34:09.327Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const costCenterTriggers = {
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.utils.update_cost_center",
        args: (doc) => ({
						docname: doc.name,
						cost_center_name: data.cost_center_name,
						cost_center_number: cstr(data.cost_center_number),
						company: doc.company,
						merge: data.merge,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "cost_center_name",
        value: (doc) => data.cost_center_name,
      },
      {
        type: "setValue",
        field: "cost_center_number",
        value: (doc) => data.cost_center_number,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.utils.update_cost_center",
        args: (doc) => ({
						docname: doc.name,
						cost_center_name: data.cost_center_name,
						cost_center_number: cstr(data.cost_center_number),
						company: doc.company,
						merge: data.merge,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "cost_center_name",
        value: (doc) => data.cost_center_name,
      },
      {
        type: "setValue",
        field: "cost_center_number",
        value: (doc) => data.cost_center_number,
      },
    ],
  },
  update_cost_center_number: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.utils.update_cost_center",
        args: (doc) => ({
						docname: doc.name,
						cost_center_name: data.cost_center_name,
						cost_center_number: cstr(data.cost_center_number),
						company: doc.company,
						merge: data.merge,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "cost_center_name",
        value: (doc) => data.cost_center_name,
      },
      {
        type: "setValue",
        field: "cost_center_number",
        value: (doc) => data.cost_center_number,
      },
    ],
  },
  primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.utils.update_cost_center",
        args: (doc) => ({
						docname: doc.name,
						cost_center_name: data.cost_center_name,
						cost_center_number: cstr(data.cost_center_number),
						company: doc.company,
						merge: data.merge,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "cost_center_name",
        value: (doc) => data.cost_center_name,
      },
      {
        type: "setValue",
        field: "cost_center_number",
        value: (doc) => data.cost_center_number,
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "cost_center_name",
        value: (doc) => data.cost_center_name,
      },
      {
        type: "setValue",
        field: "cost_center_number",
        value: (doc) => data.cost_center_number,
      },
    ],
  },
  $buttons: [
    { label: "Update Cost Center Name / Number", action: "TODO" },
    { label: "Chart of Cost Centers", action: "TODO" },
    { label: "Budget", action: "TODO" },
    { label: "Convert to Non-Group", action: "TODO" },
    { label: "Convert to Group", action: "TODO" },
  ],
};

export default costCenterTriggers;