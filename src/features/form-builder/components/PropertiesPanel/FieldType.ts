export type FieldType =
  | "longtext"
  | "shorttext"
  | "number"
  | "date"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "file";

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  helperText: string;
  required: boolean;
  validation: Record<string, any>;
}
