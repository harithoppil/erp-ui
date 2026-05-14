import { query, queryOne } from "@/lib/db";
import type { DocType } from "@/types/erp";
import { notFound } from "next/navigation";
import { CalendarClient } from "./calendar-client";

interface PageProps {
  params: Promise<{ doctype: string }>;
}

interface CalendarView {
  name: string;
  reference_doctype: string;
  subject_field: string | null;
  start_date_field: string | null;
  end_date_field: string | null;
}

function tableName(doctype: string): string {
  return `tab${doctype}`;
}

export default async function CalendarPage({ params }: PageProps) {
  const { doctype: raw } = await params;
  const doctype = decodeURIComponent(raw);

  const docType = await queryOne<DocType>(
    `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
    [doctype]
  );
  if (!docType) notFound();

  const view = await queryOne<CalendarView>(
    `SELECT name, reference_doctype, subject_field, start_date_field, end_date_field
     FROM "tabCalendar View" WHERE reference_doctype = $1 LIMIT 1`,
    [doctype]
  );

  const subjectField = view?.subject_field ?? "name";
  const startField = view?.start_date_field ?? "creation";
  const endField = view?.end_date_field ?? view?.start_date_field ?? "creation";

  const table = tableName(doctype);
  let events: { name: string; subject: string; start: string; end: string }[] = [];
  try {
    const rows = await query<Record<string, unknown>>(
      `SELECT name, "${subjectField}" as subject, "${startField}" as start_date, "${endField}" as end_date
       FROM "${table}"
       WHERE "${startField}" IS NOT NULL
       ORDER BY "${startField}" DESC NULLS LAST
       LIMIT 200`
    );
    events = rows.map((r) => ({
      name: String(r.name),
      subject: r.subject ? String(r.subject) : String(r.name),
      start: r.start_date ? String(r.start_date) : "",
      end: r.end_date ? String(r.end_date) : "",
    }));
  } catch {
    events = [];
  }

  return (
    <CalendarClient
      doctype={doctype}
      events={events}
      hasConfig={Boolean(view)}
    />
  );
}
