// Auto-generated trigger map for: Work Order
// Source: ../frappe-bench/apps/erpnext/erpnext/manufacturing/doctype/work_order/work_order.js
// Generated: 2026-05-13T23:34:09.283Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const workOrderTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.check_if_scrap_warehouse_mandatory",
        args: (doc) => ({
					bom_no: doc.bom_no,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_stock_return_entry",
        args: (doc) => ({
				work_order: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "wip_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "source_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_order",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "fg_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "scrap_warehouse",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "bom_no",
        query: (doc) => ({ query: "erpnext.controllers.queries.bom", filters: { item: cstr(frm.doc.production_item) } }),
      },
      {
        type: "setQuery",
        targetField: "production_item",
        query: (doc) => ({ query: "erpnext.controllers.queries.item_query", filters: {
					is_stock_item: 1,
				} }),
      },
      {
        type: "setQuery",
        targetField: "project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "sales_order",
        query: (doc) => ({ query: "erpnext.manufacturing.doctype.work_order.work_order.query_sales_order", filters: {
						production_item: frm.doc.production_item,
					} }),
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_delete_rows", !allow_edit),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_add_rows", !allow_edit),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.check_if_scrap_warehouse_mandatory",
        args: (doc) => ({
					bom_no: doc.bom_no,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_stock_return_entry",
        args: (doc) => ({
				work_order: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_delete_rows", !allow_edit),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_add_rows", !allow_edit),
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  source_warehouse: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_stock_return_entry",
        args: (doc) => ({
				work_order: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_delete_rows", !allow_edit),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_add_rows", !allow_edit),
      },
      {
        type: "serverCall",
        method: "erpnext.stock.utils.get_latest_stock_qty",
        args: (doc) => ({
					item_code: row.item_code,
					warehouse: row.source_warehouse,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_item_details",
        args: (doc) => ({
					item_code: row.item_code,
					company: doc.company,
				}),
        patches: [
        ],
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Please set the Item Code first",
      },
    ],
  },
  allow_alternative_item: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_stock_return_entry",
        args: (doc) => ({
				work_order: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_delete_rows", !allow_edit),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_add_rows", !allow_edit),
      },
    ],
  },
  condition: {
    onChange: [
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_stock_return_entry",
        args: (doc) => ({
				work_order: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_delete_rows", !allow_edit),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("required_items", "cannot_add_rows", !allow_edit),
      },
    ],
  },
  add_custom_button_to_return_components: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_stock_return_entry",
        args: (doc) => ({
				work_order: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  create_stock_return_entry: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_stock_return_entry",
        args: (doc) => ({
				work_order: doc.name,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  make_job_card: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_job_card",
        args: (doc) => ({
						work_order: doc.name,
						operations: selected_rows,
						parent_bom: doc.bom_no,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  get_data: {
    onChange: [
    ],
  },
  make_bom: {
    onChange: [
      {
        type: "serverCall",
        method: "make_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  show_progress_for_items: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  show_progress_for_operations: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  production_item: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.get_item_details",
        args: (doc) => ({
					item: doc.production_item,
					project: doc.project,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "sales_order",
        value: (doc) => "",
      },
    ],
  },
  project: {
    onChange: [
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  bom_no: {
    onChange: [
      {
        type: "serverCall",
        method: "get_items_and_operations_from_bom",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  use_multi_level_bom: {
    onChange: [
    ],
  },
  qty: {
    onChange: [
    ],
  },
  before_submit: {
    onChange: [
    ],
  },
  additional_operating_cost: {
    onChange: [
    ],
  },
  item_code: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.stock.doctype.item.item.get_item_details",
        args: (doc) => ({
					item_code: row.item_code,
					company: doc.company,
				}),
        patches: [
        ],
      },
    ],
  },
  workstation: {
    onChange: [
      {
        type: "serverCall",
        method: "frappe.client.get",
        args: (doc) => ({
					doctype: "Workstation",
					name: d.workstation,
				}),
        patches: [
        ],
      },
    ],
  },
  time_in_mins: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Alternate Item", action: "TODO" },
    { label: "Create Job Card", action: "TODO" },
    { label: "BOM", action: "TODO" },
    { label: "Disassemble Order", action: "TODO" },
    { label: "Return Components", action: "TODO" },
    { label: "Close", action: "TODO" },
    { label: "Stop", action: "TODO" },
    { label: "Re-open", action: "TODO" },
    { label: "Create Pick List", action: "TODO" },
    { label: "Start", action: "TODO" },
    { label: "Additional Material Transfer", action: "TODO" },
    { label: "Material Consumption", action: "TODO" },
    { label: "Finish", action: "TODO" },
    { label: "Finish", action: "TODO" },
    { label: "Finish", action: "TODO" },
    { label: "Reserve", action: "TODO" },
    { label: "Unreserve", action: "TODO" },
    { label: "Reserved Stock", action: "TODO" },
  ],
};

export default workOrderTriggers;