import { query, queryOne } from "@/lib/db";
import type { WorkspaceSidebarItem, DocType } from "@/types/erp";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json({ error: "Missing slug" }, { status: 400 });
  }

  const nameFromSlug = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const workspace = await queryOne<{ name: string }>(
    `SELECT name FROM "tabWorkspace" WHERE name ILIKE $1`,
    [nameFromSlug]
  );

  if (!workspace) {
    return Response.json({ error: "Workspace not found" }, { status: 404 });
  }

  const items = await query<WorkspaceSidebarItem>(
    `SELECT idx, type, link_to, label, icon FROM "tabWorkspace Sidebar Item" WHERE parent = $1 ORDER BY idx`,
    [workspace.name]
  );

  const linkTos = Array.from(new Set(items.map((i) => i.link_to).filter(Boolean)));
  const doctypes = linkTos.length > 0
    ? await query<Pick<DocType, "name" | "is_tree" | "issingle">>(
        `SELECT name, is_tree, issingle FROM "tabDocType" WHERE name = ANY($1)`,
        [linkTos]
      )
    : [];

  const doctypeMap = Object.fromEntries(doctypes.map((d) => [d.name, d]));

  return Response.json({ items, doctypeMap });
}
