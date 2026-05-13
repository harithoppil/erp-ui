// Auto-generated trigger map for: Repost Item Valuation
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/repost_item_valuation/repost_item_valuation.js
// Generated: 2026-05-13T23:34:09.390Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const repostItemValuationTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.repost_item_valuation.repost_item_valuation.execute_repost_item_valuation",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "restart_reposting",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "voucher_type",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "voucher_no",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  based_on: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.repost_item_valuation.repost_item_valuation.execute_repost_item_valuation",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "restart_reposting",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  setup_realtime_progress: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.repost_item_valuation.repost_item_valuation.execute_repost_item_valuation",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "restart_reposting",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.repost_item_valuation.repost_item_valuation.execute_repost_item_valuation",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "restart_reposting",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  show_reposting_progress: {
    onChange: [
      {
        type: "serverCall",
        method: "restart_reposting",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  restart_reposting: {
    onChange: [
      {
        type: "serverCall",
        method: "restart_reposting",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  voucher_type: {
    onChange: [
    ],
  },
  voucher_no: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Restart", action: "TODO" },
    { label: "Start Reposting", action: "TODO" },
  ],
};

export default repostItemValuationTriggers;