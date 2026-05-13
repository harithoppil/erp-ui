// Auto-generated trigger map for: Shipment
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/shipment/shipment.js
// Generated: 2026-05-13T23:34:09.413Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const shipmentTriggers = {
  address_query: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setQuery",
        targetField: "delivery_address_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "pickup_address_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "delivery_contact_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "pickup_contact_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "delivery_to",
        value: (doc) => frm.doc[delivery_to],
      },
      {
        type: "setValue",
        field: "pickup",
        value: (doc) => frm.doc[pickup_from],
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  contact_query: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setQuery",
        targetField: "delivery_address_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "pickup_address_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "delivery_contact_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "pickup_contact_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "delivery_to",
        value: (doc) => frm.doc[delivery_to],
      },
      {
        type: "setValue",
        field: "pickup",
        value: (doc) => frm.doc[pickup_from],
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setQuery",
        targetField: "delivery_address_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "pickup_address_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "delivery_contact_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "pickup_contact_name",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "delivery_to",
        value: (doc) => frm.doc[delivery_to],
      },
      {
        type: "setValue",
        field: "pickup",
        value: (doc) => frm.doc[pickup_from],
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_to",
        value: (doc) => frm.doc[delivery_to],
      },
      {
        type: "setValue",
        field: "pickup",
        value: (doc) => frm.doc[pickup_from],
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  before_save: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_to",
        value: (doc) => frm.doc[delivery_to],
      },
      {
        type: "setValue",
        field: "pickup",
        value: (doc) => frm.doc[pickup_from],
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  set_pickup_company_address: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  set_delivery_company_address: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.name,
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_from_type: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  delivery_to_type: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "TODO: frappe.defaults.get_default('company'",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_supplier",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_customer",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  delivery_address_name: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_address_name: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  get_contact_display: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.contact.contact.get_contact_details",
        args: (doc) => ({ contact: contact_name }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.message.contact_email,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
    ],
  },
  delivery_contact_name: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_contact_name: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_contact_person: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: doc.pickup_contact_person }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_company_contact",
        args: (doc) => ({ user: frappe.session.user }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  set_company_contact: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_company",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "delivery_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "delivery_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact",
        value: (doc) => doc.contact_display ?? contact_display,
      },
      {
        type: "setValue",
        field: "pickup_contact_email",
        value: (doc) => r.email,
      },
      {
        type: "setValue",
        field: "pickup_contact_person",
        value: (doc) => "TODO: frappe.session.user",
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  delivery_company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  delivery_customer: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  delivery_supplier: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_customer: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_supplier: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  set_address_name: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_address_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_address_name", fromResponse: "" },
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_address_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  set_contact_name: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.shipment.shipment.get_contact_name",
        args: (doc) => ({
				ref_doctype: ref_doctype,
				docname: ref_docname,
			}),
        patches: [
          { field: "delivery_contact_name", fromResponse: "" },
        ],
      },
      {
        type: "setValue",
        field: "delivery_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "setValue",
        field: "pickup_contact_name",
        value: (doc) => r.message,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  add_template: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  pickup_date: {
    onChange: [
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Pickup Date cannot be before this day",
      },
    ],
  },
  clear_pickup_fields: {
    onChange: [
    ],
  },
  clear_delivery_fields: {
    onChange: [
    ],
  },
  remove_email_row: {
    onChange: [
    ],
  },
  delivery_note: {
    onChange: [
      {
        type: "setValue",
        field: "value_of_goods",
        value: (doc) => Math.round(value_of_goods,)
      },
    ],
  },
  grand_total: {
    onChange: [
      {
        type: "setValue",
        field: "value_of_goods",
        value: (doc) => Math.round(value_of_goods,)
      },
    ],
  },
};

export default shipmentTriggers;