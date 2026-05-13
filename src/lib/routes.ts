import { query } from "@/lib/db";

export interface DesktopRoute {
  name: string;
  label: string;
  href: string;
  type: "workspace" | "dashboard" | "report" | "list" | "form" | "tree" | "unknown";
  parent?: string;
}

export async function resolveDesktopRoutes(): Promise<DesktopRoute[]> {
  // Load all desktop icons
  const icons = await query<{
    name: string;
    label: string;
    link_to: string | null;
    parent_icon: string | null;
    icon: string | null;
  }>(
    `SELECT name, label, link_to, parent_icon, icon
     FROM "tabDesktop Icon"
     WHERE hidden = 0
     ORDER BY parent_icon NULLS FIRST, idx`
  );

  // Collect all link_to values that might need resolving
  const linkTos = new Set<string>();
  for (const icon of icons) {
    if (icon.link_to) linkTos.add(icon.link_to);
  }

  // Batch check which link_to exists where
  const [workspaces, dashboards, reports, doctypes] = await Promise.all([
    query<{ name: string }>(
      `SELECT name FROM "tabWorkspace" WHERE name = ANY($1)`,
      [Array.from(linkTos)]
    ).catch(() => [] as { name: string }[]),
    query<{ name: string }>(
      `SELECT name FROM "tabDashboard" WHERE name = ANY($1)`,
      [Array.from(linkTos)]
    ).catch(() => [] as { name: string }[]),
    query<{ name: string }>(
      `SELECT name FROM "tabReport" WHERE is_standard = 'Yes' AND name = ANY($1)`,
      [Array.from(linkTos)]
    ).catch(() => [] as { name: string }[]),
    query<{ name: string; is_tree: number; issingle: number }>(
      `SELECT name, is_tree, issingle FROM "tabDocType" WHERE name = ANY($1)`,
      [Array.from(linkTos)]
    ).catch(() => [] as { name: string; is_tree: number; issingle: number }[]),
  ]);

  const workspaceSet = new Set(workspaces.map((w) => w.name));
  const dashboardSet = new Set(dashboards.map((d) => d.name));
  const reportSet = new Set(reports.map((r) => r.name));
  const doctypeMap = new Map(doctypes.map((d) => [d.name, d]));

  const routes: DesktopRoute[] = [];

  for (const icon of icons) {
    const linkTo = icon.link_to;
    let href = "#";
    let type: DesktopRoute["type"] = "unknown";

    if (!linkTo) {
      // Folder — no route
      href = "#";
      type = "unknown";
    } else if (workspaceSet.has(linkTo)) {
      href = `/workspace/${slugify(linkTo)}`;
      type = "workspace";
    } else if (dashboardSet.has(linkTo)) {
      href = `/dashboard/${slugify(linkTo)}`;
      type = "dashboard";
    } else if (reportSet.has(linkTo)) {
      href = `/report/${slugify(linkTo)}`;
      type = "report";
    } else {
      const dt = doctypeMap.get(linkTo);
      if (dt) {
        if (dt.is_tree) {
          href = `/tree/${linkTo}`;
          type = "tree";
        } else if (dt.issingle) {
          href = `/form/${linkTo}/default`;
          type = "form";
        } else {
          href = `/list/${linkTo}`;
          type = "list";
        }
      } else {
        // Fallback: try workspace slug anyway
        href = `/workspace/${slugify(linkTo)}`;
        type = "workspace";
      }
    }

    routes.push({
      name: icon.name,
      label: icon.label,
      href,
      type,
      parent: icon.parent_icon || undefined,
    });
  }

  return routes;
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
