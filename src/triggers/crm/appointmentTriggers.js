// Auto-generated trigger map for: Appointment
// Source: ../frappe-bench/apps/erpnext/erpnext/crm/doctype/appointment/appointment.js
// Generated: 2026-05-13T23:34:09.233Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const appointmentTriggers = {
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "appointment_with",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "appointment_with",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default appointmentTriggers;