type FieldType =
  | "text"
  | "textarea"
  | "email"
  | "password"
  | "tel"
  | "url"
  | "number"
  | "date"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "file";

export interface FieldOption {
  id: string;
  label: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  helperText: string;
  required: boolean;
  option: FieldOption[];
  allowOther: boolean;
  validation: string[];
}
