export interface DesktopIcon {
  name: string;
  label: string;
  icon_type: string | null;
  link_type: string;
  link_to: string | null;
  parent_icon: string | null;
  sidebar: number;
  standard: number;
  app: string;
  icon: string | null;
  hidden: number;
  idx: number;
}

export interface Workspace {
  name: string;
  title: string;
  module: string;
  icon: string | null;
  is_hidden: number;
  category: string | null;
  extends_another_page: number;
  link: string | null;
}

export interface WorkspaceShortcut {
  name: string;
  type: string;
  link_to: string | null;
  label: string;
  icon: string | null;
  doc_view: string | null;
  idx: number;
}

export interface WorkspaceNumberCard {
  name: string;
  label: string;
  number_card_name: string;
  idx: number;
}

export interface WorkspaceChart {
  name: string;
  label: string;
  chart_name: string;
  idx: number;
}

export interface WorkspaceSidebarItem {
  name: string;
  type: string;
  link_to: string | null;
  label: string;
  icon: string | null;
  idx: number;
}

export interface DocType {
  name: string;
  module: string;
  istable: number;
  is_tree: number;
  issingle: number;
  icon: string | null;
}

export interface DocField {
  name: string;
  parent: string;
  label: string;
  fieldname: string;
  fieldtype: string;
  options: string | null;
  mandatory: number;
  hidden: number;
  idx: number;
  default_value: string | null;
  description: string | null;
  depends_on: string | null;
  read_only: number;
  reqd: number;
  in_list_view: number;
  in_standard_filter: number;
}

export interface DocPerm {
  role: string;
  create: number;
  read: number;
  write: number;
  delete: number;
  submit: number;
  cancel: number;
  amend: number;
}

export interface FiscalYear {
  name: string;
  year_start_date: string;
  year_end_date: string;
}

export interface FrappeUser {
  name: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: string;
  roles: string[];
}