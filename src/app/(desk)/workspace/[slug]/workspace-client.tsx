"use client";

import Link from "next/link";
import type {
  Workspace,
  WorkspaceShortcut,
  WorkspaceNumberCard,
  WorkspaceChart,
  WorkspaceSidebarItem,
  FiscalYear,
} from "@/types/erp";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";
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

function getIcon(name: string | null | undefined): LucideIcon {
  if (!name) return LayoutGrid;
  return ICON_MAP[name.toLowerCase()] ?? LayoutGrid;
}

interface WorkspaceClientProps {
  workspace: Workspace;
  shortcuts: WorkspaceShortcut[];
  numberCards: WorkspaceNumberCard[];
  charts: WorkspaceChart[];
  sidebarItems: WorkspaceSidebarItem[];
  fiscalYears: FiscalYear[];
}

export function WorkspaceClient({
  workspace,
  shortcuts,
  numberCards,
  charts,
  sidebarItems,
  fiscalYears,
}: WorkspaceClientProps) {
  const sections: { title: string; links: WorkspaceSidebarItem[] }[] = [];
  let currentSection = { title: "", links: [] as WorkspaceSidebarItem[] };

  for (const item of sidebarItems) {
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

  function getLinkHref(item: WorkspaceSidebarItem): string {
    const linkTo = item.link_to ?? "";
    return `/list/${linkTo}`;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">
        {workspace.title}
      </h1>

      {shortcuts.length > 0 && (
        <div className="flex gap-3">
          {shortcuts.map((s) => {
            const Icon = getIcon(s.icon);
            const href = `/list/${s.link_to ?? ""}`;
            return (
              <Link key={s.idx} href={href}>
                <Button variant="outline" className="gap-2">
                  <Icon size={16} />
                  {s.label}
                </Button>
              </Link>
            );
          })}
        </div>
      )}

      {numberCards.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {numberCards.map((card) => (
            <Card key={card.idx}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {card.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {charts.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">
              {charts[0].label}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Start Year
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select start year" />
                  </SelectTrigger>
                  <SelectContent>
                    {fiscalYears.map((fy) => (
                      <SelectItem key={fy.name} value={fy.name}>
                        {fy.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  End Year
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select end year" />
                  </SelectTrigger>
                  <SelectContent>
                    {fiscalYears.map((fy) => (
                      <SelectItem key={fy.name} value={fy.name}>
                        {fy.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <AlertCircle size={16} />
              <span>Start Year and End Year are mandatory</span>
            </div>
            <Skeleton className="h-[260px] w-full" />
          </CardContent>
        </Card>
      )}

      {sections.map((section, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-base">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {section.links.map((link) => (
                <Link
                  key={link.idx}
                  href={getLinkHref(link)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}