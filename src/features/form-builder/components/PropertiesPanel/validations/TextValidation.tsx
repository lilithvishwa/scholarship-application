import { Input } from "@shared/ui";
import type { FormField } from "../../../types/FieldType";

interface TextValidationProps {
  field: FormField;
  updateValidation: (
    fieldId: string,
    validation: Partial<FormField["validation"]>,
  ) => void;
}

function TextValidation({ field, updateValidation }: TextValidationProps) {
  const isShortText = field.type === "text";

  // console.log(updateValidation);
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      {isShortText && (
        <div>
          <label className="caption text-body-muted">FORMAT</label>

          <select
            value={field.validation?.format ?? "text"}
            onChange={(e) =>
              updateValidation(field.id, {
                format: e.target.value as "text" | "email" | "phone" | "url",
              })
            }
            className="w-full h-12 border border-hairline px-4 mt-2"
          >
            <option>Any Text</option>
            <option>Email</option>
            <option>Phone Number</option>
            <option>URL</option>
          </select>
        </div>
      )}

      <Input
        label="MINIMUM LENGTH"
        placeholder="3"
        type="number"
        value={field.validation?.minLength ?? ""}
        onChange={(e) =>
          updateValidation(field.id, {
            minLength: e.target.value ? Number(e.target.value) : undefined,
            // minLength: e.target.value,
          })
        }
      />

      <Input
        label="MAXIMUM LENGTH"
        placeholder="20"
        type="number"
        value={field.validation?.maxLength ?? ""}
        onChange={(e) =>
          updateValidation(field.id, {
            maxLength: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />
    </div>
  );
}

export default TextValidation;
