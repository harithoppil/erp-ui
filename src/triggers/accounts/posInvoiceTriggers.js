// Auto-generated trigger map for: Pos Invoice
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/pos_invoice/pos_invoice.js
// Generated: 2026-05-13T23:34:09.326Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const posInvoiceTriggers = {
  redeem_loyalty_points: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_redeemption_factor",
        args: (doc) => ({
					loyalty_program: doc.loyalty_program,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_loyalty_program_details",
        args: (doc) => ({
					customer: doc.customer,
					loyalty_program: doc.loyalty_program,
					expiry_date: doc.posting_date,
					company: doc.company,
				}),
        patches: [
          { field: "loyalty_redemption_account", fromResponse: "expense_account" },
          { field: "loyalty_redemption_cost_center", fromResponse: "cost_center" },
        ],
      },
      {
        type: "setValue",
        field: "loyalty_redemption_account",
        value: (doc) => r.message.expense_account,
      },
      {
        type: "setValue",
        field: "loyalty_redemption_cost_center",
        value: (doc) => r.message.cost_center,
      },
      {
        type: "setValue",
        field: "loyalty_amount",
        value: (doc) => doc.loyalty_amount ?? loyalty_amount,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter mobile number first.",
      },
    ],
  },
  loyalty_points: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_redeemption_factor",
        args: (doc) => ({
					loyalty_program: doc.loyalty_program,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_loyalty_program_details",
        args: (doc) => ({
					customer: doc.customer,
					loyalty_program: doc.loyalty_program,
					expiry_date: doc.posting_date,
					company: doc.company,
				}),
        patches: [
          { field: "loyalty_redemption_account", fromResponse: "expense_account" },
          { field: "loyalty_redemption_cost_center", fromResponse: "cost_center" },
        ],
      },
      {
        type: "setValue",
        field: "loyalty_redemption_account",
        value: (doc) => r.message.expense_account,
      },
      {
        type: "setValue",
        field: "loyalty_redemption_cost_center",
        value: (doc) => r.message.cost_center,
      },
      {
        type: "setValue",
        field: "loyalty_amount",
        value: (doc) => doc.loyalty_amount ?? loyalty_amount,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter mobile number first.",
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "loyalty_redemption_account",
        value: (doc) => r.message.expense_account,
      },
      {
        type: "setValue",
        field: "loyalty_redemption_cost_center",
        value: (doc) => r.message.cost_center,
      },
    ],
  },
  get_loyalty_details: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_loyalty_program_details",
        args: (doc) => ({
					customer: doc.customer,
					loyalty_program: doc.loyalty_program,
					expiry_date: doc.posting_date,
					company: doc.company,
				}),
        patches: [
          { field: "loyalty_redemption_account", fromResponse: "expense_account" },
          { field: "loyalty_redemption_cost_center", fromResponse: "cost_center" },
        ],
      },
      {
        type: "setValue",
        field: "loyalty_redemption_account",
        value: (doc) => r.message.expense_account,
      },
      {
        type: "setValue",
        field: "loyalty_redemption_cost_center",
        value: (doc) => r.message.cost_center,
      },
      {
        type: "setValue",
        field: "loyalty_amount",
        value: (doc) => doc.loyalty_amount ?? loyalty_amount,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter mobile number first.",
      },
    ],
  },
  set_loyalty_points: {
    onChange: [
      {
        type: "setValue",
        field: "loyalty_amount",
        value: (doc) => doc.loyalty_amount ?? loyalty_amount,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter mobile number first.",
      },
    ],
  },
  request_for_payment: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter mobile number first.",
      },
    ],
  },
  mode_of_payment: {
    onChange: [
      {
        type: "serverCall",
        method: "set_account_for_mode_of_payment",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Return", action: "TODO" },
    { label: "Payment", action: "TODO" },
  ],
};

export default posInvoiceTriggers;