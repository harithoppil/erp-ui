// Auto-generated trigger map for: Subcontracting Bom
// Source: ../frappe-bench/apps/erpnext/erpnext/subcontracting/doctype/subcontracting_bom/subcontracting_bom.js
// Generated: 2026-05-13T23:34:09.382Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const subcontractingBomTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "finished_good",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "finished_good_bom",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "doc.service_item",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  set_queries: {
    onChange: [
      {
        type: "setQuery",
        targetField: "finished_good",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "finished_good_bom",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "doc.service_item",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default subcontractingBomTriggers;