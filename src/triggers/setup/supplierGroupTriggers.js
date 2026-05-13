// Auto-generated trigger map for: Supplier Group
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/supplier_group/supplier_group.js
// Generated: 2026-05-13T23:34:09.247Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const supplierGroupTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "parent_supplier_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  set_root_readonly: {
    onChange: [
    ],
  },
};

export default supplierGroupTriggers;