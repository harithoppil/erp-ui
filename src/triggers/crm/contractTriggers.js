// Auto-generated trigger map for: Contract
// Source: ../frappe-bench/apps/erpnext/erpnext/crm/doctype/contract/contract.js
// Generated: 2026-05-13T23:34:09.235Z

import { FormTriggerMap, ServerCallAction, SetQueryAction, SetValueAction, ValidateAction } from "../types";

const contractTriggers = {
  contract_template: {
    onChange: [
      {
        type: "serverCall",
        method: "erpnext.crm.doctype.contract_template.contract_template.get_contract_template",
        args: (doc) => ({
					template_name: doc.contract_template,
					doc: doc,
				}),
        patches: [
          { field: "contract_terms", fromResponse: "contract_terms" },
        ],
      },
      {
        type: "setValue",
        field: "contract_terms",
        value: (doc) => r.message.contract_terms,
      },
      {
        type: "setValue",
        field: "requires_fulfilment",
        value: (doc) => contract_template.requires_fulfilment,
      },
      {
        type: "setValue",
        field: "party_full_name",
        value: (doc) => r[field],
      },
    ],
  },
  callback: {
    onChange: [
      {
        type: "setValue",
        field: "contract_terms",
        value: (doc) => r.message.contract_terms,
      },
      {
        type: "setValue",
        field: "requires_fulfilment",
        value: (doc) => contract_template.requires_fulfilment,
      },
    ],
  },
  party_name: {
    onChange: [
      {
        type: "setValue",
        field: "party_full_name",
        value: (doc) => r[field],
      },
    ],
  },
};

export default contractTriggers;