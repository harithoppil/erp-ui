import { query, queryOne } from "@/lib/db";
import type { DocType, DocField } from "@/types/erp";
import { notFound } from "next/navigation";
import { ReportClient } from "./report-client";

interface PageProps {
  params: Promise<{ name: string }>;
}

interface ReportMeta {
  name: string;
  report_name: string | null;
  ref_doctype: string | null;
  report_type: string | null;
  module: string | null;
  query: string | null;
  json: string | null;
}

function tableName(doctype: string): string {
  return `tab${doctype}`;
}

export default async function ReportPage({ params }: PageProps) {
  const { name: rawName } = await params;
  const name = decodeURIComponent(rawName);

  const report = await queryOne<ReportMeta>(
    `SELECT name, report_name, ref_doctype, report_type, module, "query", "json" FROM "tabReport" WHERE name = $1`,
    [name]
  );

  if (!report) notFound();

  let rows: Record<string, unknown>[] = [];
  let columns: { label: string; fieldname: string; fieldtype: string }[] = [];

  if (report.report_type === "Query Report" && report.query) {
    try {
      rows = await query<Record<string, unknown>>(report.query);
      if (rows.length > 0) {
        columns = Object.keys(rows[0]).map((k) => ({
          label: k.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          fieldname: k,
          fieldtype: "Data",
        }));
      }
    } catch {
      rows = [];
    }
  } else if (report.report_type === "Report Builder" && report.ref_doctype) {
    const docType = await queryOne<DocType>(
      `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
      [report.ref_doctype]
    );
    if (docType) {
      const fields = await query<DocField>(
        `SELECT name, parent, label, fieldname, fieldtype, options, hidden, idx, "default", description, depends_on, read_only, reqd, in_list_view, in_standard_filter
         FROM "tabDocField"
         WHERE parent = $1 AND hidden = 0 AND in_list_view = 1 AND fieldtype NOT IN ('Section Break', 'Column Break', 'Tab Break', 'HTML', 'Button', 'Image', 'Heading', 'Table', 'Table MultiSelect')
         ORDER BY idx`,
        [report.ref_doctype]
      );
      columns = fields.map((f) => ({ label: f.label, fieldname: f.fieldname, fieldtype: f.fieldtype }));

      const table = tableName(report.ref_doctype);
      const cols = columns.length > 0
        ? `name, ${columns.map((c) => `"${c.fieldname}"`).join(", ")}`
        : "name";
      try {
        rows = await query<Record<string, unknown>>(
          `SELECT ${cols} FROM "${table}" ORDER BY creation DESC LIMIT 200`
        );
      } catch {
        rows = [];
      }
      if (columns.length === 0) {
        columns = [{ label: "Name", fieldname: "name", fieldtype: "Data" }];
      } else {
        columns.unshift({ label: "Name", fieldname: "name", fieldtype: "Link" });
      }
    }
  } else {
    columns = [
      { label: "Report Type", fieldname: "report_type", fieldtype: "Data" },
      { label: "Ref Doctype", fieldname: "ref_doctype", fieldtype: "Data" },
      { label: "Module", fieldname: "module", fieldtype: "Data" },
    ];
    rows = [{
      report_type: report.report_type,
      ref_doctype: report.ref_doctype,
      module: report.module,
    }];
  }

  return <ReportClient name={name} reportName={report.report_name ?? name} reportType={report.report_type ?? ""} refDoctype={report.ref_doctype} columns={columns} rows={rows} />;
}
