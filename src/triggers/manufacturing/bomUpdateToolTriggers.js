// Auto-generated trigger map for: Bom Update Tool
// Source: ../frappe-bench/apps/erpnext/erpnext/manufacturing/doctype/bom_update_tool/bom_update_tool.js
// Generated: 2026-05-13T23:34:09.286Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const bomUpdateToolTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_replace_bom",
        args: (doc) => ({
					boms: {
						current_bom: doc.current_bom,
						new_bom: doc.new_bom,
					},
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_update_cost",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "current_bom",
        query: (doc) => ({ query: "erpnext.controllers.queries.bom", filters: { name: "!" + frm.doc.new_bom } }),
      },
      {
        type: "setQuery",
        targetField: "new_bom",
        query: (doc) => ({ query: "erpnext.controllers.queries.bom", filters: { name: "!" + frm.doc.current_bom } }),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_replace_bom",
        args: (doc) => ({
					boms: {
						current_bom: doc.current_bom,
						new_bom: doc.new_bom,
					},
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_update_cost",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  disable_button: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_replace_bom",
        args: (doc) => ({
					boms: {
						current_bom: doc.current_bom,
						new_bom: doc.new_bom,
					},
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_update_cost",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  current_bom: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_replace_bom",
        args: (doc) => ({
					boms: {
						current_bom: doc.current_bom,
						new_bom: doc.new_bom,
					},
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_update_cost",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  new_bom: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_replace_bom",
        args: (doc) => ({
					boms: {
						current_bom: doc.current_bom,
						new_bom: doc.new_bom,
					},
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_update_cost",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  replace: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_replace_bom",
        args: (doc) => ({
					boms: {
						current_bom: doc.current_bom,
						new_bom: doc.new_bom,
					},
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_update_cost",
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
  update_latest_price_in_all_boms: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.manufacturing.doctype.bom_update_tool.bom_update_tool.enqueue_update_cost",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  confirm_job_start: {
    onChange: [
    ],
  },
  $buttons: [
    { label: "View BOM Update Log", action: "TODO" },
  ],
};

export default bomUpdateToolTriggers;