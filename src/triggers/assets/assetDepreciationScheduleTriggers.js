// Auto-generated trigger map for: Asset Depreciation Schedule
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/asset_depreciation_schedule/asset_depreciation_schedule.js
// Generated: 2026-05-13T23:34:09.427Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const assetDepreciationScheduleTriggers = {
  onload: {
    onChange: [
    ],
  },
  make_schedules_editable: {
    onChange: [
    ],
  },
  make_depreciation_entry: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset.depreciation.make_depreciation_entry",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  depreciation_amount: {
    onChange: [
    ],
  },
};

export default assetDepreciationScheduleTriggers;