// Auto-generated trigger map for: Supplier
// Source: ../frappe-bench/apps/erpnext/erpnext/buying/doctype/supplier/supplier.js
// Generated: 2026-05-13T23:34:09.180Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const supplierTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "get_supplier_group_details",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "default_bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "supplier_primary_contact",
        query: (doc) => ({ query: "erpnext.buying.doctype.supplier.supplier.get_supplier_primary", filters: {
					supplier: doc.name,
					type: "Contact",
				} }),
      },
      {
        type: "setQuery",
        targetField: "supplier_primary_address",
        query: (doc) => ({ query: "erpnext.buying.doctype.supplier.supplier.get_supplier_primary", filters: {
					supplier: doc.name,
					type: "Address",
				} }),
      },
      {
        type: "setValue",
        field: "represents_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "TODO: frappe.utils.html2text(r.message",
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "mobile_no",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "email_id",
        value: (doc) => "",
      },
    ],
  },
  Account: {
    onChange: [
      {
        type: "serverCall",
        method: "get_supplier_group_details",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "TODO: frappe.utils.html2text(r.message",
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "mobile_no",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "email_id",
        value: (doc) => "",
      },
    ],
  },
  Rule: {
    onChange: [
      {
        type: "serverCall",
        method: "get_supplier_group_details",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "TODO: frappe.utils.html2text(r.message",
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "mobile_no",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "email_id",
        value: (doc) => "",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "get_supplier_group_details",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "TODO: frappe.utils.html2text(r.message",
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "mobile_no",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "email_id",
        value: (doc) => "",
      },
    ],
  },
  get_supplier_group_details: {
    onChange: [
      {
        type: "serverCall",
        method: "get_supplier_group_details",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "TODO: frappe.utils.html2text(r.message",
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "mobile_no",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "email_id",
        value: (doc) => "",
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "TODO: frappe.utils.html2text(r.message",
      },
    ],
  },
  supplier_primary_address: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.supplier_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "TODO: frappe.utils.html2text(r.message",
      },
      {
        type: "setValue",
        field: "primary_address",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "mobile_no",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "email_id",
        value: (doc) => "",
      },
    ],
  },
  supplier_primary_contact: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "mobile_no",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "email_id",
        value: (doc) => "",
      },
    ],
  },
  is_internal_supplier: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
    ],
  },
  show_party_link_dialog: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
    ],
  },
  primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Supplier",
						primary_party: doc.name,
						secondary_party: customer,
					}),
        patches: [
        ],
      },
    ],
  },
  error: {
    onChange: [
    ],
  },
  make_pricing_rule: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Accounting Ledger", action: "TODO" },
    { label: "Accounts Payable", action: "TODO" },
    { label: "Link with Customer", action: "TODO" },
  ],
};

export default supplierTriggers;