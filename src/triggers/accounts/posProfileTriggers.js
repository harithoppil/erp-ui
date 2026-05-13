// Auto-generated trigger map for: Pos Profile
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/pos_profile/pos_profile.js
// Generated: 2026-05-13T23:34:09.300Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const posProfileTriggers = {
  setup: {
    onChange: [
      {
        type: "setQuery",
        targetField: "selling_price_list",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "tc_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "print_format",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account_for_change_amount",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "taxes_and_charges",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "company_address",
        query: (doc) => ({ query: "frappe.contacts.doctype.address.address.address_query", filters: {
					link_doctype: "Company",
					link_name: doc.company,
				} }),
      },
      {
        type: "setQuery",
        targetField: "income_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "expense_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "select_print_heading",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "write_off_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "write_off_cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set Company",
      },
    ],
  },
  refresh: {
    onChange: [
    ],
  },
  company: {
    onChange: [
    ],
  },
  toggle_display_account_head: {
    onChange: [
    ],
  },
};

export default posProfileTriggers;