import { query, queryOne } from "@/lib/db";
import type { DocType, DocField } from "@/types/erp";
import { NextRequest } from "next/server";

function tableName(doctype: string): string {
  return `tab${doctype}`;
}

export async function GET(request: NextRequest) {
  try {
    const sp = request.nextUrl.searchParams;
    const doctype = sp.get("doctype");
    const search = (sp.get("q") ?? "").trim();
    const limit = Math.min(parseInt(sp.get("limit") ?? "50", 10) || 50, 200);
    const offset = Math.max(parseInt(sp.get("offset") ?? "0", 10) || 0, 0);

    if (!doctype) return Response.json({ error: "Missing doctype" }, { status: 400 });

    const dt = await queryOne<DocType>(
      `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
      [doctype]
    );
    if (!dt) return Response.json({ error: "DocType not found" }, { status: 404 });

    const fields = await query<DocField>(
      `SELECT fieldname, label, fieldtype, options, in_list_view
       FROM "tabDocField"
       WHERE parent = $1 AND hidden = 0 AND in_list_view = 1
         AND fieldtype NOT IN ('Section Break', 'Column Break', 'Tab Break', 'HTML', 'Button', 'Image', 'Heading', 'Table', 'Table MultiSelect')
       ORDER BY idx`,
      [doctype]
    );

    const table = tableName(doctype);
    const cols = fields.length > 0
      ? `name, ${fields.map((f) => `"${f.fieldname}"`).join(", ")}`
      : "name";

    const params: unknown[] = [];
    let where = "1=1";
    if (search) {
      params.push(`%${search}%`);
      where = `name ILIKE $${params.length}`;
    }

    let rows: Record<string, unknown>[] = [];
    let total = 0;
    try {
      const countRow = await queryOne<{ count: string }>(
        `SELECT COUNT(*)::text as count FROM "${table}" WHERE ${where}`,
        params
      );
      total = countRow ? parseInt(countRow.count, 10) : 0;

      rows = await query<Record<string, unknown>>(
        `SELECT ${cols} FROM "${table}" WHERE ${where} ORDER BY creation DESC NULLS LAST LIMIT ${limit} OFFSET ${offset}`,
        params
      );
    } catch {
      rows = [];
      total = 0;
    }

    return Response.json({ rows, fields, total });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ error: msg }, { status: 500 });
  }
}
