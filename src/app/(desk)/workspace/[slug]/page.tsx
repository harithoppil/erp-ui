import { query, queryOne } from "@/lib/db";
import type {
  Workspace,
  WorkspaceShortcut,
  WorkspaceNumberCard,
  WorkspaceChart,
  WorkspaceSidebarItem,
  FiscalYear,
  DocType,
} from "@/types/erp";
import { notFound } from "next/navigation";
import { WorkspaceClient } from "@/app/(desk)/workspace/[slug]/workspace-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getWorkspaceBySlug(slug: string): Promise<Workspace | null> {
  const exact = await queryOne<Workspace>(
    `SELECT name, title, module, icon, is_hidden FROM "tabWorkspace" WHERE name = $1`,
    [slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")]
  );
  if (exact) return exact;

  const nameFromSlug = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const byName = await queryOne<Workspace>(
    `SELECT name, title, module, icon, is_hidden FROM "tabWorkspace" WHERE name ILIKE $1`,
    [nameFromSlug]
  );
  return byName;
}

export default async function WorkspacePage({ params }: PageProps) {
  const { slug } = await params;
  const workspace = await getWorkspaceBySlug(slug);

  if (!workspace) notFound();

  const [shortcuts, numberCards, charts, sidebarItems, fiscalYears] =
    await Promise.all([
      query<WorkspaceShortcut>(
        `SELECT idx, type, link_to, label, icon, doc_view FROM "tabWorkspace Shortcut" WHERE parent = $1 ORDER BY idx`,
        [workspace.name]
      ),
      query<WorkspaceNumberCard>(
        `SELECT idx, label, number_card_name FROM "tabWorkspace Number Card" WHERE parent = $1 ORDER BY idx`,
        [workspace.name]
      ),
      query<WorkspaceChart>(
        `SELECT idx, label, chart_name FROM "tabWorkspace Chart" WHERE parent = $1 ORDER BY idx`,
        [workspace.name]
      ),
      query<WorkspaceSidebarItem>(
        `SELECT idx, type, link_to, label, icon FROM "tabWorkspace Sidebar Item" WHERE parent = $1 ORDER BY idx`,
        [workspace.name]
      ),
      query<FiscalYear>(
        `SELECT name, year_start_date, year_end_date FROM "tabFiscal Year" ORDER BY year_start_date DESC`
      ),
    ]);

  const linkTos = new Set<string>();
  for (const s of shortcuts) {
    if (s.link_to) linkTos.add(s.link_to);
  }
  for (const s of sidebarItems) {
    if (s.link_to) linkTos.add(s.link_to);
  }

  const doctypes =
    linkTos.size > 0
      ? await query<DocType>(
          `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = ANY($1)`,
          [Array.from(linkTos)]
        )
      : [];

  const doctypeMap = new Map(doctypes.map((d) => [d.name, d]));

  return (
    <WorkspaceClient
      workspace={workspace}
      shortcuts={shortcuts}
      numberCards={numberCards}
      charts={charts}
      sidebarItems={sidebarItems}
      fiscalYears={fiscalYears}
      doctypeMap={doctypeMap}
    />
  );
}
