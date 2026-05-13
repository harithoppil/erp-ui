import { query, queryOne } from "@/lib/db";
import type { DocType } from "@/types/erp";
import { notFound } from "next/navigation";
import { TreeClient } from "@/app/(desk)/tree/[doctype]/tree-client";

interface TreeNode {
  name: string;
  lft: number;
  rgt: number;
  is_group: number;
  parent_field?: string | null;
}

interface PageProps {
  params: Promise<{ doctype: string }>;
}

export default async function TreePage({ params }: PageProps) {
  const { doctype: raw } = await params;
  const doctype = decodeURIComponent(raw);

  const docType = await queryOne<DocType>(
    `SELECT name, module, istable, is_tree, issingle, icon FROM "tabDocType" WHERE name = $1`,
    [doctype]
  );

  if (!docType || !docType.is_tree) notFound();

  // Fetch tree nodes using nested set (lft/rgt)
  const tableName = `tab${doctype.replace(/\s+/g, "")}`;
  let nodes: TreeNode[] = [];
  try {
    nodes = await query<TreeNode>(
      `SELECT name, lft, rgt, is_group, parent_${doctype.replace(/\s+/g, "").toLowerCase()} as parent_field FROM "${tableName}" ORDER BY lft`
    );
  } catch {
    // Fallback: try simpler query
    try {
      nodes = await query<TreeNode>(
        `SELECT name, lft, rgt, is_group FROM "${tableName}" ORDER BY lft`
      );
    } catch {
      nodes = [];
    }
  }

  return (
    <TreeClient
      docType={docType}
      nodes={nodes}
    />
  );
}