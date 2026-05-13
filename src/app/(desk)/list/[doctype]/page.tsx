import { query, queryOne } from "@/lib/db";
import type { DocType, DocField } from "@/types/erp";
import { notFound } from "next/navigation";
import { ListClient } from "./list-client";

interface PageProps {
  params: Promise<{ doctype: string }>;
}

export default async function ListPage({ params }: PageProps) {
  const { doctype } = await params;

  const docType = await queryOne<DocType>(
    `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
    [doctype]
  );

  if (!docType) notFound();

  // Get fields that should show in list view
  const fields = await query<DocField>(
    `SELECT name, parent, label, fieldname, fieldtype, options, mandatory, hidden, idx, default_value, description, depends_on, read_only, reqd, in_list_view, in_standard_filter
     FROM "tabDocField"
     WHERE parent = $1 AND hidden = 0 AND fieldtype NOT IN ('Section Break', 'Column Break', 'Tab Break', 'HTML', 'Button', 'Image', 'Color', 'Heading', 'Attach', 'Attach Image', 'Signature', 'Geolocation', 'Table', 'Table MultiSelect')
     ORDER BY idx`,
    [doctype]
  );

  const listFields = fields.filter((f) => f.in_list_view === 1);
  const displayFields =
    listFields.length > 0
      ? listFields
      : fields.filter((f) => !f.hidden).slice(0, 5);

  // Get actual data — handle empty display fields gracefully
  const tableName = `tab${doctype.replace(/\s+/g, "")}`;
  const selectCols = displayFields.length > 0
    ? ", " + displayFields.map((f) => `"${f.fieldname}"`).join(", ")
    : "";

  let rows: Record<string, unknown>[] = [];
  try {
    rows = await query<Record<string, unknown>>(
      `SELECT name${selectCols} FROM "${tableName}" ORDER BY creation DESC LIMIT 50`
    );
  } catch {
    rows = [];
  }

  return (
    <ListClient
      docType={docType}
      fields={displayFields}
      rows={rows}
    />
  );
}