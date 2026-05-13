import { query, queryOne } from "@/lib/db";
import type { DocType } from "@/types/erp";
import { NextRequest } from "next/server";

interface DeleteBody {
  doctype: string;
  name: string;
}

function tableName(doctype: string): string {
  return `tab${doctype.replace(/\s+/g, "")}`;
}

export async function POST(request: NextRequest) {
  try {
    const { doctype, name } = (await request.json()) as DeleteBody;
    if (!doctype || !name) {
      return Response.json({ error: "Missing doctype or name" }, { status: 400 });
    }

    const dt = await queryOne<DocType>(
      `SELECT name, issingle FROM "tabDocType" WHERE name = $1`,
      [doctype]
    );
    if (!dt) return Response.json({ error: "DocType not found" }, { status: 404 });
    if (dt.issingle) {
      return Response.json({ error: "Cannot delete single doctype" }, { status: 400 });
    }

    await query(`DELETE FROM "${tableName(doctype)}" WHERE name = $1`, [name]);
    return Response.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ error: msg }, { status: 500 });
  }
}
