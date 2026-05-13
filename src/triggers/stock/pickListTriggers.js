// Auto-generated trigger map for: Pick List
// Source: ../frappe-bench/apps/erpnext/erpnext/stock/doctype/pick_list/pick_list.js
// Generated: 2026-05-13T23:34:09.392Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const pickListTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "set_item_locations",
        args: (doc) => ({
					save: save,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "work_order",
        query: (doc) => ({ query: "erpnext.stock.doctype.pick_list.pick_list.get_pending_work_orders", filters: {
					company: frm.doc.company,
				} }),
      },
      {
        type: "setQuery",
        targetField: "material_request",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "for_qty",
        value: (doc) => data.qty,
      },
    ],
  },
  set_item_locations: {
    onChange: [
      {
        type: "serverCall",
        method: "set_item_locations",
        args: (doc) => ({
					save: save,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "for_qty",
        value: (doc) => data.qty,
      },
    ],
  },
  pick_manually: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "for_qty",
        value: (doc) => data.qty,
      },
    ],
  },
  update_warehouse_property: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "for_qty",
        value: (doc) => data.qty,
      },
    ],
  },
  get_item_locations: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "for_qty",
        value: (doc) => data.qty,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "for_qty",
        value: (doc) => data.qty,
      },
    ],
  },
  work_order: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "for_qty",
        value: (doc) => data.qty,
      },
    ],
  },
  material_request: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  purpose: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  create_delivery_note: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  create_stock_entry: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  update_pick_list_stock: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  add_get_items_button: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  scan_barcode: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  create_stock_reservation_entries: {
    onChange: [
      {
        type: "serverCall",
        method: "create_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  callback: {
    onChange: [
    ],
  },
  cancel_stock_reservation_entries: {
    onChange: [
      {
        type: "serverCall",
        method: "cancel_stock_reservation_entries",
        args: (doc) => ({
				notify: true,
			}),
        patches: [
        ],
      },
    ],
  },
  item_code: {
    onChange: [
    ],
  },
  uom: {
    onChange: [
    ],
  },
  warehouse: {
    onChange: [
    ],
  },
  qty: {
    onChange: [
    ],
  },
  conversion_factor: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Update Current Stock", action: "TODO" },
    { label: "Delivery Note", action: "TODO" },
    { label: "Stock Entry", action: "TODO" },
    { label: "Reserve", action: "TODO" },
    { label: "Unreserve", action: "TODO" },
    { label: "Reserved Stock", action: "TODO" },
    { label: "Get Items", action: "TODO" },
  ],
};

export default pickListTriggers;