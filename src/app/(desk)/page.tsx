import { query } from "@/lib/db";
import type { DesktopIcon, Workspace } from "@/types/erp";
import { HomeGrid } from "@/app/(desk)/home-grid";

async function getWorkspaces(): Promise<Workspace[]> {
  return query<Workspace>(
    `SELECT name, title, module, icon, is_hidden FROM "tabWorkspace" WHERE is_hidden = 0 ORDER BY title`
  );
}

async function getDirectIcons(): Promise<DesktopIcon[]> {
  return query<DesktopIcon>(
    `SELECT name, label, icon_type, link_type, link_to, parent_icon, sidebar, standard, app, icon, hidden, idx
     FROM "tabDesktop Icon"
     WHERE hidden = 0 AND parent_icon IS NULL
     ORDER BY idx`
  );
}

export default async function DeskHome() {
  const [workspaces, directIcons] = await Promise.all([
    getWorkspaces(),
    getDirectIcons(),
  ]);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {greeting}, Administrator
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome to your ERP workspace
        </p>
      </div>

      <HomeGrid icons={directIcons} workspaces={workspaces} />
    </div>
  );
}
