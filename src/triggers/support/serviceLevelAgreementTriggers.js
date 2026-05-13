// Auto-generated trigger map for: Service Level Agreement
// Source: ../frappe-bench/apps/erpnext/erpnext/support/doctype/service_level_agreement/service_level_agreement.js
// Generated: 2026-05-13T23:34:09.379Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const serviceLevelAgreementTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "entity",
        value: (doc) => undefined,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "entity",
        value: (doc) => undefined,
      },
    ],
  },
  default_service_level_agreement: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "entity",
        value: (doc) => undefined,
      },
    ],
  },
  document_type: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "entity",
        value: (doc) => undefined,
      },
    ],
  },
  entity_type: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "entity",
        value: (doc) => undefined,
      },
    ],
  },
  entity: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  fetch_status_fields: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  apply_sla_for_resolution: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  toggle_resolution_fields: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default serviceLevelAgreementTriggers;