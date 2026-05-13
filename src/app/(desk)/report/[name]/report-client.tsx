"use client";

import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ReportColumn {
  label: string;
  fieldname: string;
  fieldtype: string;
}

interface ReportClientProps {
  name: string;
  reportName: string;
  reportType: string;
  refDoctype: string | null;
  columns: ReportColumn[];
  rows: Record<string, unknown>[];
}

function formatCellValue(value: unknown, fieldtype: string): string {
  if (value === null || value === undefined) return "—";
  if (fieldtype === "Check") return value ? "Yes" : "No";
  if (fieldtype === "Currency" || fieldtype === "Float") {
    const num = Number(value);
    return isNaN(num) ? String(value) : num.toLocaleString();
  }
  if (fieldtype === "Date" && value) {
    return new Date(String(value)).toLocaleDateString();
  }
  if (fieldtype === "Datetime" && value) {
    return new Date(String(value)).toLocaleString();
  }
  return String(value);
}

export function ReportClient({
  name,
  reportName,
  reportType,
  refDoctype,
  columns,
  rows,
}: ReportClientProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-gray-400 hover:text-gray-600">
            <ArrowLeft size={20} />
          </Link>
          <FileText className="text-gray-500" size={20} />
          <h1 className="text-xl font-semibold text-gray-900">{reportName}</h1>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            {reportType}
          </span>
          {refDoctype && (
            <span className="text-xs text-gray-500">on {refDoctype}</span>
          )}
        </div>
        <button className="flex items-center gap-2 rounded-md border bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
          <Download size={14} />
          Export
        </button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((c) => (
                  <TableHead key={c.fieldname}>{c.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length || 1} className="py-8 text-center text-gray-400">
                    No data
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row, i) => (
                  <TableRow key={i}>
                    {columns.map((c) => (
                      <TableCell key={c.fieldname}>
                        {c.fieldname === "name" && refDoctype ? (
                          <Link
                            href={`/form/${refDoctype}/${String(row.name)}`}
                            className="text-blue-600 hover:underline"
                          >
                            {String(row.name)}
                          </Link>
                        ) : (
                          formatCellValue(row[c.fieldname], c.fieldtype)
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <div className="text-right text-xs text-gray-400">Report: {name}</div>
    </div>
  );
}
