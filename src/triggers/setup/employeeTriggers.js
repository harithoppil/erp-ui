// Auto-generated trigger map for: Employee
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/employee/employee.js
// Generated: 2026-05-13T23:34:09.250Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const employeeTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "user_id",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 0),
      },
    ],
  },
  Account: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "user_id",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 0),
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "department",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "user_id",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 0),
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "user_id",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 0),
      },
    ],
  },
  primary_action: {
    onChange: [
    ],
  },
  create_user_automatically: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "user_id",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 1),
      },
      {
        type: "raw",
        execute: (frm) => frm.set_df_property("user_id", "read_only", 0),
      },
    ],
  },
  date_of_birth: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  date_of_joining: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  is_employee_birthday: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  is_work_anniversary: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  get_work_anniversary_years: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  create_milestone_section: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  build_anniversary_content: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  add_anniversary_indicator: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  prefered_contact_email: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  personal_email: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  company_email: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  user_id: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  update_contact: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "prefered_email",
        value: (doc) => frm.fields_dict[prefered_email_fieldname].value,
      },
    ],
  },
  status: {
    onChange: [
      {
        type: "serverCall",
        method: "deactivate_sales_person",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Create User", action: "TODO" },
  ],
};

export default employeeTriggers;