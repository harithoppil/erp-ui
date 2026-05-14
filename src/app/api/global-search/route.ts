import { query } from "@/lib/db";
import { NextRequest } from "next/server";

interface GlobalSearchResult {
  doctype: string;
  name: string;
  content?: string | null;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = (searchParams.get("q") ?? "").trim();

    if (!q) return Response.json({ results: [] });

    const limit = Math.min(parseInt(searchParams.get("limit") ?? "20", 10) || 20, 50);

    let results: GlobalSearchResult[] = [];
    try {
      results = await query<GlobalSearchResult>(
        `SELECT doctype, name, content FROM "__global_search" WHERE content ILIKE $1 ORDER BY published DESC LIMIT ${limit}`,
        [`%${q}%`]
      );
    } catch {
      results = [];
    }

    if (results.length === 0) {
      const doctypes = await query<{ name: string }>(
        `SELECT name FROM "tabDocType" WHERE name ILIKE $1 AND istable = 0 ORDER BY name LIMIT ${limit}`,
        [`%${q}%`]
      );
      results = doctypes.map((d) => ({ doctype: "DocType", name: d.name, content: null }));
    }

    return Response.json({ results });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ error: msg }, { status: 500 });
  }
}
