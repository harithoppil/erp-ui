// Auto-generated trigger map for: Account
// Source: ../frappe-bench/apps/erpnext/erpnext/accounts/doctype/account/account.js
// Generated: 2026-05-13T23:34:09.350Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const accountTriggers = {
  setup: {
    onChange: [
      {
        type: "serverCall",
        method: "convert_group_to_ledger",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "convert_ledger_to_group",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.merge_account",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setQuery",
        targetField: "parent_account",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setQuery",
        targetField: "account_category",
        query: (doc) => ({ /* TODO: extract from source */ }),
      },
      {
        type: "setValue",
        field: "account_category",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  refresh: {
    onChange: [
      {
        type: "serverCall",
        method: "convert_group_to_ledger",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "convert_ledger_to_group",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.merge_account",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_category",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  account_type: {
    onChange: [
      {
        type: "serverCall",
        method: "convert_group_to_ledger",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "convert_ledger_to_group",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.merge_account",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_category",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  root_type: {
    onChange: [
      {
        type: "serverCall",
        method: "convert_group_to_ledger",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "convert_ledger_to_group",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.merge_account",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_category",
        value: (doc) => "",
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  add_toolbar_buttons: {
    onChange: [
      {
        type: "serverCall",
        method: "convert_group_to_ledger",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "convert_ledger_to_group",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.merge_account",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  merge_account: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.merge_account",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  primary_action: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.merge_account",
        args: (doc) => ({
						old: doc.name,
						new: data.name,
					}),
        patches: [
        ],
      },
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  update_account_number: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.accounts.doctype.account.account.update_account_number",
        args: (doc) => ({
						account_number: data.account_number,
						account_name: data.account_name,
						name: doc.name,
					}),
        patches: [
        ],
      },
      {
        type: "setValue",
        field: "account_number",
        value: (doc) => data.account_number,
      },
      {
        type: "setValue",
        field: "account_name",
        value: (doc) => data.account_name,
      },
    ],
  },
  $buttons: [
    { label: "Merge Account", action: "TODO" },
    { label: "Update Account Name / Number", action: "TODO" },
    { label: "Chart of Accounts", action: "TODO" },
    { label: "Convert to Non-Group", action: "TODO" },
    { label: "General Ledger", action: "TODO" },
    { label: "Convert to Group", action: "TODO" },
  ],
};

export default accountTriggers;