// Auto-generated trigger map for: Opportunity
// Source: ../frappe-bench/apps/erpnext/erpnext/crm/doctype/opportunity/opportunity.js
// Generated: 2026-05-13T23:34:09.232Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const opportunityTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "opportunity_from",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Lost Reasons are required in case opportunity is Lost.",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Lost Reasons are required in case opportunity is Lost.",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  onload_post_render: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  party_name: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  status: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  customer_address: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  opportunity_from: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "party_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  setup_opportunity_from: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Closed",
      },
      {
        type: "setValue",
        field: "lost_reasons",
        value: (doc) => [],
      },
      {
        type: "setValue",
        field: "status",
        value: (doc) => "Open",
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  set_contact_link: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  currency: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: company_currency,
				}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", ""),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "conversion_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("conversion_rate", "description", "1 " + frm.doc.currency + " = [?] " + company_currency),
      },
    ],
  },
  opportunity_amount: {
    onChange: [
      {
        type: "setValue",
        field: "base_opportunity_amount",
        value: (doc) => flt(frm.doc.opportunity_amount,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  set_dynamic_field_label: {
    onChange: [
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("party_name", "label", frm.doc.opportunity_from),
      },
    ],
  },
  make_supplier_quotation: {
    onChange: [
    ],
  },
  make_request_for_quotation: {
    onChange: [
    ],
  },
  change_form_labels: {
    onChange: [
    ],
  },
  change_grid_labels: {
    onChange: [
    ],
  },
  calculate_total: {
    onChange: [
    ],
  },
  calculate: {
    onChange: [
    ],
  },
  qty: {
    onChange: [
    ],
  },
  rate: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Supplier Quotation", action: "TODO" },
    { label: "Request For Quotation", action: "TODO" },
    { label: "Customer", action: "TODO" },
    { label: "Quotation", action: "TODO" },
    { label: "Fetch Latest Exchange Rate", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Reopen", action: "TODO" },
  ],
};

export default opportunityTriggers;