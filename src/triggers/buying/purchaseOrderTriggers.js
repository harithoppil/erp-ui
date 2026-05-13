// Auto-generated trigger map for: Purchase Order
// Source: ../frappe-bench/apps/erpnext/erpnext/buying/doctype/purchase_order/purchase_order.js
// Generated: 2026-05-13T23:34:09.177Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const purchaseOrderTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: doc.po_details,
							order_doctype: doc.doctype,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_finished_goods",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_service_item",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "schedule_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "transaction_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "advance_paid",
        value: (doc) => 0,
      },
    ],
  },
  company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: doc.po_details,
							order_doctype: doc.doctype,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_finished_goods",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_service_item",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "schedule_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "transaction_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "advance_paid",
        value: (doc) => 0,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: doc.po_details,
							order_doctype: doc.doctype,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_finished_goods",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_service_item",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "transaction_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "advance_paid",
        value: (doc) => 0,
      },
    ],
  },
  get_materials_from_supplier: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: doc.po_details,
							order_doctype: doc.doctype,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_finished_goods",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_service_item",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "transaction_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "advance_paid",
        value: (doc) => 0,
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_finished_goods",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_service_item",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "transaction_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
      },
      {
        type: "setValue",
        field: "advance_paid",
        value: (doc) => 0,
      },
    ],
  },
  get_subcontracting_boms_for_finished_goods: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_finished_goods",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_service_item",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  get_subcontracting_boms_for_service_item: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.subcontracting.doctype.subcontracting_bom.subcontracting_bom.get_subcontracting_boms_for_service_item",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  schedule_date: {
    onChange: [
    ],
  },
  primary_action: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Return of Components", action: "TODO" },
    { label: "Update Items", action: "TODO" },
    { label: "Hold", action: "TODO" },
    { label: "Resume", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Delivered", action: "TODO" },
    { label: "Re-open", action: "TODO" },
    { label: "Purchase Receipt", action: "TODO" },
    { label: "Subcontracting Order", action: "TODO" },
    { label: "Purchase Invoice", action: "TODO" },
    { label: "Payment", action: "TODO" },
    { label: "Payment Request", action: "TODO" },
    { label: "Material Request", action: "TODO" },
    { label: "Supplier Quotation", action: "TODO" },
    { label: "Update Rate as per Last Purchase", action: "TODO" },
    { label: "Link to Material Request", action: "TODO" },
  ],
};

export default purchaseOrderTriggers;