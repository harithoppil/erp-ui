// Auto-generated trigger map for: Subcontracting Order
// Source: ../frappe-bench/apps/erpnext/erpnext/subcontracting/doctype/subcontracting_order/subcontracting_order.js
// Generated: 2026-05-13T23:34:09.381Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const subcontractingOrderTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "reserve_raw_materials",
        args: (doc) => ({
							items: data.items.map((item) => ({
								name: item.subcontracting_order_supplied_item,
								qty_to_reserve: item.qty_to_reserve,
							})),
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
        method: "erpnext.subcontracting.doctype.subcontracting_order.subcontracting_order.update_subcontracting_order_status",
        args: (doc) => ({
				sco: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: sco_rm_details,
							order_doctype: cur_frm.doc.doctype,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "supplier_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "purchase_order",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "cost_center",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "set_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "set_reserve_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "transaction_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
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
        field: "supplied_items",
        value: (doc) => null,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Quantity is mandatory for the selected items.",
      },
    ],
  },
  set_queries: {
    onChange: [
      {
        type: "serverCall",
        method: "reserve_raw_materials",
        args: (doc) => ({
							items: data.items.map((item) => ({
								name: item.subcontracting_order_supplied_item,
								qty_to_reserve: item.qty_to_reserve,
							})),
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
        method: "erpnext.subcontracting.doctype.subcontracting_order.subcontracting_order.update_subcontracting_order_status",
        args: (doc) => ({
				sco: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: sco_rm_details,
							order_doctype: cur_frm.doc.doctype,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "shipping_address",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "transaction_date",
        value: (doc) => "TODO: frappe.datetime.get_today(",
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
        field: "supplied_items",
        value: (doc) => null,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Quantity is mandatory for the selected items.",
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "reserve_raw_materials",
        args: (doc) => ({
							items: data.items.map((item) => ({
								name: item.subcontracting_order_supplied_item,
								qty_to_reserve: item.qty_to_reserve,
							})),
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
        method: "erpnext.subcontracting.doctype.subcontracting_order.subcontracting_order.update_subcontracting_order_status",
        args: (doc) => ({
				sco: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: sco_rm_details,
							order_doctype: cur_frm.doc.doctype,
						}),
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
        field: "supplied_items",
        value: (doc) => null,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Quantity is mandatory for the selected items.",
      },
    ],
  },
  purchase_order: {
    onChange: [
      {
        type: "serverCall",
        method: "reserve_raw_materials",
        args: (doc) => ({
							items: data.items.map((item) => ({
								name: item.subcontracting_order_supplied_item,
								qty_to_reserve: item.qty_to_reserve,
							})),
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
        method: "erpnext.subcontracting.doctype.subcontracting_order.subcontracting_order.update_subcontracting_order_status",
        args: (doc) => ({
				sco: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: sco_rm_details,
							order_doctype: cur_frm.doc.doctype,
						}),
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
        field: "supplied_items",
        value: (doc) => null,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Quantity is mandatory for the selected items.",
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "reserve_raw_materials",
        args: (doc) => ({
							items: data.items.map((item) => ({
								name: item.subcontracting_order_supplied_item,
								qty_to_reserve: item.qty_to_reserve,
							})),
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
        method: "erpnext.subcontracting.doctype.subcontracting_order.subcontracting_order.update_subcontracting_order_status",
        args: (doc) => ({
				sco: doc.name,
				status: status,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: sco_rm_details,
							order_doctype: cur_frm.doc.doctype,
						}),
        patches: [
        ],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Quantity is mandatory for the selected items.",
      },
    ],
  },
  get_query: {
    onChange: [
    ],
  },
  primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "reserve_raw_materials",
        args: (doc) => ({
							items: data.items.map((item) => ({
								name: item.subcontracting_order_supplied_item,
								qty_to_reserve: item.qty_to_reserve,
							})),
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
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Quantity is mandatory for the selected items.",
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  company: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.controllers.subcontracting_controller.get_materials_from_supplier",
        args: (doc) => ({
							subcontract_order: doc.name,
							rm_details: sco_rm_details,
							order_doctype: cur_frm.doc.doctype,
						}),
        patches: [
        ],
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
							rm_details: sco_rm_details,
							order_doctype: cur_frm.doc.doctype,
						}),
        patches: [
        ],
      },
    ],
  },
  amount: {
    onChange: [
    ],
  },
  expense_account: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Re-open", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Reserve", action: "TODO" },
    { label: "Unreserve", action: "TODO" },
    { label: "Reserved Stock", action: "TODO" },
    { label: "Return of Components", action: "TODO" },
    { label: "Subcontracting Receipt", action: "TODO" },
    { label: "Material to Supplier", action: "TODO" },
  ],
};

export default subcontractingOrderTriggers;