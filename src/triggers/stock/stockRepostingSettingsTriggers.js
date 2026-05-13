// Auto-generated trigger map for: Stock Reposting Settings
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/stock_reposting_settings/stock_reposting_settings.js
// Generated: 2026-05-13T23:34:09.419Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const stockRepostingSettingsTriggers = {
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "convert_to_item_wh_reposting",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  convert_to_item_based_reposting: {
    onChange: [
      {
        type: "serverCall",
        method: "convert_to_item_wh_reposting",
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
  $buttons: [
    { label: "Convert to Item Based Reposting", action: "TODO" },
  ],
};

export default stockRepostingSettingsTriggers;