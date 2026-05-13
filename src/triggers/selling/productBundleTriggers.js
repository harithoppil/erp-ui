// Auto-generated trigger map for: Product Bundle
// Source: ../frappe-bench/apps/erpnext/erpnext/selling/doctype/product_bundle/product_bundle.js
// Generated: 2026-05-13T23:34:09.193Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const productBundleTriggers = {
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "new_item_code",
        query: (doc) => ({ query: "erpnext.selling.doctype.product_bundle.product_bundle.get_new_item_code" }),
      },
    ],
  },
};

export default productBundleTriggers;