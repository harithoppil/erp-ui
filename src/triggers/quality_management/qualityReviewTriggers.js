// Auto-generated trigger map for: Quality Review
// Source: ../frappe-bench/apps/erpnext/erpnext/quality_management/doctype/quality_review/quality_review.js
// Generated: 2026-05-13T23:34:09.206Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const qualityReviewTriggers = {
  goal: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get",
        args: (doc) => ({
				doctype: "Quality Goal",
				name: doc.goal,
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
};

export default qualityReviewTriggers;