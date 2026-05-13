// Auto-generated trigger map for: Workstation
// Source: ../frappe-bench/apps/erpnext/erpnext/manufacturing/doctype/workstation/workstation.js
// Generated: 2026-05-13T23:34:09.262Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const workstationTriggers = {
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "holiday_list",
        value: (doc) => r.message,
      },
    ],
  },
};

export default workstationTriggers;