// Auto-generated trigger map for: Budget
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/budget/budget.js
// Generated: 2026-05-13T23:34:09.374Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const budgetTriggers = {
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.budget.budget.revise_budget",
        args: (doc) => ({ budget_name: doc.name }),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "monthly_distribution",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => null,
      },
    ],
  },
  budget_against: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.budget.budget.revise_budget",
        args: (doc) => ({ budget_name: doc.name }),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => null,
      },
    ],
  },
  distribute_equally: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.budget.budget.revise_budget",
        args: (doc) => ({ budget_name: doc.name }),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => null,
      },
    ],
  },
  set_null_value: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.budget.budget.revise_budget",
        args: (doc) => ({ budget_name: doc.name }),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "cost_center",
        value: (doc) => null,
      },
    ],
  },
  toggle_reqd_fields: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.budget.budget.revise_budget",
        args: (doc) => ({ budget_name: doc.name }),
        patches: [
        ],
      },
    ],
  },
  revise_budget_action: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.budget.budget.revise_budget",
        args: (doc) => ({ budget_name: doc.name }),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Revise Budget", action: "TODO" },
  ],
};

export default budgetTriggers;