// Auto-generated trigger map for: Driver
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/driver/driver.js
// Generated: 2026-05-13T23:34:09.243Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const driverTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "transporter",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  transporter: {
    onChange: [
    ],
  },
};

export default driverTriggers;