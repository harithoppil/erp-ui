// Auto-generated trigger map for: Accounting Dimension
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/accounting_dimension/accounting_dimension.js
// Generated: 2026-05-13T23:34:09.323Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const accountingDimensionTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.accounting_dimension.accounting_dimension.disable_dimension",
        args: (doc) => ({
						doc: doc,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "disabled",
        value: (doc) => 1 - frm.doc.disabled,
      },
      {
        type: "setValue",
        field: "fieldname",
        value: (doc) => frm.doc.label.replace(/ /g, "_",)
      },
      {
        type: "setValue",
        field: "label",
        value: (doc) => frm.doc.document_type,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("document_type", "description", "Document type is already set as dimension"),
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  label: {
    onChange: [
      {
        type: "setValue",
        field: "fieldname",
        value: (doc) => frm.doc.label.replace(/ /g, "_",)
      },
      {
        type: "setValue",
        field: "label",
        value: (doc) => frm.doc.document_type,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("document_type", "description", "Document type is already set as dimension"),
      },
    ],
  },
  document_type: {
    onChange: [
      {
        type: "setValue",
        field: "label",
        value: (doc) => frm.doc.document_type,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("document_type", "description", "Document type is already set as dimension"),
      },
    ],
  },
  dimension_defaults_add: {
    onChange: [
    ],
  },
};

export default accountingDimensionTriggers;