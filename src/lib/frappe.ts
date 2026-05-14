/**
 * Frappe table name conventions:
 * - Postgres tables are literally named `tab<DocType Name>` WITH SPACES preserved.
 *   e.g. DocType "Sales Invoice" → table "tabSales Invoice"
 * - Always quote the table name and DO NOT strip whitespace.
 */
export function tableName(doctype: string): string {
  return `tab${doctype}`;
}
