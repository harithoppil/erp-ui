// Auto-generated trigger map for: Currency Exchange
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/currency_exchange/currency_exchange.js
// Generated: 2026-05-13T23:34:09.245Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const currencyExchangeTriggers = {
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "to_currency",
        value: (doc) => "TODO: frappe.defaults.get_global_default('currency'",
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  from_currency: {
    onChange: [
    ],
  },
  to_currency: {
    onChange: [
    ],
  },
  set_exchange_rate_label: {
    onChange: [
    ],
  },
};

export default currencyExchangeTriggers;