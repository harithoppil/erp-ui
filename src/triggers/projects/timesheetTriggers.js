// Auto-generated trigger map for: Timesheet
// Source: ../frappe-bench/apps/erpnext/erpnext/projects/doctype/timesheet/timesheet.js
// Generated: 2026-05-13T23:34:09.228Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const timesheetTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: base_currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "exchange_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("exchange_rate", "description", "1 " + frm.doc.currency + " = [?] " + base_currency),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: base_currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "exchange_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("exchange_rate", "description", "1 " + frm.doc.currency + " = [?] " + base_currency),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: base_currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_project",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "exchange_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("exchange_rate", "description", "1 " + frm.doc.currency + " = [?] " + base_currency),
      },
    ],
  },
  customer: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: base_currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "exchange_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("exchange_rate", "description", "1 " + frm.doc.currency + " = [?] " + base_currency),
      },
    ],
  },
  currency: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.utils.get_exchange_rate",
        args: (doc) => ({
					from_currency: doc.currency,
					to_currency: base_currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "exchange_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("exchange_rate", "description", "1 " + frm.doc.currency + " = [?] " + base_currency),
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "exchange_rate",
        value: (doc) => flt(r.message,)
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("exchange_rate", "description", "1 " + frm.doc.currency + " = [?] " + base_currency),
      },
    ],
  },
  exchange_rate: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
    ],
  },
  set_dynamic_field_label: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
    ],
  },
  set_route_options_for_new_task: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
    ],
  },
  make_invoice: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.make_sales_invoice",
        args: (doc) => ({
					source_name: doc.name,
					item_code: args.item_code,
					customer: doc.customer || args.customer,
					currency: doc.currency,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
    ],
  },
  parent_project: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
    ],
  },
  employee: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
							employee: doc.employee,
							activity_type: row.activity_type,
							currency: doc.currency,
						}),
        patches: [
        ],
      },
    ],
  },
  time_logs_remove: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  task: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  from_time: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  to_time: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  time_logs_add: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  hours: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  billing_hours: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  billing_rate: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  costing_rate: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  is_billable: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  activity_type: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.projects.doctype.timesheet.timesheet.get_activity_cost",
        args: (doc) => ({
				employee: doc.employee,
				activity_type: frm.selected_doc.activity_type,
				currency: doc.currency,
			}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Create Sales Invoice", action: "TODO" },
  ],
};

export default timesheetTriggers;