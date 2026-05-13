// Auto-generated trigger map for: Delivery Trip
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/delivery_trip/delivery_trip.js
// Generated: 2026-05-13T23:34:09.394Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const deliveryTripTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_driver_email",
        args: (doc) => ({
					driver: doc.driver,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.notify_customers",
        args: (doc) => ({
							delivery_trip: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "driver",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "driver_email",
        value: (doc) => data.message.email,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Calculate Arrival Time as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Optimize Route as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Missing email template for dispatch. Please set one in Delivery Settings.",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_driver_email",
        args: (doc) => ({
					driver: doc.driver,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.notify_customers",
        args: (doc) => ({
							delivery_trip: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "driver_email",
        value: (doc) => data.message.email,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Calculate Arrival Time as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Optimize Route as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Missing email template for dispatch. Please set one in Delivery Settings.",
      },
    ],
  },
  calculate_arrival_time: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_driver_email",
        args: (doc) => ({
					driver: doc.driver,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.notify_customers",
        args: (doc) => ({
							delivery_trip: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "driver_email",
        value: (doc) => data.message.email,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Calculate Arrival Time as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Optimize Route as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Missing email template for dispatch. Please set one in Delivery Settings.",
      },
    ],
  },
  driver: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_driver_email",
        args: (doc) => ({
					driver: doc.driver,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.notify_customers",
        args: (doc) => ({
							delivery_trip: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "driver_email",
        value: (doc) => data.message.email,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Optimize Route as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Missing email template for dispatch. Please set one in Delivery Settings.",
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "driver_email",
        value: (doc) => data.message.email,
      },
    ],
  },
  optimize_route: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.notify_customers",
        args: (doc) => ({
							delivery_trip: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Cannot Optimize Route as Driver Address is Missing.",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Missing email template for dispatch. Please set one in Delivery Settings.",
      },
    ],
  },
  notify_customers: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.notify_customers",
        args: (doc) => ({
							delivery_trip: doc.name,
						}),
        patches: [
        ],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Missing email template for dispatch. Please set one in Delivery Settings.",
      },
    ],
  },
  customer: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_contact_and_address",
        args: (doc) => ({ name: row.customer }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({ address_dict: row.address }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_contact_display",
        args: (doc) => ({ contact: row.contact }),
        patches: [
        ],
      },
    ],
  },
  address: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: (doc) => ({ address_dict: row.address }),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_contact_display",
        args: (doc) => ({ contact: row.contact }),
        patches: [
        ],
      },
    ],
  },
  contact: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.delivery_trip.delivery_trip.get_contact_display",
        args: (doc) => ({ contact: row.contact }),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Notify Customers via Email", action: "TODO" },
    { label: "Delivery Note", action: "TODO" },
    { label: "Delivery Notes", action: "TODO" },
  ],
};

export default deliveryTripTriggers;