import type { FormField } from "@/features/form-builder/types/FieldType";
import { Input } from "@shared/ui";

interface Props {
  field: FormField;
  updateValidation: (
    fieldId: string,
    validation: Partial<FormField["validation"]>,
  ) => void;
}

function DateValidation({ field, updateValidation }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input
        label="MINIMUM DATE"
        placeholder="DD/MM/YYYY"
        type="date"
        value={field.validation?.minDate ?? ""}
        onChange={(e) =>
          updateValidation(field.id, {
            minDate: e.target.value,
          })
        }
      />

      <Input
        label="MAXIMUM DATE"
        placeholder="DD/MM/YYYY"
        type="date"
        value={field.validation?.maxDate ?? ""}
        onChange={(e) =>
          updateValidation(field.id, {
            maxDate: e.target.value,
          })
        }
      />
    </div>
  );
}

export default DateValidation;
