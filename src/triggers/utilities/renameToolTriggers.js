// Auto-generated trigger map for: Rename Tool
// Source: ../frappe-bench/apps/erpnext/erpnext/utilities/doctype/rename_tool/rename_tool.js
// Generated: 2026-05-13T23:34:09.294Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const renameToolTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.utilities.doctype.rename_tool.rename_tool.upload",
        args: (doc) => ({
					select_doctype: doc.select_doctype,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "select_doctype",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "file_to_rename",
        value: (doc) => "",
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "select_doctype",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "file_to_rename",
        value: (doc) => "",
      },
    ],
  },
  error: {
    onChange: [
    ],
  },
  render_overview: {
    onChange: [
    ],
  },
};

export default renameToolTriggers;