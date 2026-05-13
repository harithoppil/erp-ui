// Auto-generated trigger map for: Routing
// Source: ../frappe-bench/apps/erpnext/erpnext/manufacturing/doctype/routing/routing.js
// Generated: 2026-05-13T23:34:09.289Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const routingTriggers = {
  setup: {
    onChange: [
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  onload: {
    onChange: [
    ],
  },
  display_sequence_id_column: {
    onChange: [
    ],
  },
  calculate_operating_cost: {
    onChange: [
    ],
  },
  operation: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get",
        args: (doc) => ({
				doctype: "Operation",
				name: d.operation,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "frappe.client.get",
        args: (doc) => ({
				doctype: "Workstation",
				name: d.workstation,
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
  workstation: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get",
        args: (doc) => ({
				doctype: "Workstation",
				name: d.workstation,
			}),
        patches: [
        ],
      },
    ],
  },
  time_in_mins: {
    onChange: [
    ],
  },
};

export default routingTriggers;