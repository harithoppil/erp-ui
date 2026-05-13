// Auto-generated trigger map for: Fiscal Year
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/fiscal_year/fiscal_year.js
// Generated: 2026-05-13T23:34:09.372Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const fiscalYearTriggers = {
  onload: {
    onChange: [
      {
        type: "setValue",
        field: "year_start_date",
        value: (doc) => "TODO: frappe.datetime.year_start(",
      },
      {
        type: "setValue",
        field: "year_end_date",
        value: (doc) => doc.year_end_date ?? year_end_date,
      },
    ],
  },
  year_start_date: {
    onChange: [
      {
        type: "setValue",
        field: "year_end_date",
        value: (doc) => doc.year_end_date ?? year_end_date,
      },
    ],
  },
};

export default fiscalYearTriggers;