// Auto-generated trigger map for: Supplier Scorecard
// Source: ../frappe-bench/apps/erpnext/erpnext/buying/doctype/supplier_scorecard/supplier_scorecard.js
// Generated: 2026-05-13T23:34:09.181Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const supplierScorecardTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.supplier_scorecard_criteria.supplier_scorecard_criteria.get_criteria_list",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "criteria",
        value: (doc) => [],
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.supplier_scorecard_criteria.supplier_scorecard_criteria.get_criteria_list",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "criteria",
        value: (doc) => [],
      },
    ],
  },
  load_criteria: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.supplier_scorecard_criteria.supplier_scorecard_criteria.get_criteria_list",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "criteria",
        value: (doc) => [],
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "criteria",
        value: (doc) => [],
      },
    ],
  },
  standing_name: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.supplier_scorecard_standing.supplier_scorecard_standing.get_scoring_standing",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  criteria_name: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get",
        args: (doc) => ({
					fieldname: "weight",
					doctype: "Supplier Scorecard Criteria",
					filters: { name: d.criteria_name },
				}),
        patches: [
        ],
      },
    ],
  },
};

export default supplierScorecardTriggers;