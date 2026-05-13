// Auto-generated trigger map for: Request For Quotation
// Source: ../frappe-bench/apps/erpnext/erpnext/buying/doctype/request_for_quotation/request_for_quotation.js
// Generated: 2026-05-13T23:34:09.186Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const requestForQuotationTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.request_for_quotation.request_for_quotation.send_supplier_emails",
        args: (doc) => ({
							rfq_name: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.request_for_quotation.request_for_quotation.make_supplier_quotation_from_rfq",
        args: (doc) => ({
						source_name: doc.name,
						for_supplier: args.supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => r.message.subject,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.request_for_quotation.request_for_quotation.send_supplier_emails",
        args: (doc) => ({
							rfq_name: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.request_for_quotation.request_for_quotation.make_supplier_quotation_from_rfq",
        args: (doc) => ({
						source_name: doc.name,
						for_supplier: args.supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => r.message.subject,
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  get_query: {
    onChange: [
    ],
  },
  make_supplier_quotation: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.request_for_quotation.request_for_quotation.make_supplier_quotation_from_rfq",
        args: (doc) => ({
						source_name: doc.name,
						for_supplier: args.supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "subject",
        value: (doc) => r.message.subject,
      },
    ],
  },
  primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.buying.doctype.request_for_quotation.request_for_quotation.make_supplier_quotation_from_rfq",
        args: (doc) => ({
						source_name: doc.name,
						for_supplier: args.supplier,
					}),
        patches: [
        ],
      },
    ],
  },
  preview: {
    onChange: [
    ],
  },
  supplier: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.party.get_party_details",
        args: (doc) => ({
				party: d.supplier,
				party_type: "Supplier",
			}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Supplier Quotation", action: "TODO" },
    { label: "Send Emails to Suppliers", action: "TODO" },
    { label: "Download PDF", action: "TODO" },
    { label: "Supplier Quotation Comparison", action: "TODO" },
    { label: "Material Request", action: "TODO" },
    { label: "Opportunity", action: "TODO" },
    { label: "Possible Supplier", action: "TODO" },
    { label: "Link to Material Requests", action: "TODO" },
    { label: "Get Suppliers", action: "TODO" },
  ],
};

export default requestForQuotationTriggers;