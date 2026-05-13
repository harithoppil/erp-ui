// Auto-generated trigger map for: Authorization Rule
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/authorization_rule/authorization_rule.js
// Generated: 2026-05-13T23:34:09.242Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const authorizationRuleTriggers = {
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "Customer",
      },
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "Item",
      },
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "Item Group",
      },
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "master_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "value",
        value: (doc) => 0,
      },
    ],
  },
  set_master_type: {
    onChange: [
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "Customer",
      },
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "Item",
      },
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "Item Group",
      },
      {
        type: "setValue",
        field: "customer_or_item",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "master_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "value",
        value: (doc) => 0,
      },
    ],
  },
  based_on: {
    onChange: [
      {
        type: "setValue",
        field: "value",
        value: (doc) => 0,
      },
    ],
  },
  transaction: {
    onChange: [
    ],
  },
};

export default authorizationRuleTriggers;