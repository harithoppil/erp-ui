// Auto-generated trigger map for: Asset Shift Allocation
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/asset_shift_allocation/asset_shift_allocation.js
// Generated: 2026-05-13T23:34:09.427Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const assetShiftAllocationTriggers = {
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "asset",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  make_schedules_editable: {
    onChange: [
    ],
  },
};

export default assetShiftAllocationTriggers;