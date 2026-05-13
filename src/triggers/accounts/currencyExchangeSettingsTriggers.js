// Auto-generated trigger map for: Currency Exchange Settings
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/currency_exchange_settings/currency_exchange_settings.js
// Generated: 2026-05-13T23:34:09.372Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const currencyExchangeSettingsTriggers = {
  service_provider: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.currency_exchange_settings.currency_exchange_settings.get_api_endpoint",
        args: (doc) => ({
				service_provider: doc.service_provider,
				use_http: doc.use_http,
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
  use_http: {
    onChange: [
    ],
  },
};

export default currencyExchangeSettingsTriggers;