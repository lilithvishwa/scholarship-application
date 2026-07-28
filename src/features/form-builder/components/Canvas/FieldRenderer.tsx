import { Input, Textarea } from "@/shared/ui";
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
            placeholder={field.helperText}
            // value={}
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
        <div className="flex flex-col gap-2">
          <label className="caption text-body-muted uppercase">
            {field.label}
          </label>
          <select
            className="h-10.5 border border-hairline px-4 bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              {field.helperText || "Select"}
            </option>
            {field.option.map((option) => (
              <option key={option.id} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );

    case "radio":
      return (
        <div className="flex flex-col gap-2">
          <label className="caption text-body-muted uppercase">
            {field.label}
          </label>

          <div className="flex flex-col gap-2">
            {field.option.map((option) => (
              <label key={option.id} className="flex items-center gap-2">
                <input type="radio" name={field.id} disabled />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      );

    case "checkbox":
      return (
        <div className="flex flex-col gap-2">
          <label className="caption text-body-muted uppercase">
            {field.label}
          </label>

          <div className="flex flex-col gap-2">
            {field.option.map((option) => (
              <label key={option.id} className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
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
