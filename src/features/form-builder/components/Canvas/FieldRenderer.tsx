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
  console.log(field);
  switch (field.type) {
    case "text":
      return (
        <div>
          <Input
            label={field.label || "untitled"}
            type={field.type}
            placeholder={field.helperText || "Type your helper text"}
          />
        </div>
      );

    case "textarea":
      return (
        <div>
          <Textarea
            label={field.label}
            placeholder="Enter helper text"
            value={field.helperText}
            // onChange={(e) => setHelperText(e.target.value)}
          />
        </div>
      );

    case "number":
      return (
        <>
          <Input
            label={field.label || "untitled"}
            type={field.type}
            placeholder={field.helperText || "Type your helper text"}
          />
        </>
      );

    case "date":
      return (
        <>
          <Input
            label={field.label || "untitled"}
            type={field.type}
            placeholder={field.helperText || "Type your helper text"}
          />
        </>
      );

    case "dropdown":
      return (
        <Select
          label={field.label}
          placeholder={field.helperText}
          options={field.option}
        />
      );

    case "radio":
      return (
        <RadioGroup
          label={field.label}
          name={field.id}
          options={field.option}
          disabled
        />
      );

    case "checkbox":
      return (
        <CheckboxGroup label={field.label} options={field.option} disabled />
      );

    case "file":
      return <FileUpload />;

    default:
      return null;
  }
}
