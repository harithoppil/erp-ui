"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { WorkspaceSidebarItem } from "@/types/erp";

interface SidebarContextType {
  workspaceItems: WorkspaceSidebarItem[];
  setWorkspaceItems: (items: WorkspaceSidebarItem[]) => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [workspaceItems, setWorkspaceItems] = useState<WorkspaceSidebarItem[]>([]);
  return (
    <SidebarContext.Provider value={{ workspaceItems, setWorkspaceItems }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebarContext must be used within SidebarProvider");
  return ctx;
}
