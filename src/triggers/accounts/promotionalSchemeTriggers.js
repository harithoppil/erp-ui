// Auto-generated trigger map for: Promotional Scheme
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/promotional_scheme/promotional_scheme.js
// Generated: 2026-05-13T23:34:09.307Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const promotionalSchemeTriggers = {
  setup: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
    ],
  },
  selling: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
    ],
  },
  buying: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
    ],
  },
  set_options_for_applicable_for: {
    onChange: [
      {
        type: "setValue",
        field: "applicable_for",
        value: (doc) => doc.applicable_for ?? applicable_for,
      },
    ],
  },
  apply_on: {
    onChange: [
    ],
  },
  toggle_reqd_apply_on: {
    onChange: [
    ],
  },
};

export default promotionalSchemeTriggers;