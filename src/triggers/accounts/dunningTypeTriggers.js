// Auto-generated trigger map for: Dunning Type
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/dunning_type/dunning_type.js
// Generated: 2026-05-13T23:34:09.323Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const dunningTypeTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "income_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default dunningTypeTriggers;