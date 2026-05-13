import { query, queryOne } from "@/lib/db";
import type { DocType, DocField } from "@/types/erp";
import type { FormTab, FormField } from "@/types/form";
import { notFound } from "next/navigation";
import { FormClient } from "./form-client";

interface PageProps {
  params: Promise<{ doctype: string; id: string }>;
}

export default async function FormPage({ params }: PageProps) {
  const { doctype, id } = await params;

  const docType = await queryOne<DocType>(
    `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
    [doctype]
  );

  if (!docType) notFound();

  // Get all visible fields — include Section Break and Column Break for layout
  const fields = await query<DocField>(
    `SELECT name, parent, label, fieldname, fieldtype, options, mandatory, hidden, idx, default_value, description, depends_on, read_only, reqd, in_list_view, in_standard_filter
     FROM "tabDocField"
     WHERE parent = $1 AND hidden = 0 AND fieldtype NOT IN ('HTML', 'Button', 'Image', 'Color', 'Heading', 'Attach', 'Attach Image', 'Signature', 'Geolocation')
     ORDER BY idx`,
    [doctype]
  );

  // Group fields by tabs (Tab Break) and sections (Section Break)
  const tabs: FormTab[] = [];
  let currentTab: FormTab = { label: "General", fields: [] };
  let currentSection = "";

  for (const field of fields) {
    if (field.fieldtype === "Tab Break") {
      if (currentTab.fields.length > 0) {
        tabs.push(currentTab);
      }
      currentTab = { label: field.label, fields: [] };
      currentSection = "";
    } else if (field.fieldtype === "Section Break") {
      currentSection = field.label;
    } else if (field.fieldtype === "Column Break") {
      // Column breaks are handled by the grid layout, skip
      continue;
    } else {
      currentTab.fields.push({ ...field, section: currentSection });
    }
  }
  if (currentTab.fields.length > 0) {
    tabs.push(currentTab);
  }

  // If no tabs, just one tab with all fields
  if (tabs.length === 0) {
    tabs.push({
      label: "General",
      fields: fields
        .filter(
          (f) =>
            f.fieldtype !== "Section Break" && f.fieldtype !== "Column Break"
        )
        .map((f) => ({ ...f, section: "" })),
    });
  }

  // Get existing doc data if not creating new
  let docData: Record<string, unknown> | null = null;
  if (id !== "new" && !docType.issingle) {
    const tableName = `tab${doctype.replace(/\s+/g, "")}`;
    try {
      docData = await queryOne<Record<string, unknown>>(
        `SELECT * FROM "${tableName}" WHERE name = $1`,
        [id]
      );
    } catch {
      docData = null;
    }
  } else if (docType.issingle) {
    // Single DocTypes store values in tabSingles, not their own table
    try {
      const rows = await query<{ field: string; value: string }>(
        `SELECT field, value FROM "tabSingles" WHERE doctype = $1`,
        [docType.name]
      );
      if (rows && rows.length > 0) {
        docData = {};
        for (const row of rows) {
          docData[row.field] = row.value;
        }
      }
    } catch {
      docData = null;
    }
  }

  if (id !== "new" && !docType.issingle && !docData) {
    notFound();
  }

  return (
    <FormClient
      docType={docType}
      tabs={tabs}
      docData={docData ?? {}}
      isNew={id === "new"}
      docName={id === "new" ? "" : id}
    />
  );
}