import { query, queryOne } from "@/lib/db";
import type { DocType, DocField } from "@/types/erp";
import type { FormTab, FormField } from "@/types/form";
import { notFound } from "next/navigation";
import { FormClient } from "./form-client";

interface PageProps {
  params: Promise<{ doctype: string; id: string }>;
}

export default async function FormPage({ params }: PageProps) {
  const { doctype: rawDoctype, id: rawId } = await params;
  const doctype = decodeURIComponent(rawDoctype);
  const id = decodeURIComponent(rawId);

  const docType = await queryOne<DocType>(
    `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
    [doctype]
  );

  if (!docType) notFound();

  // Get all visible fields — include Section Break, Column Break, Table for layout/child grids
  const fields = await query<DocField>(
    `SELECT name, parent, label, fieldname, fieldtype, options, hidden, idx, "default", description, depends_on, read_only, reqd, in_list_view, in_standard_filter
     FROM "tabDocField"
     WHERE parent = $1 AND hidden = 0 AND fieldtype NOT IN ('HTML', 'Button', 'Image', 'Color', 'Heading', 'Attach', 'Attach Image', 'Signature', 'Geolocation', 'Table MultiSelect')
     ORDER BY idx`,
    [doctype]
  );

  // Pre-fetch child-table data + their columns for Table fields
  const tableName = `tab${doctype}`;
  const childTablesData: Record<string, {
    rows: Record<string, unknown>[];
    fields: { fieldname: string; label: string; fieldtype: string }[];
    options: string;
  }> = {};

  if (id !== "new" && !docType.issingle) {
    const tableFields = fields.filter(
      (f) => (f.fieldtype === "Table" || f.fieldtype === "Table MultiSelect") && f.options
    );
    for (const tf of tableFields) {
      const childDocType = tf.options!;
      try {
        const childFields = await query<DocField>(
          `SELECT fieldname, label, fieldtype, options, in_list_view
           FROM "tabDocField"
           WHERE parent = $1 AND in_list_view = 1 AND hidden = 0
             AND fieldtype NOT IN ('Section Break', 'Column Break', 'Tab Break', 'HTML', 'Button', 'Image', 'Heading', 'Table', 'Table MultiSelect')
           ORDER BY idx`,
          [childDocType]
        );
        const cols = childFields.length > 0
          ? childFields.map((f) => `"${f.fieldname}"`).join(", ")
          : "*";
        const childTable = `tab${childDocType}`;
        const childRows = await query<Record<string, unknown>>(
          `SELECT name, ${cols} FROM "${childTable}" WHERE parent = $1 AND parenttype = $2 ORDER BY idx`,
          [id, doctype]
        );
        childTablesData[tf.fieldname] = {
          rows: childRows,
          fields: childFields.map((f) => ({
            fieldname: f.fieldname,
            label: f.label,
            fieldtype: f.fieldtype,
          })),
          options: childDocType,
        };
      } catch {
        // Skip on error
      }
    }
  }

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
      childTables={childTablesData}
    />
  );
}