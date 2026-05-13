"use client";

import { useState } from "react";
import Link from "next/link";
import type { DocType } from "@/types/erp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ChevronRight, ChevronDown, Plus, Folder, FileText } from "lucide-react";

interface TreeNode {
  name: string;
  lft: number;
  rgt: number;
  is_group: number;
  parent_field?: string | null;
  children?: TreeNode[];
}

interface TreeClientProps {
  docType: DocType;
  nodes: TreeNode[];
}

export function TreeClient({ docType, nodes }: TreeClientProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // Build tree from nested set
  const tree = buildTree(nodes);

  function toggleExpand(name: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function renderNode(node: TreeNode, depth: number = 0) {
    const isGroup = node.is_group === 1;
    const isExpanded = expanded.has(node.name);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.name}>
        <div
          className="flex items-center gap-2 rounded-md px-3 py-1.5 hover:bg-gray-100"
          style={{ paddingLeft: `${depth * 24 + 12}px` }}
        >
          {isGroup ? (
            <button onClick={() => toggleExpand(node.name)}>
              {hasChildren ? (
                isExpanded ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )
              ) : (
                <Folder size={16} className="text-gray-400" />
              )}
            </button>
          ) : (
            <FileText size={16} className="text-gray-300" />
          )}
          <Link
            href={`/form/${docType.name}/${node.name}`}
            className="text-sm text-gray-700 hover:text-blue-600 hover:underline"
          >
            {node.name}
          </Link>
        </div>
        {isGroup && isExpanded && hasChildren && (
          <div>
            {node.children!.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          {docType.name} (Tree)
        </h1>
        <Link href={`/form/${docType.name}/new`}>
          <Button className="gap-2">
            <Plus size={16} />
            Add {docType.name}
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-2">
          {tree.length === 0 ? (
            <p className="py-8 text-center text-gray-400">
              No records found
            </p>
          ) : (
            tree.map((node) => renderNode(node))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function buildTree(nodes: TreeNode[]): TreeNode[] {
  if (nodes.length === 0) return [];

  // Sort by lft
  const sorted = [...nodes].sort((a, b) => a.lft - b.lft);

  // Build parent-child relationships using nested set
  const stack: TreeNode[] = [];
  const roots: TreeNode[] = [];

  for (const node of sorted) {
    node.children = [];

    // Pop nodes from stack that are not ancestors
    while (
      stack.length > 0 &&
      stack[stack.length - 1].rgt < node.lft
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      stack[stack.length - 1].children!.push(node);
    } else {
      roots.push(node);
    }

    if (node.is_group === 1) {
      stack.push(node);
    }
  }

  return roots;
}