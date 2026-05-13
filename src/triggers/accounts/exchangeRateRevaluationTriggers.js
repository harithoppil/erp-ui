// Auto-generated trigger map for: Exchange Rate Revaluation
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/exchange_rate_revaluation/exchange_rate_revaluation.js
// Generated: 2026-05-13T23:34:09.312Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const exchangeRateRevaluationTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "check_journal_entry_condition",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_accounts_data",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_gain_loss",
        value: (doc) => flt(total_gain_loss, precision("total_gain_loss",))
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Rounding Loss Allowance should be between 0 and 1",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "check_journal_entry_condition",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_accounts_data",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_gain_loss",
        value: (doc) => flt(total_gain_loss, precision("total_gain_loss",))
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Rounding Loss Allowance should be between 0 and 1",
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  validate_rounding_loss: {
    onChange: [
      {
        type: "serverCall",
        method: "get_accounts_data",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_gain_loss",
        value: (doc) => flt(total_gain_loss, precision("total_gain_loss",))
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Rounding Loss Allowance should be between 0 and 1",
      },
    ],
  },
  rounding_loss_allowance: {
    onChange: [
      {
        type: "serverCall",
        method: "get_accounts_data",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_gain_loss",
        value: (doc) => flt(total_gain_loss, precision("total_gain_loss",))
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "serverCall",
        method: "get_accounts_data",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_gain_loss",
        value: (doc) => flt(total_gain_loss, precision("total_gain_loss",))
      },
    ],
  },
  get_entries: {
    onChange: [
      {
        type: "serverCall",
        method: "get_accounts_data",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_gain_loss",
        value: (doc) => flt(total_gain_loss, precision("total_gain_loss",))
      },
    ],
  },
  get_total_gain_loss: {
    onChange: [
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "total_gain_loss",
        value: (doc) => flt(total_gain_loss, precision("total_gain_loss",))
      },
    ],
  },
  make_jv: {
    onChange: [
      {
        type: "serverCall",
        method: "make_jv_entries",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  new_exchange_rate: {
    onChange: [
    ],
  },
  account: {
    onChange: [
    ],
  },
  party: {
    onChange: [
    ],
  },
  accounts_remove: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Journal Entries", action: "TODO" },
  ],
};

export default exchangeRateRevaluationTriggers;