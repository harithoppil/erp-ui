"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type {
  Workspace,
  WorkspaceShortcut,
  WorkspaceNumberCard,
  WorkspaceChart,
  WorkspaceSidebarItem,
  WorkspaceLink,
  WorkspaceWidget,
  FiscalYear,
  DocType,
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
import { useSidebarContext } from "@/components/sidebar-context";
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
  links: WorkspaceLink[];
  fiscalYears: FiscalYear[];
  widgets: WorkspaceWidget[];
  doctypeMap: Map<string, DocType>;
}

interface NumberCardData {
  value: number;
  label: string;
}

interface ChartData {
  labels: string[];
  datasets: { name: string; values: number[] }[];
}

function formatCurrency(value: number): string {
  const absValue = Math.abs(value);
  if (absValue >= 10000000) {
    return `₹ ${(value / 10000000).toFixed(2)} Cr`;
  }
  if (absValue >= 100000) {
    return `₹ ${(value / 100000).toFixed(2)} L`;
  }
  if (absValue >= 1000) {
    return `₹ ${(value / 1000).toFixed(2)} K`;
  }
  return `₹ ${value.toFixed(2)}`;
}

function SimpleBarChart({ data }: { data: ChartData }) {
  const values = data.datasets[0]?.values ?? [];
  const max = Math.max(...values, 1);

  return (
    <div className="flex items-end gap-6 h-[220px] pt-6 px-4">
      {data.labels.map((label, i) => {
        const value = values[i] ?? 0;
        const height = max > 0 ? (value / max) * 100 : 0;
        return (
          <div key={label} className="flex flex-col items-center gap-2 flex-1">
            <div className="text-sm font-semibold text-gray-700">
              {formatCurrency(value)}
            </div>
            <div className="w-full max-w-[100px] flex items-end">
              <div
                className="w-full bg-blue-500 rounded-t transition-all duration-500"
                style={{ height: `${height * 1.5}px` }}
              />
            </div>
            <div className="text-sm text-gray-600 font-medium">{label}</div>
          </div>
        );
      })}
    </div>
  );
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function WorkspaceClient({
  workspace,
  shortcuts,
  numberCards,
  charts,
  sidebarItems,
  links,
  fiscalYears,
  widgets,
  doctypeMap,
}: WorkspaceClientProps) {
  const { setWorkspaceItems } = useSidebarContext();
  const [cardData, setCardData] = useState<Record<string, NumberCardData>>({});
  const [cardsLoading, setCardsLoading] = useState(false);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [chartLoading, setChartLoading] = useState(false);
  const [startYear, setStartYear] = useState("2025-2026");
  const [endYear, setEndYear] = useState("2025-2026");

  useEffect(() => {
    setWorkspaceItems(sidebarItems);
    return () => setWorkspaceItems([]);
  }, [sidebarItems, setWorkspaceItems]);

  useEffect(() => {
    async function fetchCards() {
      if (numberCards.length === 0) return;
      setCardsLoading(true);
      const results: Record<string, NumberCardData> = {};
      await Promise.all(
        numberCards.map(async (card) => {
          try {
            const res = await fetch("/api/number-card", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name: card.number_card_name }),
            });
            if (res.ok) {
              const data = await res.json();
              results[card.number_card_name] = data;
            }
          } catch (e) {
            console.error("Failed to fetch number card:", e);
          }
        })
      );
      setCardData(results);
      setCardsLoading(false);
    }
    fetchCards();
  }, [numberCards]);

  useEffect(() => {
    async function fetchChart() {
      if (charts.length === 0) return;
      setChartLoading(true);
      try {
        const res = await fetch("/api/pl-chart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: "Aries Marine",
            fromYear: startYear,
            toYear: endYear,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          setChartData(data);
        }
      } catch (e) {
        console.error("Failed to fetch chart:", e);
      } finally {
        setChartLoading(false);
      }
    }
    fetchChart();
  }, [charts, startYear, endYear]);

  function getShortcutHref(linkTo: string | null): string {
    if (!linkTo) return "#";
    const dt = doctypeMap.get(linkTo);
    if (!dt) return `/list/${linkTo}`;
    if (dt.is_tree) return `/tree/${linkTo}`;
    if (dt.issingle) return `/form/${linkTo}/default`;
    return `/list/${linkTo}`;
  }

  const showYearAlert = !startYear || !endYear;

  // Build card sections map from links
  const cardSectionsMap = new Map<string, WorkspaceLink[]>();
  let currentTitle = "";
  for (const link of links) {
    if (link.type === "Card Break") {
      currentTitle = link.label;
      cardSectionsMap.set(currentTitle, []);
    } else if (link.type === "Link" && currentTitle) {
      const section = cardSectionsMap.get(currentTitle);
      if (section) section.push(link);
    }
  }

  // Group consecutive widgets of the same type for layout
  const widgetGroups: { type: string; widgets: WorkspaceWidget[] }[] = [];
  for (const widget of widgets) {
    const last = widgetGroups[widgetGroups.length - 1];
    if (last && last.type === widget.type) {
      last.widgets.push(widget);
    } else {
      widgetGroups.push({ type: widget.type, widgets: [widget] });
    }
  }

  function renderWidgetGroup(group: { type: string; widgets: WorkspaceWidget[] }, groupIdx: number) {
    switch (group.type) {
      case "chart": {
        const chartWidget = group.widgets[0];
        const chartName = chartWidget.data?.chart_name as string;
        const chart = charts.find((c) => c.chart_name === chartName);
        if (!chart) return null;
        return (
          <Card key={`chart-${groupIdx}`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base">{chart.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Start Year
                  </label>
                  <Select value={startYear} onValueChange={(v) => v && setStartYear(v)}>
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
                  <Select value={endYear} onValueChange={(v) => v && setEndYear(v)}>
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
              {showYearAlert && (
                <div className="flex items-center gap-2 rounded-md bg-amber-50 px-4 py-3 text-sm text-amber-800">
                  <AlertCircle size={16} />
                  <span>Start Year and End Year are mandatory</span>
                </div>
              )}
              {chartLoading || !chartData ? (
                <Skeleton className="h-[260px] w-full" />
              ) : (
                <SimpleBarChart data={chartData} />
              )}
            </CardContent>
          </Card>
        );
      }

      case "number_card": {
        const cardNames = group.widgets.map((w) => w.data?.number_card_name as string);
        const cards = numberCards.filter(
          (nc) => cardNames.includes(nc.number_card_name) || cardNames.includes(nc.label)
        );
        if (cards.length === 0) return null;
        return (
          <div key={`nc-${groupIdx}`} className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {cards.map((card) => {
              const data = cardData[card.number_card_name];
              return (
                <Card key={card.idx}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      {card.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {cardsLoading || !data ? (
                      <Skeleton className="h-8 w-24" />
                    ) : (
                      <div className="text-2xl font-bold text-gray-900">
                        {formatCurrency(data.value)}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );
      }

      case "header": {
        const text = group.widgets[0].data?.text as string;
        if (!text) return null;
        return (
          <h2 key={`header-${groupIdx}`} className="text-xl font-semibold text-gray-900 pt-2">
            {stripHtml(text)}
          </h2>
        );
      }

      case "card": {
        return (
          <div key={`cards-${groupIdx}`} className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.widgets.map((w, i) => {
              const cardName = w.data?.card_name as string;
              const sectionLinks = cardSectionsMap.get(cardName);
              if (!sectionLinks || sectionLinks.length === 0) return null;
              return (
                <Card key={`card-${groupIdx}-${i}`}>
                  <CardHeader>
                    <CardTitle className="text-base">{cardName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {sectionLinks.map((link) => {
                        const href = link.link_type === "Report"
                          ? `/report/${link.link_to}`
                          : getShortcutHref(link.link_to);
                        return (
                          <Link
                            key={link.idx}
                            href={href}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                          >
                            <span>{link.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        );
      }

      default:
        return null;
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">
        {workspace.title}
      </h1>

      {shortcuts.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {shortcuts.map((s) => {
            const Icon = getIcon(s.icon);
            const href = getShortcutHref(s.link_to);
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

      {widgets.length > 0
        ? widgetGroups.map((group, i) => renderWidgetGroup(group, i))
        : (
          <>
            {numberCards.length > 0 && (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {numberCards.map((card) => {
                  const data = cardData[card.number_card_name];
                  return (
                    <Card key={card.idx}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">
                          {card.label}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {cardsLoading || !data ? (
                          <Skeleton className="h-8 w-24" />
                        ) : (
                          <div className="text-2xl font-bold text-gray-900">
                            {formatCurrency(data.value)}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
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
                      <Select value={startYear} onValueChange={(v) => v && setStartYear(v)}>
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
                      <Select value={endYear} onValueChange={(v) => v && setEndYear(v)}>
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
                  {showYearAlert && (
                    <div className="flex items-center gap-2 rounded-md bg-amber-50 px-4 py-3 text-sm text-amber-800">
                      <AlertCircle size={16} />
                      <span>Start Year and End Year are mandatory</span>
                    </div>
                  )}
                  {chartLoading || !chartData ? (
                    <Skeleton className="h-[260px] w-full" />
                  ) : (
                    <SimpleBarChart data={chartData} />
                  )}
                </CardContent>
              </Card>
            )}

            {(() => {
              const cardSections: { title: string; links: WorkspaceLink[] }[] = [];
              let currentCard: { title: string; links: WorkspaceLink[] } | null = null;
              for (const link of links) {
                if (link.type === "Card Break") {
                  if (currentCard && currentCard.links.length > 0) {
                    cardSections.push(currentCard);
                  }
                  currentCard = { title: link.label, links: [] };
                } else if (currentCard && link.type === "Link") {
                  currentCard.links.push(link);
                }
              }
              if (currentCard && currentCard.links.length > 0) {
                cardSections.push(currentCard);
              }

              return cardSections.map((card, i) => (
                <Card key={`card-${i}`}>
                  <CardHeader>
                    <CardTitle className="text-base">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                      {card.links.map((link) => {
                        const href = link.link_type === "Report"
                          ? `/report/${link.link_to}`
                          : getShortcutHref(link.link_to);
                        return (
                          <Link
                            key={link.idx}
                            href={href}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                          >
                            <span>{link.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ));
            })()}
          </>
        )}
    </div>
  );
}
