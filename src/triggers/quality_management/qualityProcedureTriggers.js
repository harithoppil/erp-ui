// Auto-generated trigger map for: Quality Procedure
// Source: ../frappe-bench/apps/erpnext/erpnext/quality_management/doctype/quality_procedure/quality_procedure.js
// Generated: 2026-05-13T23:34:09.208Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const qualityProcedureTriggers = {
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "parent_quality_procedure",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default qualityProcedureTriggers;