// Auto-generated trigger map for: Process Deferred Accounting
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/process_deferred_accounting/process_deferred_accounting.js
// Generated: 2026-05-13T23:34:09.304Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const processDeferredAccountingTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "document_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frm.doc.posting_date, -1",
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => frm.doc.posting_date,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Manual entry cannot be created! Disable automatic entry for deferred accounting in accounts settings and try again",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "End date cannot be before start date",
      },
    ],
  },
  type: {
    onChange: [
      {
        type: "setQuery",
        targetField: "account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frm.doc.posting_date, -1",
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => frm.doc.posting_date,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Manual entry cannot be created! Disable automatic entry for deferred accounting in accounts settings and try again",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "End date cannot be before start date",
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frm.doc.posting_date, -1",
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => frm.doc.posting_date,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Manual entry cannot be created! Disable automatic entry for deferred accounting in accounts settings and try again",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "End date cannot be before start date",
      },
    ],
  },
  end_date: {
    onChange: [
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frm.doc.posting_date, -1",
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => frm.doc.posting_date,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "End date cannot be before start date",
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "start_date",
        value: (doc) => "TODO: frappe.datetime.add_months(frm.doc.posting_date, -1",
      },
      {
        type: "setValue",
        field: "end_date",
        value: (doc) => frm.doc.posting_date,
      },
    ],
  },
};

export default processDeferredAccountingTriggers;