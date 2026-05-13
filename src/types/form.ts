import type { DocField } from "@/types/erp";

export interface FormField extends DocField {
  section: string;
}

export interface FormTab {
  label: string;
  fields: FormField[];
}
