// Auto-generated trigger map for: Sales Order
// Source: ../frappe-bench/apps/erpnext/erpnext/selling/doctype/sales_order/sales_order.js
// Generated: 2026-05-13T23:34:09.201Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const salesOrderTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.selling.doctype.sales_order.sales_order.get_stock_reservation_status",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
							items_details: data.items,
							notify: true,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
							sre_list: data.sr_entries.map((item) => item.sre),
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_delivery_schedule",
        args: (doc) => ({
						child_row: row,
						schedules: data.delivery_schedule,
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
        field: "delivery_date",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "reserve_stock",
        value: (doc) => 0,
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
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter at least one delivery date and quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter a valid quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Total quantity in delivery schedule cannot be greater than the item quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select a frequency for delivery schedule",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter the first delivery date",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter a valid number of deliveries",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("packed_items", "cannot_add_rows", true),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("packed_items", "cannot_delete_rows", true),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "description", null),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.selling.doctype.sales_order.sales_order.get_stock_reservation_status",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
							items_details: data.items,
							notify: true,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
							sre_list: data.sr_entries.map((item) => item.sre),
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_delivery_schedule",
        args: (doc) => ({
						child_row: row,
						schedules: data.delivery_schedule,
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
        field: "reserve_stock",
        value: (doc) => 0,
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
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter at least one delivery date and quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter a valid quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Total quantity in delivery schedule cannot be greater than the item quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select a frequency for delivery schedule",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter the first delivery date",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter a valid number of deliveries",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "hidden", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "description", null),
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "reserve_stock",
        value: (doc) => 0,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("reserve_stock", "hidden", 1),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
							items_details: data.items,
							notify: true,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
							sre_list: data.sr_entries.map((item) => item.sre),
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_delivery_schedule",
        args: (doc) => ({
						child_row: row,
						schedules: data.delivery_schedule,
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
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter at least one delivery date and quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter a valid quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Total quantity in delivery schedule cannot be greater than the item quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please select a frequency for delivery schedule",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter the first delivery date",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter a valid number of deliveries",
      },
    ],
  },
  get_query: {
    onChange: [
    ],
  },
  onchange: {
    onChange: [
    ],
  },
  primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
							items_details: data.items,
							notify: true,
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
							sre_list: data.sr_entries.map((item) => item.sre),
						}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_delivery_schedule",
        args: (doc) => ({
						child_row: row,
						schedules: data.delivery_schedule,
					}),
        patches: [
        ],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter at least one delivery date and quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please enter a valid quantity",
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Total quantity in delivery schedule cannot be greater than the item quantity",
      },
    ],
  },
  click: {
    onChange: [
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
  delivery_date: {
    onChange: [
      {
        type: "serverCall",
        method: "get_delivery_schedule",
        args: (doc) => ({
				sales_order_item: row.name,
			}),
        patches: [
        ],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please save the Sales Order before adding a delivery schedule.",
      },
    ],
  },
  $buttons: [
    { label: "Update Items", action: "TODO" },
    { label: "Reserve", action: "TODO" },
    { label: "Unreserve", action: "TODO" },
    { label: "Reserved Stock", action: "TODO" },
    { label: "Purchase Order", action: "TODO" },
    { label: "Update Items", action: "TODO" },
    { label: "Resume", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Re-open", action: "TODO" },
    { label: "Hold", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Subcontracting Inward Order", action: "TODO" },
    { label: "Pick List", action: "TODO" },
    { label: "Delivery Note", action: "TODO" },
    { label: "Work Order", action: "TODO" },
    { label: "Production Plan", action: "TODO" },
    { label: "Sales Invoice", action: "TODO" },
    { label: "Material Request", action: "TODO" },
    { label: "Request for Raw Materials", action: "TODO" },
    { label: "Purchase Order", action: "TODO" },
    { label: "Maintenance Visit", action: "TODO" },
    { label: "Maintenance Schedule", action: "TODO" },
    { label: "Project", action: "TODO" },
    { label: "Payment Request", action: "TODO" },
    { label: "Payment", action: "TODO" },
    { label: "Quotation", action: "TODO" },
  ],
};

export default salesOrderTriggers;