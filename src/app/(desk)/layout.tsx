import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { query } from "@/lib/db";
import type { DesktopIcon } from "@/types/erp";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/topbar";
import { SidebarProvider } from "@/components/sidebar-context";

async function getSidebarItems(): Promise<DesktopIcon[]> {
  return query<DesktopIcon>(
    `SELECT name, label, icon_type, link_type, link_to, parent_icon, sidebar, standard, app, icon, hidden, idx
     FROM "tabDesktop Icon"
     WHERE hidden = 0
     ORDER BY parent_icon NULLS FIRST, idx`
  );
}

export default async function DeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const sidebarItems = await getSidebarItems();

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar icons={sidebarItems} />
        <div className="flex flex-1 flex-col overflow-hidden lg:ml-64">
          <TopBar user={session} />
          <main className="flex-1 overflow-y-auto bg-[#f5f5f5] p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
