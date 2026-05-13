"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { DesktopIcon } from "@/types/erp";
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
}

export function Sidebar({ icons }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  const rootIcons = icons.filter((i) => !i.parent_icon);
  const folderChildren: Record<string, DesktopIcon[]> = {};
  for (const icon of icons) {
    if (icon.parent_icon) {
      if (!folderChildren[icon.parent_icon]) folderChildren[icon.parent_icon] = [];
      folderChildren[icon.parent_icon].push(icon);
    }
  }

  function toggleFolder(name: string) {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function navigateTo(linkTo: string | null) {
    if (!linkTo) return;
    router.push(`/workspace/${linkTo.toLowerCase().replace(/\s+/g, "-")}`);
  }

  function isActive(linkTo: string | null): boolean {
    if (!linkTo) return false;
    const slug = linkTo.toLowerCase().replace(/\s+/g, "-");
    return pathname === `/workspace/${slug}`;
  }

  function renderIcon(icon: DesktopIcon) {
    const Icon = getIcon(icon.icon);
    const active = isActive(icon.link_to);
    const isFolder = icon.icon_type === "folder" || !!folderChildren[icon.name];
    const isExpanded = expandedFolders.has(icon.name);

    return (
      <div key={icon.name}>
        <button
          onClick={() => {
            if (isFolder) {
              toggleFolder(icon.name);
            } else {
              navigateTo(icon.link_to);
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
              const childActive = isActive(child.link_to);
              return (
                <button
                  key={child.name}
                  onClick={() => navigateTo(child.link_to)}
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

            {rootIcons.map(renderIcon)}
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
