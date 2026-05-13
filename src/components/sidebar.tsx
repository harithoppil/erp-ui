"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { DesktopIcon, WorkspaceSidebarItem } from "@/types/erp";
import type { DesktopRoute } from "@/lib/routes";
import { useSidebarContext } from "@/components/sidebar-context";
import {
  Home,
  DollarSign,
  ShoppingCart,
  Package,
  Factory,
  CheckCircle,
  Wrench,
  Users,
  Globe,
  Mail,
  Zap,
  Printer,
  Database,
  Settings,
  Shield,
  Link2,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
  X,
  LayoutGrid,
  Briefcase,
  Truck,
  HeadphonesIcon,
  FileText,
  BarChart3,
  Building2,
  ReceiptText,
  Table2,
  Repeat2,
  MonitorCheck,
  BookText,
  CircleDollarSign,
  Rocket,
  UserRound,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  home: Home,
  accounting: DollarSign,
  sell: ShoppingCart,
  buying: ShoppingCart,
  stock: Package,
  organization: Building2,
  quality: CheckCircle,
  project: Briefcase,
  crm: Users,
  support: HeadphonesIcon,
  website: Globe,
  email: Mail,
  automation: Zap,
  printing: Printer,
  data: Database,
  users: Users,
  system: Shield,
  integration: Link2,
  setting: Settings,
  assets: Package,
  subcontracting: Truck,
  "erpnext-settings": Settings,
  build: Wrench,
  "receipt-text": ReceiptText,
  table: Table2,
  table_2: Table2,
  repeat: Repeat2,
  "repeat-2": Repeat2,
  "monitor-check": MonitorCheck,
  "book-text": BookText,
  dollar: DollarSign,
  "dollar-sign": DollarSign,
  expenses: CircleDollarSign,
  "getting-started": Rocket,
  "user-round": UserRound,
  file: FileText,
  hammer: Wrench,
};

function getIcon(iconName: string | null | undefined): LucideIcon {
  if (!iconName) return LayoutGrid;
  return ICON_MAP[iconName.toLowerCase()] ?? LayoutGrid;
}

interface SidebarProps {
  icons: DesktopIcon[];
  routes: DesktopRoute[];
}

export function Sidebar({ icons, routes }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [fetchedItems, setFetchedItems] = useState<WorkspaceSidebarItem[]>([]);
  const [fetchedDoctypeMap, setFetchedDoctypeMap] = useState<Record<string, { is_tree: number; issingle: number }>>({});
  const { workspaceItems } = useSidebarContext();

  const isWorkspace = pathname.startsWith("/workspace/");

  // Fetch workspace sidebar items directly when in a workspace
  useEffect(() => {
    if (!isWorkspace) {
      setFetchedItems([]);
      return;
    }
    const slug = pathname.replace("/workspace/", "");
    fetch(`/api/workspace-sidebar?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.items) setFetchedItems(data.items);
        if (data.doctypeMap) setFetchedDoctypeMap(data.doctypeMap);
      })
      .catch(() => {
        setFetchedItems([]);
        setFetchedDoctypeMap({});
      });
  }, [pathname, isWorkspace]);

  const activeWorkspaceItems =
    workspaceItems.length > 0 ? workspaceItems : fetchedItems;
  const activeDoctypeMap = fetchedDoctypeMap;

  // Build route lookup
  const routeMap = new Map(routes.map((r) => [r.name, r]));

  // Build folder tree. Icons with parent_icon that doesn't exist as a root
  // are treated as direct sidebar items (e.g., Assets under missing "ERPNext").
  const rootNames = new Set(icons.filter((i) => !i.parent_icon).map((i) => i.name));
  const folderChildren: Record<string, DesktopIcon[]> = {};
  const orphaned: DesktopIcon[] = [];
  for (const icon of icons) {
    if (icon.parent_icon) {
      if (rootNames.has(icon.parent_icon)) {
        if (!folderChildren[icon.parent_icon]) folderChildren[icon.parent_icon] = [];
        folderChildren[icon.parent_icon].push(icon);
      } else {
        // Parent doesn't exist as a root icon — show directly
        orphaned.push(icon);
      }
    }
  }
  const rootIcons = [
    ...icons.filter((i) => !i.parent_icon),
    ...orphaned,
  ];



  function toggleFolder(name: string) {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function navigateTo(icon: DesktopIcon) {
    const route = routeMap.get(icon.name);
    if (route && route.href !== "#") {
      router.push(route.href);
    }
  }

  function isActive(icon: DesktopIcon): boolean {
    const route = routeMap.get(icon.name);
    if (!route || route.href === "#") return false;
    return pathname === route.href || pathname.startsWith(route.href + "/");
  }

  function renderIcon(icon: DesktopIcon) {
    const Icon = getIcon(icon.icon);
    const active = isActive(icon);
    const isFolder = (icon.icon_type ?? "").toLowerCase() === "folder" || !!folderChildren[icon.name];
    const isExpanded = expandedFolders.has(icon.name);

    return (
      <div key={icon.name}>
        <button
          onClick={() => {
            if (isFolder && !icon.link_to) {
              toggleFolder(icon.name);
            } else {
              navigateTo(icon);
            }
          }}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
            active
              ? "bg-blue-50 text-blue-700 font-medium"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <Icon size={18} />
          <span className="flex-1 truncate">{icon.label}</span>
          {isFolder && (
            isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
          )}
        </button>

        {isFolder && isExpanded && folderChildren[icon.name] && (
          <div className="ml-4 mt-1 space-y-1">
            {folderChildren[icon.name].map((child) => {
              const ChildIcon = getIcon(child.icon);
              const childActive = isActive(child);
              return (
                <button
                  key={child.name}
                  onClick={() => navigateTo(child)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-left text-sm transition-colors ${
                    childActive
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <ChildIcon size={16} />
                  <span className="truncate">{child.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  function renderWorkspaceNav() {
    const sections: { title: string; links: WorkspaceSidebarItem[] }[] = [];
    let currentSection = { title: "", links: [] as WorkspaceSidebarItem[] };

    for (const item of activeWorkspaceItems) {
      if (item.type === "Section Break") {
        if (currentSection.links.length > 0 || currentSection.title) {
          sections.push(currentSection);
        }
        currentSection = { title: item.label, links: [] };
      } else {
        currentSection.links.push(item);
      }
    }
    if (currentSection.links.length > 0 || currentSection.title) {
      sections.push(currentSection);
    }

    return (
      <div className="space-y-4">
        {sections.map((section, i) => (
          <div key={i}>
            {section.title && (
              <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.links.map((link) => {
                const linkTo = link.link_to ?? "";
                const dt = activeDoctypeMap[linkTo];
                let href = `/list/${linkTo}`;
                if (dt) {
                  if (dt.is_tree) href = `/tree/${linkTo}`;
                  else if (dt.issingle) href = `/form/${linkTo}/default`;
                }
                return (
                  <Link
                    key={link.idx}
                    href={href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    <span className="truncate">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 rounded-lg bg-white p-2 shadow-md lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white border-r border-gray-200 transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <LayoutGrid size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">Aries ERP</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            <button
              onClick={() => router.push("/")}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                pathname === "/"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Home size={18} />
              <span>Home</span>
            </button>

            {isWorkspace && activeWorkspaceItems.length > 0
              ? renderWorkspaceNav()
              : rootIcons.map(renderIcon)}
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-100 px-3 py-3">
            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
}
