import { Input } from "@/shared/ui";
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
    case "shorttext":
      return (
        <div>
          <Input label="email" type="email" placeholder="enter email" />
        </div>
      );

    case "longtext":
      return (
        <>
          <p>longtext</p>
        </>
      );

    case "number":
      return (
        <>
          <p>number</p>
        </>
      );

    case "date":
      return (
        <>
          <p>date</p>
        </>
      );

    case "dropdown":
      return (
        <>
          <p>dropdown</p>
        </>
      );

    case "radio":
      return (
        <>
          <p>radio</p>
        </>
      );

    case "checkbox":
      return (
        <>
          <p>checkbox</p>
        </>
      );

    case "file":
      return (
        <>
          <p>file</p>
        </>
      );

    default:
      return null;
  }
}
