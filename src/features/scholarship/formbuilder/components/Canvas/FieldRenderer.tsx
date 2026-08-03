import {
  Input,
  Textarea,
  Select,
  RadioGroup,
  CheckboxGroup,
  FileUpload,
} from "@/shared/ui";
import type { FormField } from "../../types/FieldType";

interface FieldRendererProps {
  field: FormField;
}

/*
 * Renders the correct input field based on the field's `type`.
 * Used by the form builder canvas to display added fields.
 */
export function FieldRenderer({ field }: FieldRendererProps) {
  switch (field.type) {
    case "text":
      return (
        <div>
          <Input
            label={field.label || "untitled"}
            type={field.type}
            placeholder={field.helpText || "Type your helper text"}
            readOnly
          />
        </div>
      );

    case "text-area":
      return (
        <div>
          <Textarea
            label={field.label}
            placeholder={field.helpText || "Type your helper text"}
            // value={}
            // onChange={(e) => setHelperText(e.target.value)}
            readOnly
          />
        </div>
      );

    case "number":
      return (
        <>
          <Input
            label={field.label || "untitled"}
            type={field.type}
            placeholder={field.helpText || "Type your helper text"}
            readOnly
          />
        </>
      );

    case "date":
      return (
        <>
          <Input
            label={field.label || "untitled"}
            type={field.type}
            placeholder={field.helpText || "Type your helper text"}
            readOnly
          />
        </>
      );

    case "select":
      return (
        <Select
          label={field.label}
          placeholder={field.helpText || "Type your helper text"}
          options={field.choices}
        />
      );

    case "radio":
      return (
        <RadioGroup
          label={field.label}
          name={field.randomId}
          options={field.choices}
          disabled
        />
      );

    case "checkbox":
      return (
        <CheckboxGroup label={field.label} options={field.choices} disabled />
      );

    case "file":
      return <FileUpload label={field.label} />;

    default:
      return null;
  }
}
