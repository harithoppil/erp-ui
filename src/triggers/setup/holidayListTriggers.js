// Auto-generated trigger map for: Holiday List
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/holiday_list/holiday_list.js
// Generated: 2026-05-13T23:34:09.241Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const holidayListTriggers = {
  refresh: {
    onChange: [
      {
        type: "setValue",
        field: "total_holidays",
        value: (doc) => frm.doc.holidays.length,
      },
      {
        type: "setValue",
        field: "to_date",
        value: (doc) => "TODO: frappe.datetime.add_days(a_year_from_start, -1",
      },
      {
        type: "setValue",
        field: "subdivision",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 1),
      },
    ],
  },
  from_date: {
    onChange: [
      {
        type: "setValue",
        field: "to_date",
        value: (doc) => "TODO: frappe.datetime.add_days(a_year_from_start, -1",
      },
      {
        type: "setValue",
        field: "subdivision",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 1),
      },
    ],
  },
  country: {
    onChange: [
      {
        type: "setValue",
        field: "subdivision",
        value: (doc) => "",
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 1),
      },
    ],
  },
  set_subdivisions: {
    onChange: [
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 0),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("subdivision", "hidden", 1),
      },
    ],
  },
};

export default holidayListTriggers;