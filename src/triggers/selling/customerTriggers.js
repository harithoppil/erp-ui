// Auto-generated trigger map for: Customer
// Source: ../frappe-bench/apps/erpnext/erpnext/selling/doctype/customer/customer.js
// Generated: 2026-05-13T23:34:09.205Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const customerTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.customer_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_primary_contact",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Contact",
				} }),
      },
      {
        type: "setQuery",
        targetField: "customer_primary_address",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Address",
				} }),
      },
      {
        type: "setQuery",
        targetField: "default_bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  Quotation: {
    onChange: [
    ],
  },
  Order: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.customer_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_primary_contact",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Contact",
				} }),
      },
      {
        type: "setQuery",
        targetField: "customer_primary_address",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Address",
				} }),
      },
      {
        type: "setQuery",
        targetField: "default_bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  Opportunity: {
    onChange: [
    ],
  },
  Entry: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.customer_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_primary_contact",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Contact",
				} }),
      },
      {
        type: "setQuery",
        targetField: "customer_primary_address",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Address",
				} }),
      },
      {
        type: "setQuery",
        targetField: "default_bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  Rule: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.customer_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_primary_contact",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Contact",
				} }),
      },
      {
        type: "setQuery",
        targetField: "customer_primary_address",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Address",
				} }),
      },
      {
        type: "setQuery",
        targetField: "default_bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  Account: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.customer_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_primary_contact",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Contact",
				} }),
      },
      {
        type: "setQuery",
        targetField: "customer_primary_address",
        query: (doc) => ({ query: "erpnext.selling.doctype.customer.customer.get_customer_primary", filters: {
					customer: doc.name,
					type: "Address",
				} }),
      },
      {
        type: "setQuery",
        targetField: "default_bank_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  customer_primary_address: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({
					address_dict: doc.customer_primary_address,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
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
  is_internal_customer: {
    onChange: [
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  customer_primary_contact: {
    onChange: [
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
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
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  loyalty_program: {
    onChange: [
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "loyalty_program_tier",
        value: (doc) => null,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_group",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "territory",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
    ],
  },
  validate: {
    onChange: [
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
    ],
  },
  get_customer_group_details: {
    onChange: [
      {
        type: "serverCall",
        method: "get_customer_group_details",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.party_link.party_link.create_party_link",
        args: (doc) => ({
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
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
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
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
						primary_role: "Customer",
						primary_party: doc.name,
						secondary_party: supplier,
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
    { label: "Accounts Receivable", action: "TODO" },
    { label: "Accounting Ledger", action: "TODO" },
    { label: "Get Customer Group Details", action: "TODO" },
    { label: "Link with Supplier", action: "TODO" },
  ],
};

export default customerTriggers;