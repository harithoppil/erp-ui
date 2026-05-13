// Auto-generated trigger map for: Asset Maintenance
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/asset_maintenance/asset_maintenance.js
// Generated: 2026-05-13T23:34:09.428Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const assetMaintenanceTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_maintenance.asset_maintenance.get_maintenance_log",
        args: (doc) => ({ asset_name: doc.asset_name }),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "asset_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_maintenance.asset_maintenance.get_maintenance_log",
        args: (doc) => ({ asset_name: doc.asset_name }),
        patches: [
        ],
      },
    ],
  },
  make_dashboard: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.assets.doctype.asset_maintenance.asset_maintenance.get_maintenance_log",
        args: (doc) => ({ asset_name: doc.asset_name }),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  start_date: {
    onChange: [
    ],
  },
  periodicity: {
    onChange: [
    ],
  },
  last_completion_date: {
    onChange: [
    ],
  },
  end_date: {
    onChange: [
    ],
  },
};

export default assetMaintenanceTriggers;