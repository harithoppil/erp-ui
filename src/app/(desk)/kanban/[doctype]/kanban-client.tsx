"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Columns } from "lucide-react";

interface KanbanCard {
  name: string;
  group: string;
}

interface AvailableField {
  fieldname: string;
  label: string;
}

interface KanbanClientProps {
  doctype: string;
  groupField: string | null;
  availableFields: AvailableField[];
  columns: string[];
  rows: KanbanCard[];
}

export function KanbanClient({
  doctype,
  groupField,
  availableFields,
  columns,
  rows,
}: KanbanClientProps) {
  const router = useRouter();

  const allColumns = columns.length > 0
    ? columns
    : [...new Set(rows.map((r) => r.group))];

  const byColumn = new Map<string, KanbanCard[]>();
  for (const c of allColumns) byColumn.set(c, []);
  for (const r of rows) {
    if (!byColumn.has(r.group)) byColumn.set(r.group, []);
    byColumn.get(r.group)!.push(r);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/list/${doctype}`} className="text-gray-400 hover:text-gray-600">
            <ArrowLeft size={20} />
          </Link>
          <Columns className="text-gray-500" size={20} />
          <h1 className="text-xl font-semibold text-gray-900">{doctype} Kanban</h1>
          {groupField && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              by {groupField}
            </span>
          )}
        </div>
        {availableFields.length > 1 && (
          <select
            className="rounded-md border bg-white px-3 py-1.5 text-sm"
            value={groupField ?? ""}
            onChange={(e) =>
              router.push(`/kanban/${doctype}?field=${encodeURIComponent(e.target.value)}`)
            }
          >
            {availableFields.map((f) => (
              <option key={f.fieldname} value={f.fieldname}>{f.label}</option>
            ))}
          </select>
        )}
      </div>

      {!groupField ? (
        <div className="rounded-md border border-dashed border-gray-300 p-8 text-center text-gray-500">
          No Select field available to group by
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[...byColumn.entries()].map(([col, cards]) => (
            <div
              key={col}
              className="w-64 flex-shrink-0 rounded-md bg-gray-50 p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-800">{col}</h3>
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-gray-500">
                  {cards.length}
                </span>
              </div>
              <div className="space-y-2">
                {cards.map((c) => (
                  <Link
                    key={c.name}
                    href={`/form/${doctype}/${encodeURIComponent(c.name)}`}
                    className="block rounded-md border bg-white px-3 py-2 text-sm shadow-sm hover:shadow"
                  >
                    {c.name}
                  </Link>
                ))}
                {cards.length === 0 && (
                  <div className="text-center text-xs text-gray-400">Empty</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
