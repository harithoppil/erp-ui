"use client";

import Link from "next/link";
import type { DesktopIcon, Workspace } from "@/types/erp";
import type { DesktopRoute } from "@/lib/routes";
import {
  Home,
  DollarSign,
  ShoppingCart,
  Package,
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
  Briefcase,
  Truck,
  HeadphonesIcon,
  Building2,
  LayoutGrid,
  ReceiptText,
  Table2,
  Repeat2,
  MonitorCheck,
  BookText,
  CircleDollarSign,
  Rocket,
  UserRound,
  FileText,
  BarChart3,
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
  "bar-chart-3": BarChart3,
};

const MODULE_COLORS: Record<string, string> = {
  Accounts: "#e74c3c",
  Buying: "#f39c12",
  Selling: "#2ecc71",
  Stock: "#3498db",
  Manufacturing: "#9b59b6",
  Projects: "#1abc9c",
  CRM: "#e67e22",
  "Quality Management": "#16a085",
  Support: "#34495e",
  Assets: "#8e44ad",
  Subcontracting: "#d35400",
  Setup: "#7f8c8d",
  Core: "#2c3e50",
  Website: "#27ae60",
  Integrations: "#2980b9",
};

function getIcon(name: string | null | undefined): LucideIcon {
  if (!name) return LayoutGrid;
  return ICON_MAP[name.toLowerCase()] ?? LayoutGrid;
}

interface HomeGridProps {
  icons: DesktopIcon[];
  workspaces: Workspace[];
  routes: DesktopRoute[];
}

export function HomeGrid({ icons, workspaces, routes }: HomeGridProps) {
  const workspaceMap = new Map(workspaces.map((w) => [w.name, w]));
  const routeMap = new Map(routes.map((r) => [r.name, r]));

  // Show all icons that have a valid route (not folders with no link)
  const visibleIcons = icons.filter((icon) => {
    const route = routeMap.get(icon.name);
    return route && route.href !== "#";
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {visibleIcons.map((icon) => {
        const Icon = getIcon(icon.icon);
        const route = routeMap.get(icon.name);
        const linkTo = icon.link_to ?? icon.name;
        const ws = workspaceMap.get(linkTo);
        const color = ws ? MODULE_COLORS[ws.module] ?? "#7f8c8d" : "#7f8c8d";
        const href = route?.href ?? "#";

        return (
          <Link
            key={icon.name}
            href={href}
            className="group flex flex-col items-center gap-3 rounded-lg border bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon size={24} style={{ color }} />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {icon.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
