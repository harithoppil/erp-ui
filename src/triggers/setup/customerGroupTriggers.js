// Auto-generated trigger map for: Customer Group
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/customer_group/customer_group.js
// Generated: 2026-05-13T23:34:09.242Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const customerGroupTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "parent_customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  set_root_readonly: {
    onChange: [
    ],
  },
};

export default customerGroupTriggers;