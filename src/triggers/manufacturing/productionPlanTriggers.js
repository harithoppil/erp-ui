// Auto-generated trigger map for: Production Plan
// Source: ../frappe-bench/apps/erpnext/erpnext/manufacturing/doctype/production_plan/production_plan.js
// Generated: 2026-05-13T23:34:09.292Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const productionPlanTriggers = {
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "mr_items",
        value: (doc) => [],
      },
    ],
  },
  get_query: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Production Plan Summary", action: "TODO" },
    { label: "Re-open", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Work Order / Subcontract PO", action: "TODO" },
    { label: "Material Request", action: "TODO" },
    { label: "Reserve for Sub-assembly", action: "TODO" },
    { label: "Unreserve for Sub-assembly", action: "TODO" },
    { label: "Reserved Stock for Sub-assembly", action: "TODO" },
    { label: "Reserve for Raw Materials", action: "TODO" },
    { label: "Unreserve for Raw Materials", action: "TODO" },
    { label: "Reserved Stock for Raw Materials", action: "TODO" },
  ],
};

export default productionPlanTriggers;