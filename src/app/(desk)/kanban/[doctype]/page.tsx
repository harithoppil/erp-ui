import { query, queryOne } from "@/lib/db";
import type { DocType, DocField } from "@/types/erp";
import { notFound } from "next/navigation";
import { KanbanClient } from "./kanban-client";

interface PageProps {
  params: Promise<{ doctype: string }>;
  searchParams: Promise<{ field?: string }>;
}

function tableName(doctype: string): string {
  return `tab${doctype.replace(/\s+/g, "")}`;
}

export default async function KanbanPage({ params, searchParams }: PageProps) {
  const { doctype: raw } = await params;
  const sp = await searchParams;
  const doctype = decodeURIComponent(raw);

  const docType = await queryOne<DocType>(
    `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
    [doctype]
  );
  if (!docType) notFound();

  const selectFields = await query<DocField>(
    `SELECT fieldname, label, fieldtype, options FROM "tabDocField"
     WHERE parent = $1 AND fieldtype = 'Select' AND hidden = 0
     ORDER BY idx`,
    [doctype]
  );

  let groupField = sp.field;
  if (!groupField) {
    const status = selectFields.find((f) => f.fieldname === "status");
    groupField = status?.fieldname ?? selectFields[0]?.fieldname;
  }
  const field = selectFields.find((f) => f.fieldname === groupField);

  const columns = field?.options
    ? field.options.split("\n").map((s) => s.trim()).filter(Boolean)
    : [];

  const table = tableName(doctype);
  let rows: Record<string, unknown>[] = [];
  if (groupField) {
    try {
      rows = await query<Record<string, unknown>>(
        `SELECT name, "${groupField}" as _kanban_group FROM "${table}" ORDER BY modified DESC NULLS LAST LIMIT 200`
      );
    } catch {
      rows = [];
    }
  }

  return (
    <KanbanClient
      doctype={doctype}
      groupField={groupField ?? null}
      availableFields={selectFields.map((f) => ({ fieldname: f.fieldname, label: f.label }))}
      columns={columns}
      rows={rows.map((r) => ({
        name: String(r.name),
        group: r._kanban_group ? String(r._kanban_group) : "(Unset)",
      }))}
    />
  );
}
