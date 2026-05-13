// Auto-generated trigger map for: Coupon Code
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/coupon_code/coupon_code.js
// Generated: 2026-05-13T23:34:09.371Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const couponCodeTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "pricing_rule",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  coupon_name: {
    onChange: [
    ],
  },
  coupon_type: {
    onChange: [
    ],
  },
  make_coupon_code: {
    onChange: [
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Add/Edit Coupon Conditions", action: "TODO" },
  ],
};

export default couponCodeTriggers;