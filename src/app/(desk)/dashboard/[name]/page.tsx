import { query, queryOne } from "@/lib/db";
import { notFound } from "next/navigation";
import { DashboardClient } from "./dashboard-client";

interface PageProps {
  params: Promise<{ name: string }>;
}

interface Dashboard {
  name: string;
  module: string | null;
  dashboard_name: string;
}

interface DashboardChartLink {
  chart: string;
  width: string;
  idx: number;
}

interface DashboardChart {
  name: string;
  chart_name: string;
  chart_type: string;
  document_type: string | null;
  type: string;
  color: string | null;
  group_by_type: string | null;
  group_by_based_on: string | null;
  value_based_on: string | null;
  aggregate_function_based_on: string | null;
  number_of_groups: number;
  filters_json: string | null;
}

export default async function DashboardPage({ params }: PageProps) {
  const { name: raw } = await params;
  const name = decodeURIComponent(raw);

  const dashboard = await queryOne<Dashboard>(
    `SELECT name, module, dashboard_name FROM "tabDashboard" WHERE name = $1`,
    [name]
  );

  if (!dashboard) notFound();

  const links = await query<DashboardChartLink>(
    `SELECT chart, width, idx FROM "tabDashboard Chart Link" WHERE parent = $1 ORDER BY idx`,
    [dashboard.name]
  );

  const chartNames = links.map((l) => l.chart).filter(Boolean);
  const charts = chartNames.length > 0
    ? await query<DashboardChart>(
        `SELECT name, chart_name, chart_type, document_type, type, color, group_by_type, group_by_based_on, value_based_on, aggregate_function_based_on, number_of_groups, filters_json
         FROM "tabDashboard Chart" WHERE name = ANY($1)`,
        [chartNames]
      )
    : [];

  const chartMap = new Map(charts.map((c) => [c.name, c]));

  const widgets = links.map((l) => ({
    chart: chartMap.get(l.chart),
    width: l.width,
  })).filter((w) => w.chart);

  return <DashboardClient dashboardName={dashboard.dashboard_name} widgets={widgets} />;
}
