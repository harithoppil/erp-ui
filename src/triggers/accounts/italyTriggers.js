// Auto-generated trigger map for: Italy
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/sales_invoice/regional/italy.js
// Generated: 2026-05-13T23:34:09.318Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const italyTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.regional.italy.utils.generate_single_invoice",
        args: (doc) => ({
						docname: doc.name,
					}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Generate E-Invoice", action: "TODO" },
  ],
};

export default italyTriggers;