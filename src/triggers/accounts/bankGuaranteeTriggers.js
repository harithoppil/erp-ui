// Auto-generated trigger map for: Bank Guarantee
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/bank_guarantee/bank_guarantee.js
// Generated: 2026-05-13T23:34:09.317Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bankGuaranteeTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_guarantee.bank_guarantee.get_voucher_details",
        args: (doc) => ({
					bank_guarantee_type: doc.bg_type,
					reference_name: doc.reference_docname,
				}),
        patches: [
          { field: "project", fromResponse: "project" },
          { field: "amount", fromResponse: "grand_total" },
        ],
      },
      {
        type: "setQuery",
        targetField: "bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "reference_doctype",
        value: (doc) => "Sales Order",
      },
      {
        type: "setValue",
        field: "reference_doctype",
        value: (doc) => "Purchase Order",
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => r.message.project,
      },
      {
        type: "setValue",
        field: "amount",
        value: (doc) => r.message.grand_total,
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
    ],
  },
  bg_type: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_guarantee.bank_guarantee.get_voucher_details",
        args: (doc) => ({
					bank_guarantee_type: doc.bg_type,
					reference_name: doc.reference_docname,
				}),
        patches: [
          { field: "project", fromResponse: "project" },
          { field: "amount", fromResponse: "grand_total" },
        ],
      },
      {
        type: "setValue",
        field: "reference_doctype",
        value: (doc) => "Sales Order",
      },
      {
        type: "setValue",
        field: "reference_doctype",
        value: (doc) => "Purchase Order",
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => r.message.project,
      },
      {
        type: "setValue",
        field: "amount",
        value: (doc) => r.message.grand_total,
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
    ],
  },
  reference_docname: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.bank_guarantee.bank_guarantee.get_voucher_details",
        args: (doc) => ({
					bank_guarantee_type: doc.bg_type,
					reference_name: doc.reference_docname,
				}),
        patches: [
          { field: "project", fromResponse: "project" },
          { field: "amount", fromResponse: "grand_total" },
        ],
      },
      {
        type: "setValue",
        field: "project",
        value: (doc) => r.message.project,
      },
      {
        type: "setValue",
        field: "amount",
        value: (doc) => r.message.grand_total,
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "project",
        value: (doc) => r.message.project,
      },
      {
        type: "setValue",
        field: "amount",
        value: (doc) => r.message.grand_total,
      },
    ],
  },
  start_date: {
    onChange: [
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
    ],
  },
  validity: {
    onChange: [
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => doc.end_date ?? end_date,
      },
    ],
  },
};

export default bankGuaranteeTriggers;