import type { FormField } from "./FieldType";

export function createField(type: FormField["type"]): FormField {
  const randomId = crypto.randomUUID();

  switch (type) {
    case "text":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        minLength: null,
        maxLength: null,
        regex: null,
      };

    case "text-area":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        minLength: null,
        maxLength: null,
      };

    case "number":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        minValue: null,
        maxValue: null,
        // allowDecimals: false,
      };

    case "date":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        minDate: null,
        maxDate: null,
      };

    case "select":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        choices: ["Option 1"],
        allowOther: false,
      };

    case "radio":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        choices: ["Option 1"],
      };

    case "checkbox":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        choices: ["Option 1"],
        minSelection: 0,
        maxSelection: 1,
      };

    case "file":
      return {
        randomId,
        type,
        label: "Untitled",
        helpText: null,
        required: false,
        fileType: [],
        maxFileSize: 0,
      };
  }
}
