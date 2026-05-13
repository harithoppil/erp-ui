import { notFound } from "next/navigation";
import { queryOne } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function ReportPage({ params }: PageProps) {
  const { name } = await params;
  const decoded = decodeURIComponent(name).replace(/-/g, " ");

  const report = await queryOne<{ name: string; report_name?: string; report_type?: string }>(
    `SELECT name, report_name, report_type FROM "tabReport" WHERE is_standard = 'Yes' AND name ILIKE $1`,
    [decoded]
  );

  if (!report) notFound();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <FileText size={24} className="text-blue-600" />
        <h1 className="text-xl font-semibold text-gray-900">{report.report_name || report.name}</h1>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">{report.report_type}</span>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Query Report</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Report &quot;{report.name}&quot; will be rendered here.</p>
          <p className="mt-2 text-sm text-gray-400">This view type is not yet fully implemented.</p>
        </CardContent>
      </Card>
    </div>
  );
}
