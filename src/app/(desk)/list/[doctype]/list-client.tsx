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
import { Plus, ArrowLeft } from "lucide-react";

interface ListClientProps {
  docType: DocType;
  fields: DocField[];
  rows: Record<string, unknown>[];
}

export function ListClient({ docType, fields, rows }: ListClientProps) {
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
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            {rows.length} records
          </span>
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

      {/* Table */}
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
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={fields.length + 1}
                    className="py-8 text-center text-gray-400"
                  >
                    No records found
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row) => (
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
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
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