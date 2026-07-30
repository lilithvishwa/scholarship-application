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
  validation?: {
    format?: "text" | "email" | "phone" | "url";

    minLength?: number;
    maxLength?: number;

    minValue?: number;
    maxValue?: number;
    allowDecimals?: boolean;

    minDate?: string;
    maxDate?: string;

    minSelection?: number;
    maxSelection?: number;

    acceptedFileTypes?: string[];
    maxFileSize?: number;
  };
}
