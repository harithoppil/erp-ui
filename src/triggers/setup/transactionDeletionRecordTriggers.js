// Auto-generated trigger map for: Transaction Deletion Record
// Source: ../frappe-bench/apps/erpnext/erpnext/setup/doctype/transaction_deletion_record/transaction_deletion_record.js
// Generated: 2026-05-13T23:34:09.255Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const transactionDeletionRecordTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.get_protected_doctypes",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.get_doctypes_to_be_ignored",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "generate_to_delete_list",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.process_import_template",
        args: (doc) => ({
									transaction_deletion_record_name: doc.name,
									file_url: file_doc.file_url,
								}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "start_deletion_tasks",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  onload: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.get_protected_doctypes",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.get_doctypes_to_be_ignored",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "generate_to_delete_list",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.process_import_template",
        args: (doc) => ({
									transaction_deletion_record_name: doc.name,
									file_url: file_doc.file_url,
								}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "start_deletion_tasks",
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
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "generate_to_delete_list",
        args: (doc) => ({}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.process_import_template",
        args: (doc) => ({
									transaction_deletion_record_name: doc.name,
									file_url: file_doc.file_url,
								}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "start_deletion_tasks",
        args: (doc) => ({}),
        patches: [
        ],
      },
    ],
  },
  on_success: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.process_import_template",
        args: (doc) => ({
									transaction_deletion_record_name: doc.name,
									file_url: file_doc.file_url,
								}),
        patches: [
        ],
      },
    ],
  },
  doctype_name: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.setup.doctype.transaction_deletion_record.transaction_deletion_record.get_company_link_fields",
        args: (doc) => ({
					doctype_name: row.doctype_name,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "populate_doctype_details",
        args: (doc) => ({
					doctype_name: row.doctype_name,
					company: doc.company,
					company_field: row.company_field,
				}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "populate_doctype_details",
        args: (doc) => ({
						doctype_name: row.doctype_name,
						company: doc.company,
						company_field: row.company_field,
					}),
        patches: [
        ],
      },
    ],
  },
  company_field: {
    onChange: [
      {
        type: "serverCall",
        method: "populate_doctype_details",
        args: (doc) => ({
						doctype_name: row.doctype_name,
						company: doc.company,
						company_field: row.company_field,
					}),
        patches: [
        ],
      },
    ],
  },
  $buttons: [
    { label: "Generate To Delete List", action: "TODO" },
    { label: "Export", action: "TODO" },
    { label: "Remove Zero Counts", action: "TODO" },
    { label: "Import", action: "TODO" },
    { label: "Retry", action: "TODO" },
  ],
};

export default transactionDeletionRecordTriggers;