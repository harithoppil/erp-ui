"use client";

import Link from "next/link";
import { ArrowLeft, BarChart3, PieChart as PieIcon, LineChart, Donut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardChart {
  name: string;
  chart_name: string;
  chart_type: string;
  document_type: string | null;
  type: string;
  color: string | null;
}

interface Widget {
  chart?: DashboardChart;
  width: string;
}

interface DashboardClientProps {
  dashboardName: string;
  widgets: Widget[];
}

function chartIcon(type: string) {
  switch (type) {
    case "Pie": return <PieIcon size={18} />;
    case "Donut": return <Donut size={18} />;
    case "Line": return <LineChart size={18} />;
    case "Bar":
    default: return <BarChart3 size={18} />;
  }
}

export function DashboardClient({ dashboardName, widgets }: DashboardClientProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-gray-400 hover:text-gray-600">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-semibold text-gray-900">{dashboardName}</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {widgets.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center text-gray-400">
              No charts configured for this dashboard
            </CardContent>
          </Card>
        )}
        {widgets.map((w, i) => (
          <Card
            key={`${w.chart?.name}-${i}`}
            className={w.width === "Full" ? "md:col-span-2" : ""}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                {chartIcon(w.chart?.type ?? "Bar")}
                {w.chart?.chart_name}
              </CardTitle>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
                {w.chart?.chart_type}
              </span>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-gray-500">
                Type: {w.chart?.type}
                {w.chart?.document_type && (
                  <span> · on {w.chart.document_type}</span>
                )}
              </div>
              <div
                className="mt-4 rounded-md border-2 border-dashed border-gray-200 p-4 text-center text-xs text-gray-400"
                style={{ minHeight: 160 }}
              >
                Chart rendering — backed by:&nbsp;
                {w.chart?.document_type ?? w.chart?.chart_type}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
