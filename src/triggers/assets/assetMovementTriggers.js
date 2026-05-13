// Auto-generated trigger map for: Asset Movement
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/asset_movement/asset_movement.js
// Generated: 2026-05-13T23:34:09.443Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const assetMovementTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "reference_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "reference_doctype",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  purpose: {
    onChange: [
    ],
  },
  set_required_fields: {
    onChange: [
    ],
  },
  asset: {
    onChange: [
    ],
  },
};

export default assetMovementTriggers;