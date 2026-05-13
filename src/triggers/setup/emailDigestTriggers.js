// Auto-generated trigger map for: Email Digest
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/email_digest/email_digest.js
// Generated: 2026-05-13T23:34:09.248Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const emailDigestTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.email_digest.email_digest.get_digest_msg",
        args: (doc) => ({
						name: doc.name,
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
    { label: "View Now", action: "TODO" },
    { label: "Send Now", action: "TODO" },
  ],
};

export default emailDigestTriggers;