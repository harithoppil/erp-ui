import { query, queryOne } from "@/lib/db";
import type { DocType } from "@/types/erp";
import { NextRequest } from "next/server";

function tableName(doctype: string): string {
  return `tab${doctype.replace(/\s+/g, "")}`;
}

interface LinkResult {
  name: string;
  label?: string | null;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const doctype = searchParams.get("doctype");
    const search = (searchParams.get("q") ?? "").trim();
    const limit = Math.min(parseInt(searchParams.get("limit") ?? "10", 10) || 10, 50);

    if (!doctype) {
      return Response.json({ error: "Missing doctype" }, { status: 400 });
    }

    const dt = await queryOne<DocType & { title_field?: string | null; search_fields?: string | null }>(
      `SELECT name, module, istable, is_tree, issingle, icon, title_field, search_fields FROM "tabDocType" WHERE name = $1`,
      [doctype]
    );
    if (!dt) return Response.json({ results: [] });

    const table = tableName(doctype);
    const titleField = dt.title_field?.trim();

    let sql: string;
    let params: unknown[];

    if (search) {
      const like = `%${search}%`;
      if (titleField) {
        sql = `SELECT name, "${titleField}" as label FROM "${table}" WHERE name ILIKE $1 OR "${titleField}" ILIKE $1 ORDER BY name LIMIT ${limit}`;
        params = [like];
      } else {
        sql = `SELECT name FROM "${table}" WHERE name ILIKE $1 ORDER BY name LIMIT ${limit}`;
        params = [like];
      }
    } else {
      if (titleField) {
        sql = `SELECT name, "${titleField}" as label FROM "${table}" ORDER BY modified DESC NULLS LAST LIMIT ${limit}`;
      } else {
        sql = `SELECT name FROM "${table}" ORDER BY modified DESC NULLS LAST LIMIT ${limit}`;
      }
      params = [];
    }

    let results: LinkResult[] = [];
    try {
      results = await query<LinkResult>(sql, params);
    } catch {
      results = [];
    }
    return Response.json({ results });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ error: msg }, { status: 500 });
  }
}
