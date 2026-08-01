// type FieldType =
//   "text" | "textarea" | "date" | "dropdown" | "radio" | "checkbox" | "file";

// export interface FormField {
//   id: string;
//   type: FieldType;
//   label: string;
//   helperText: string;
//   required: boolean;
//   allowOther: boolean;

// }

// interface BaseInputField {
//   id: string;
//   label: string;
//   helpText: string | null;
//   required: boolean;
//   // option: FieldOption[];
//   // allowOther: boolean;
//   // validation?: {
//   //   format?: "text" | "email" | "phone" | "url";

//   //   minLength?: number;
//   //   maxLength?: number;

//   //   minValue?: number;
//   //   maxValue?: number;
//   //   allowDecimals?: boolean;

//   //   minDate?: string;
//   //   maxDate?: string;

//   //   minSelection?: number;
//   //   maxSelection?: number;

//   //   acceptedFileTypes?: string[];
//   //   maxFileSize?: number;
//   };
// }
//
//

// export interface FieldOption {
//   id: string;
//   label: string;
// }

interface BaseInputField {
  randomId: string;
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
type CheckboxType = "checkbox";
type FileType = "file";

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
  // allowDecimals: boolean;
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

export interface CheckboxInputFieldType extends BaseInputField {
  type: CheckboxType;
  choices: string[];
  minSelection: number;
  maxSelection: number;
}

export interface FileInputFieldType extends BaseInputField {
  type: FileType;
  fileType: string[];
  maxFileSize: number;
}

export type FormField =
  | TextInputFieldType
  | TextAreaInputField
  | NumberInputFieldType
  | DateInputFieldType
  | SelectInputFieldType
  | RadioInputFieldType
  | CheckboxInputFieldType
  | FileInputFieldType;
