import { query, queryOne } from "@/lib/db";
import type { DocType, DocField } from "@/types/erp";
import { NextRequest } from "next/server";

interface SaveBody {
  doctype: string;
  name?: string;
  values: Record<string, unknown>;
}

function tableName(doctype: string): string {
  return `tab${doctype.replace(/\s+/g, "")}`;
}

function generateName(doctype: string): string {
  const prefix = doctype.replace(/\s+/g, "-").toUpperCase();
  return `${prefix}-${Date.now()}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SaveBody;
    const { doctype, values } = body;
    let { name } = body;

    if (!doctype) {
      return Response.json({ error: "Missing doctype" }, { status: 400 });
    }

    const docType = await queryOne<DocType>(
      `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
      [doctype]
    );

    if (!docType) {
      return Response.json({ error: "DocType not found" }, { status: 404 });
    }

    const fields = await query<DocField>(
      `SELECT name, parent, label, fieldname, fieldtype, options, hidden, idx, "default", description, depends_on, read_only, reqd, in_list_view, in_standard_filter
       FROM "tabDocField"
       WHERE parent = $1 AND hidden = 0 AND fieldtype NOT IN ('Section Break', 'Column Break', 'Tab Break', 'HTML', 'Button', 'Image', 'Heading')
       ORDER BY idx`,
      [doctype]
    );

    const writable = fields.filter(
      (f) => f.read_only !== 1 && f.fieldtype !== "Table" && f.fieldtype !== "Table MultiSelect"
    );

    if (docType.issingle) {
      for (const f of writable) {
        if (!(f.fieldname in values)) continue;
        const v = values[f.fieldname];
        await query(
          `INSERT INTO "tabSingles" (doctype, field, value) VALUES ($1, $2, $3)
           ON CONFLICT (doctype, field) DO UPDATE SET value = EXCLUDED.value`,
          [doctype, f.fieldname, v == null ? null : String(v)]
        );
      }
      return Response.json({ ok: true, name: doctype, doctype });
    }

    const table = tableName(doctype);
    const isNew = !name;
    if (isNew) {
      name = (values.name as string) || generateName(doctype);
    }

    if (isNew) {
      const cols = ["name", "creation", "modified", "modified_by", "owner", "docstatus", "idx"];
      const placeholders = ["$1", "NOW()", "NOW()", "$2", "$3", "0", "0"];
      const params: unknown[] = [name, "Administrator", "Administrator"];
      let pIdx = 4;

      for (const f of writable) {
        if (!(f.fieldname in values)) continue;
        cols.push(`"${f.fieldname}"`);
        placeholders.push(`$${pIdx}`);
        params.push(values[f.fieldname] == null ? null : values[f.fieldname]);
        pIdx++;
      }

      const sql = `INSERT INTO "${table}" (${cols.join(", ")}) VALUES (${placeholders.join(", ")})`;
      await query(sql, params);
    } else {
      const sets: string[] = [`"modified" = NOW()`, `"modified_by" = $1`];
      const params: unknown[] = ["Administrator"];
      let pIdx = 2;

      for (const f of writable) {
        if (!(f.fieldname in values)) continue;
        sets.push(`"${f.fieldname}" = $${pIdx}`);
        params.push(values[f.fieldname]);
        pIdx++;
      }

      params.push(name);
      const sql = `UPDATE "${table}" SET ${sets.join(", ")} WHERE name = $${pIdx}`;
      await query(sql, params);
    }

    return Response.json({ ok: true, name, doctype });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ error: msg }, { status: 500 });
  }
}
