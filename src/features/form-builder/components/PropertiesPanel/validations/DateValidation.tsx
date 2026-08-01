import type { FormField } from "@/features/form-builder/types/FieldType";
import { Input } from "@shared/ui";

interface Props {
  field: FormField;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

function DateValidation({ field, updateField }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input
        label="MINIMUM DATE"
        placeholder="DD/MM/YYYY"
        type="date"
        value={field?.minDate ?? ""}
        onChange={(e) =>
          updateField(field.randomId, {
            minDate: e.target.value,
          })
        }
      />

      <Input
        label="MAXIMUM DATE"
        placeholder="DD/MM/YYYY"
        type="date"
        value={field?.maxDate ?? ""}
        onChange={(e) =>
          updateField(field.randomId, {
            maxDate: e.target.value,
          })
        }
      />
    </div>
  );
}

export default DateValidation;
