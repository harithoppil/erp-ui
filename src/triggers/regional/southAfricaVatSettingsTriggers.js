// Auto-generated trigger map for: South Africa Vat Settings
// Source: ../frappe-bench/apps/erpnext/erpnext/regional/doctype/south_africa_vat_settings/south_africa_vat_settings.js
// Generated: 2026-05-13T23:34:09.388Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const southAfricaVatSettingsTriggers = {
  refresh: {
    onChange: [
      {
        type: "setQuery",
        targetField: "company",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
};

export default southAfricaVatSettingsTriggers;