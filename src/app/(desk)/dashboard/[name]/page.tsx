import { notFound } from "next/navigation";
import { queryOne } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function DashboardPage({ params }: PageProps) {
  const { name } = await params;
  const decoded = decodeURIComponent(name).replace(/-/g, " ");

  const dashboard = await queryOne<{ name: string; dashboard_name?: string }>(
    `SELECT name, dashboard_name FROM "tabDashboard" WHERE name ILIKE $1`,
    [decoded]
  );

  if (!dashboard) notFound();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <BarChart3 size={24} className="text-blue-600" />
        <h1 className="text-xl font-semibold text-gray-900">{dashboard.dashboard_name || dashboard.name}</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Dashboard View</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Dashboard &quot;{dashboard.name}&quot; content will be rendered here.</p>
          <p className="mt-2 text-sm text-gray-400">This view type is not yet fully implemented.</p>
        </CardContent>
      </Card>
    </div>
  );
}
