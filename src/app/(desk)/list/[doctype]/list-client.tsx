"use client";

import Link from "next/link";
import type { DocType, DocField } from "@/types/erp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, ArrowLeft, FileText, AlertCircle } from "lucide-react";

interface ListClientProps {
  docType: DocType;
  fields: DocField[];
  rows: Record<string, unknown>[];
  error: string | null;
}

export function ListClient({ docType, fields, rows, error }: ListClientProps) {
  const hasData = rows.length > 0;
  const isEmpty = rows.length === 0 && !error;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-gray-400 hover:text-gray-600">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">
            {docType.name}
          </h1>
          {!error && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {rows.length} records
            </span>
          )}
        </div>
        {!docType.issingle && (
          <Link href={`/form/${docType.name}/new`}>
            <Button className="gap-2">
              <Plus size={16} />
              Add {docType.name}
            </Button>
          </Link>
        )}
      </div>

      {/* Server Error */}
      {error && (
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="flex items-start gap-3 p-4">
            <AlertCircle size={20} className="mt-0.5 text-amber-600" />
            <div>
              <p className="text-sm font-medium text-amber-800">Server Error</p>
              <p className="text-sm text-amber-700">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {isEmpty && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <FileText size={32} className="text-gray-400" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              You haven&apos;t created a {docType.name} yet
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Create your first {docType.name} to get started
            </p>
            <Link href={`/form/${docType.name}/new`} className="mt-6">
              <Button className="gap-2">
                <Plus size={16} />
                Create your first {docType.name}
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Data Table */}
      {hasData && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Name</TableHead>
                  {fields.map((field) => (
                    <TableHead key={field.fieldname}>{field.label}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={String(row.name)}>
                    <TableCell>
                      <Link
                        href={`/form/${docType.name}/${String(row.name)}`}
                        className="text-blue-600 hover:underline"
                      >
                        {String(row.name)}
                      </Link>
                    </TableCell>
                    {fields.map((field) => (
                      <TableCell key={field.fieldname}>
                        {formatCellValue(row[field.fieldname], field.fieldtype)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function formatCellValue(
  value: unknown,
  fieldtype: string
): string {
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
