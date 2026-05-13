"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { DocType } from "@/types/erp";
import type { FormField, FormTab } from "@/types/form";
import { LinkAutocomplete } from "@/components/link-autocomplete";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ArrowLeft, Save, Loader2 } from "lucide-react";

interface ChildTableData {
  rows: Record<string, unknown>[];
  fields: { fieldname: string; label: string; fieldtype: string }[];
  options: string;
}

interface FormClientProps {
  docType: DocType;
  tabs: FormTab[];
  docData: Record<string, unknown>;
  isNew: boolean;
  docName: string;
  childTables: Record<string, ChildTableData>;
}

export function FormClient({
  docType,
  tabs,
  docData,
  isNew,
  docName,
  childTables,
}: FormClientProps) {
  const router = useRouter();
  const [values, setValues] = useState<Record<string, unknown>>(docData);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateValue(fieldname: string, value: unknown) {
    setValues((prev) => ({ ...prev, [fieldname]: value }));
  }

  async function handleSave() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/doc/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          doctype: docType.name,
          name: isNew ? undefined : docName,
          values,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Save failed");
      } else if (isNew && data.name) {
        router.push(`/form/${docType.name}/${encodeURIComponent(data.name)}`);
      } else {
        router.refresh();
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  // Group fields within each tab by section
  function groupBySection(fields: FormField[]) {
    const groups: { section: string; fields: FormField[] }[] = [];
    let currentSection = "";

    for (const field of fields) {
      if (field.section && field.section !== currentSection) {
        currentSection = field.section;
        groups.push({ section: currentSection, fields: [field] });
      } else if (groups.length > 0 && field.section === currentSection) {
        groups[groups.length - 1].fields.push(field);
      } else {
        groups.push({ section: "", fields: [field] });
      }
    }
    return groups;
  }

  function renderField(field: FormField) {
    const val = values[field.fieldname];
    const isReadOnly = field.read_only === 1;

    switch (field.fieldtype) {
      case "Data":
      case "Int":
      case "Float":
      case "Currency":
        return (
          <Input
            id={field.fieldname}
            type={
              field.fieldtype === "Int"
                ? "number"
                : field.fieldtype === "Float" || field.fieldtype === "Currency"
                  ? "number"
                  : "text"
            }
            value={val != null ? String(val) : ""}
            placeholder={field.description ?? ""}
            disabled={isReadOnly}
            onChange={(e) => updateValue(field.fieldname, e.target.value)}
          />
        );

      case "Date":
        return (
          <Input
            id={field.fieldname}
            type="date"
            value={val ? String(val) : ""}
            disabled={isReadOnly}
            onChange={(e) => updateValue(field.fieldname, e.target.value)}
          />
        );

      case "Datetime":
        return (
          <Input
            id={field.fieldname}
            type="datetime-local"
            value={val ? String(val).slice(0, 16) : ""}
            disabled={isReadOnly}
            onChange={(e) => updateValue(field.fieldname, e.target.value)}
          />
        );

      case "Select":
        const options = field.options
          ? field.options.split("\n").filter(Boolean)
          : [];
        return (
          <Select
            value={val ? String(val) : ""}
            onValueChange={(v) => updateValue(field.fieldname, v)}
            disabled={isReadOnly}
          >
            <SelectTrigger id={field.fieldname}>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "Link":
        return (
          <LinkAutocomplete
            id={field.fieldname}
            doctype={field.options ?? ""}
            value={val != null ? String(val) : ""}
            onChange={(v) => updateValue(field.fieldname, v)}
            disabled={isReadOnly}
            placeholder={`Search ${field.options ?? ""}...`}
          />
        );

      case "Check":
        return (
          <Checkbox
            id={field.fieldname}
            checked={val === 1 || val === true || val === "1"}
            onCheckedChange={(checked) =>
              updateValue(field.fieldname, checked ? 1 : 0)
            }
            disabled={isReadOnly}
          />
        );

      case "Small Text":
      case "Text":
      case "Long Text":
        return (
          <Textarea
            id={field.fieldname}
            value={val ? String(val) : ""}
            placeholder={field.description ?? ""}
            rows={field.fieldtype === "Long Text" ? 6 : 3}
            disabled={isReadOnly}
            onChange={(e) => updateValue(field.fieldname, e.target.value)}
          />
        );

      case "Text Editor":
        return (
          <Textarea
            id={field.fieldname}
            value={val ? String(val) : ""}
            rows={8}
            disabled={isReadOnly}
            onChange={(e) => updateValue(field.fieldname, e.target.value)}
          />
        );

      case "Table":
      case "Table MultiSelect": {
        const child = childTables[field.fieldname];
        if (!child) {
          return (
            <div className="rounded-md border border-dashed border-gray-200 p-3 text-xs text-gray-400">
              {field.options ? `No child rows in ${field.options}` : "—"}
            </div>
          );
        }
        return (
          <div className="col-span-full overflow-x-auto rounded-md border">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">#</th>
                  {child.fields.map((f) => (
                    <th key={f.fieldname} className="px-3 py-2 text-left text-xs font-medium text-gray-600">
                      {f.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {child.rows.length === 0 ? (
                  <tr>
                    <td colSpan={child.fields.length + 1} className="px-3 py-3 text-center text-xs text-gray-400">
                      No rows
                    </td>
                  </tr>
                ) : (
                  child.rows.map((row, i) => (
                    <tr key={String(row.name)} className="border-t">
                      <td className="px-3 py-2 text-xs text-gray-500">{i + 1}</td>
                      {child.fields.map((f) => (
                        <td key={f.fieldname} className="px-3 py-2 text-xs">
                          {formatCellValue(row[f.fieldname], f.fieldtype)}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        );
      }

      default:
        // Fallback: show as text input
        return (
          <Input
            id={field.fieldname}
            type="text"
            value={val != null ? String(val) : ""}
            disabled={isReadOnly}
            onChange={(e) => updateValue(field.fieldname, e.target.value)}
          />
        );
    }
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

  const displayTitle = isNew
    ? `New ${docType.name}`
    : `${docType.name}: ${docName}`;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={`/list/${docType.name}`}
            className="text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">
            {displayTitle}
          </h1>
        </div>
        <Button className="gap-2" disabled={saving} onClick={handleSave}>
          {saving ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Save size={16} />
          )}
          {saving ? "Saving..." : "Save"}
        </Button>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Form with tabs */}
      {tabs.length > 1 ? (
        <Tabs defaultValue={tabs[0].label.toLowerCase()}>
          <TabsList className="bg-gray-100 rounded-xl p-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.label.toLowerCase()}
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent
              key={tab.label}
              value={tab.label.toLowerCase()}
              className="mt-0"
            >
              <Card>
                <CardContent className="p-6">
                  {renderTabFields(tab.fields)}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <Card>
          <CardContent className="p-6">
            {renderTabFields(tabs[0]?.fields ?? [])}
          </CardContent>
        </Card>
      )}
    </div>
  );

  function renderTabFields(fields: FormField[]) {
    const groups = groupBySection(fields);

    return (
      <div className="space-y-6">
        {groups.map((group, gi) => (
          <div key={gi}>
            {group.section && (
              <h3 className="mb-3 text-sm font-semibold text-gray-800">
                {group.section}
              </h3>
            )}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {group.fields.map((field) => (
                <div key={field.fieldname} className="space-y-1">
                  <Label htmlFor={field.fieldname}>
                    {field.label}
                    {field.reqd === 1 && (
                      <span className="text-red-500"> *</span>
                    )}
                  </Label>
                  {renderField(field)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}