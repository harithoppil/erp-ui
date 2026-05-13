// Auto-generated trigger map for: Email Campaign
// Source: ../frappe-bench/apps/erpnext/erpnext/crm/doctype/email_campaign/email_campaign.js
// Generated: 2026-05-13T23:34:09.233Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const emailCampaignTriggers = {
  email_campaign_for: {
    onChange: [
      {
        type: "setValue",
        field: "recipient",
        value: (doc) => "",
      },
    ],
  },
};

export default emailCampaignTriggers;