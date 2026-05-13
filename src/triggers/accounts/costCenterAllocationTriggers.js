// Auto-generated trigger map for: Cost Center Allocation
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/cost_center_allocation/cost_center_allocation.js
// Generated: 2026-05-13T23:34:09.327Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const costCenterAllocationTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "main_cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default costCenterAllocationTriggers;