// Auto-generated trigger map for: Code List
// Source: ../frappe-bench/apps/erpnext/erpnext/edi/doctype/code_list/code_list.js
// Generated: 2026-05-13T23:34:09.169Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const codeListTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.delete",
        args: (doc) => ({
							doctype: frm.doctype,
							name: frm.docname,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "default_common_code",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.delete",
        args: (doc) => ({
							doctype: frm.doctype,
							name: frm.docname,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "default_common_code",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Import Genericode File", action: "TODO" },
  ],
};

export default codeListTriggers;