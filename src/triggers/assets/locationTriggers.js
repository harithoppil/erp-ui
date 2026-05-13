// Auto-generated trigger map for: Location
// Source: ../frappe-bench/apps/erpnext/erpnext/assets/doctype/location/location.js
// Generated: 2026-05-13T23:34:09.439Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const locationTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "parent_location",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default locationTriggers;