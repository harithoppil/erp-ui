// Auto-generated trigger map for: Subcontracting Inward Order
// Source: ../frappe-bench/apps/erpnext/erpnext/subcontracting/doctype/subcontracting_inward_order/subcontracting_inward_order.js
// Generated: 2026-05-13T23:34:09.385Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const subcontractingInwardOrderTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_inward_order.subcontracting_inward_order.update_subcontracting_inward_order_status",
        args: (doc) => ({
				scio: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_work_order",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_stock_entry_inward",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_delivery",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "customer_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_order",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "set_delivery_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "service_items",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "items",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "received_items",
        value: (doc) => null,
      },
    ],
  },
  set_delivery_warehouse: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_inward_order.subcontracting_inward_order.update_subcontracting_inward_order_status",
        args: (doc) => ({
				scio: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_work_order",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_stock_entry_inward",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_delivery",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "service_items",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "items",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "received_items",
        value: (doc) => null,
      },
    ],
  },
  sales_order: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_inward_order.subcontracting_inward_order.update_subcontracting_inward_order_status",
        args: (doc) => ({
				scio: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_work_order",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_stock_entry_inward",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_delivery",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "service_items",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "items",
        value: (doc) => null,
      },
      {
        type: "setValue",
        field: "received_items",
        value: (doc) => null,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_inward_order.subcontracting_inward_order.update_subcontracting_inward_order_status",
        args: (doc) => ({
				scio: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_work_order",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_stock_entry_inward",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_rm_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_delivery",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_subcontracting_return",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Re-open", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Raw Materials to Customer", action: "TODO" },
    { label: "Work Order", action: "TODO" },
    { label: "Material from Customer", action: "TODO" },
    { label: "Subcontracting Delivery", action: "TODO" },
    { label: "Finished Goods Return", action: "TODO" },
  ],
};

export default subcontractingInwardOrderTriggers;