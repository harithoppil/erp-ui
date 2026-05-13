// Auto-generated trigger map for: Bom
// Source: ../frappe-bench/apps/erpnext/erpnext/manufacturing/doctype/bom/bom.js
// Generated: 2026-05-13T23:34:09.271Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bomTriggers = {
  validate: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_work_order",
        args: (doc) => ({
						bom_no: doc.name,
						item: item,
						qty: data.qty || 0.0,
						company: doc.company,
						project: doc.project,
						variant_items: variant_items,
						use_multi_level_bom: doc?.track_semi_finished_goods ? 0 : use_multi_level_bom,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom.bom.make_variant_bom",
        args: (doc) => ({
						source_name: doc.name,
						bom_no: doc.name,
						item: item,
						variant_items: variant_items,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "update_cost",
        args: (doc) => ({
				update_parent: true,
				save: save_doc,
				from_child_bom: false,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_routing",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "plc_conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "process_loss_qty",
        value: (doc) => doc.qty ?? qty,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Select template item",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("fg_based_operating_cost", "hidden", frm.doc.with_operations ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("with_operations", "hidden", frm.doc.fg_based_operating_cost ? 1 : 0),
      },
    ],
  },
  set_company_filters: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_work_order",
        args: (doc) => ({
						bom_no: doc.name,
						item: item,
						qty: data.qty || 0.0,
						company: doc.company,
						project: doc.project,
						variant_items: variant_items,
						use_multi_level_bom: doc?.track_semi_finished_goods ? 0 : use_multi_level_bom,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom.bom.make_variant_bom",
        args: (doc) => ({
						source_name: doc.name,
						bom_no: doc.name,
						item: item,
						variant_items: variant_items,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "update_cost",
        args: (doc) => ({
				update_parent: true,
				save: save_doc,
				from_child_bom: false,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_routing",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "plc_conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "process_loss_qty",
        value: (doc) => doc.qty ?? qty,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Select template item",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("fg_based_operating_cost", "hidden", frm.doc.with_operations ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("with_operations", "hidden", frm.doc.fg_based_operating_cost ? 1 : 0),
      },
    ],
  },
  with_operations: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_work_order",
        args: (doc) => ({
						bom_no: doc.name,
						item: item,
						qty: data.qty || 0.0,
						company: doc.company,
						project: doc.project,
						variant_items: variant_items,
						use_multi_level_bom: doc?.track_semi_finished_goods ? 0 : use_multi_level_bom,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom.bom.make_variant_bom",
        args: (doc) => ({
						source_name: doc.name,
						bom_no: doc.name,
						item: item,
						variant_items: variant_items,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "update_cost",
        args: (doc) => ({
				update_parent: true,
				save: save_doc,
				from_child_bom: false,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_routing",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "plc_conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "process_loss_qty",
        value: (doc) => doc.qty ?? qty,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Select template item",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("fg_based_operating_cost", "hidden", frm.doc.with_operations ? 1 : 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("with_operations", "hidden", frm.doc.fg_based_operating_cost ? 1 : 0),
      },
    ],
  },
  fg_based_operating_cost: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_work_order",
        args: (doc) => ({
						bom_no: doc.name,
						item: item,
						qty: data.qty || 0.0,
						company: doc.company,
						project: doc.project,
						variant_items: variant_items,
						use_multi_level_bom: doc?.track_semi_finished_goods ? 0 : use_multi_level_bom,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom.bom.make_variant_bom",
        args: (doc) => ({
						source_name: doc.name,
						bom_no: doc.name,
						item: item,
						variant_items: variant_items,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "update_cost",
        args: (doc) => ({
				update_parent: true,
				save: save_doc,
				from_child_bom: false,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_routing",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "plc_conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "process_loss_qty",
        value: (doc) => doc.qty ?? qty,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Select template item",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("with_operations", "hidden", frm.doc.fg_based_operating_cost ? 1 : 0),
      },
    ],
  },
  onload_post_render: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.work_order.work_order.make_work_order",
        args: (doc) => ({
						bom_no: doc.name,
						item: item,
						qty: data.qty || 0.0,
						company: doc.company,
						project: doc.project,
						variant_items: variant_items,
						use_multi_level_bom: doc?.track_semi_finished_goods ? 0 : use_multi_level_bom,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom.bom.make_variant_bom",
        args: (doc) => ({
						source_name: doc.name,
						bom_no: doc.name,
						item: item,
						variant_items: variant_items,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "update_cost",
        args: (doc) => ({
				update_parent: true,
				save: save_doc,
				from_child_bom: false,
			}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "get_routing",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "plc_conversion_rate",
        value: (doc) => 1.0,
      },
      {
        type: "setValue",
        field: "process_loss_qty",
        value: (doc) => doc.qty ?? qty,
      },
      {
        type: "validate",
        rule: (doc) => true, /* TODO: extract condition */
        error: "Select template item",
      },
    ],
  },
  condition: {
    onChange: [
    ],
  },
  onchange: {
    onChange: [
    ],
  },
  do_not_explode: {
    onChange: [
    ],
  },
  primary_action: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "Update Cost", action: "TODO" },
    { label: "Browse BOM", action: "TODO" },
    { label: "New Version", action: "TODO" },
    { label: "Work Order", action: "TODO" },
    { label: "Variant BOM", action: "TODO" },
    { label: "Quality Inspection", action: "TODO" },
    { label: "Alternate Item", action: "TODO" },
  ],
};

export default bomTriggers;