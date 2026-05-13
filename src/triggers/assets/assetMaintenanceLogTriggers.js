// Auto-generated trigger map for: Asset Maintenance Log
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/asset_maintenance_log/asset_maintenance_log.js
// Generated: 2026-05-13T23:34:09.442Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const assetMaintenanceLogTriggers = {
  asset_maintenance: {
    onChange: [
      {
        type: "setQuery",
        targetField: "task",
        query: (doc) => ({ query: "erpnext.assets.doctype.asset_maintenance_log.asset_maintenance_log.get_maintenance_tasks", filters: {
					asset_maintenance: doc.asset_maintenance,
				} }),
      },
    ],
  },
};

export default assetMaintenanceLogTriggers;