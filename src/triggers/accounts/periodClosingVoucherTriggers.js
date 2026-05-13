// Auto-generated trigger map for: Period Closing Voucher
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/period_closing_voucher/period_closing_voucher.js
// Generated: 2026-05-13T23:34:09.341Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const periodClosingVoucherTriggers = {
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.period_closing_voucher.period_closing_voucher.get_period_start_end_date",
        args: (doc) => ({
					fiscal_year: doc.fiscal_year,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "closing_account_head",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "period_start_date",
        value: (doc) => r.message[0],
      },
      {
        type: "setValue",
        field: "period_end_date",
        value: (doc) => r.message[1],
      },
    ],
  },
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.period_closing_voucher.period_closing_voucher.get_period_start_end_date",
        args: (doc) => ({
					fiscal_year: doc.fiscal_year,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "closing_account_head",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "period_start_date",
        value: (doc) => r.message[0],
      },
      {
        type: "setValue",
        field: "period_end_date",
        value: (doc) => r.message[1],
      },
    ],
  },
  fiscal_year: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.period_closing_voucher.period_closing_voucher.get_period_start_end_date",
        args: (doc) => ({
					fiscal_year: doc.fiscal_year,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "period_start_date",
        value: (doc) => r.message[0],
      },
      {
        type: "setValue",
        field: "period_end_date",
        value: (doc) => r.message[1],
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "period_start_date",
        value: (doc) => r.message[0],
      },
      {
        type: "setValue",
        field: "period_end_date",
        value: (doc) => r.message[1],
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Ledger", action: "TODO" },
  ],
};

export default periodClosingVoucherTriggers;