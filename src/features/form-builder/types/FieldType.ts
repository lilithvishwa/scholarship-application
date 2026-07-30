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

// export interface FormField {
//   id: string;
//   type: FieldType;
//   label: string;
//   helperText: string;
//   required: boolean;
//   option: FieldOption[];
//   allowOther: boolean;
//   validation: string[];
// }

interface BaseInputField {
  id: string;
  label: string;
  helpText: string | null;
  required: boolean;
}

type TextAreaType = "text-area";
type TextInputType = "text";
type NumberType = "number";
type DateType = "date";
type SelectType = "select";
type RadioType = "radio";

export interface TextAreaInputField extends BaseInputField {
  minLength: number | null;
  maxLength: number | null;
  type: TextAreaType;
}

export interface TextInputFieldType extends BaseInputField {
  minLength: number | null;
  maxLength: number | null;
  regex: string | null;
  type: TextInputType;
}

export interface NumberInputFieldType extends BaseInputField {
  minValue: number | null;
  maxValue: number | null;
  allowDecimals: boolean;
  type: NumberType;
}

export interface DateInputFieldType extends BaseInputField {
  minDate: string | null;
  maxDate: string | null;
  type: DateType;
}

export interface SelectInputFieldType extends BaseInputField {
  choices: string[];
  allowOther: boolean;
  type: SelectType;
}

export interface RadioInputFieldType extends BaseInputField {
  choices: string[];
  type: RadioType;
}
