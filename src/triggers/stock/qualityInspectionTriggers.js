// Auto-generated trigger map for: Quality Inspection
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/quality_inspection/quality_inspection.js
// Generated: 2026-05-13T23:34:09.417Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const qualityInspectionTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "get_quality_inspection_template",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_item_specification_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "reference_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "batch_no",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "item_serial_no",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "item_code",
        query: (doc) => ({ query: "erpnext.stock.doctype.quality_inspection.quality_inspection.item_query", filters: {
						reference_doctype: doc.reference_type,
						reference_name: doc.reference_name,
						inspection_type: doc.inspection_type,
					} }),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "get_quality_inspection_template",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_item_specification_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  item_code: {
    onChange: [
      {
        type: "serverCall",
        method: "get_quality_inspection_template",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_item_specification_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  quality_inspection_template: {
    onChange: [
      {
        type: "serverCall",
        method: "get_item_specification_details",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
};

export default qualityInspectionTriggers;