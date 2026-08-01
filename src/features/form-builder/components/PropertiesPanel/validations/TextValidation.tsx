import { Input } from "@shared/ui";
import type { FormField } from "../../../types/FieldType";

interface TextValidationProps {
  field: FormField;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

type RegexType = "text" | "email" | "phone" | "url";

const REGEX_PATTERNS: Record<string, RegExp> = {
  text: /.*/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[6-9]\d{9}$/,
  url: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/.*)?$/,
};

function TextValidation({ field, updateField }: TextValidationProps) {
  const isShortText = field.type === "text";

  const selectedRegex =
    Object.entries(REGEX_PATTERNS).find(
      ([, pattern]) => pattern.source === field?.regex,
    )?.[0] ?? "text";

  // const pattern = REGEX_PATTERNS[field.regex ?? "text"];

  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      {isShortText && (
        <div>
          <label className="caption text-body-muted">FORMAT</label>

          <select
            value={selectedRegex}
            onChange={(e) =>
              updateField(field.randomId, {
                // regex: e.target.value as RegexType,
                regex: REGEX_PATTERNS[e.target.value].source,
              })
            }
            className="w-full h-12 border border-hairline px-4 mt-2"
          >
            <option value="text">Any Text</option>
            <option value="email">Email</option>
            <option value="phone">Phone Number</option>
            <option value="url">URL</option>
          </select>
        </div>
      )}

      <Input
        label="MINIMUM LENGTH"
        placeholder="3"
        type="number"
        value={field?.minLength ?? ""}
        onChange={(e) =>
          updateField(field.randomId, {
            minLength: e.target.value ? Number(e.target.value) : undefined,
            // minLength: e.target.value,
          })
        }
      />

      <Input
        label="MAXIMUM LENGTH"
        placeholder="20"
        type="number"
        value={field?.maxLength ?? ""}
        onChange={(e) =>
          updateField(field.randomId, {
            maxLength: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />
    </div>
  );
}

export default TextValidation;
