import type { FormField } from "@/features/form-builder/types/FieldType";
import { Input } from "@shared/ui";

interface Props {
  field: FormField;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

function CheckboxValidation({ field, updateField }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input
        label="MINIMUM SELECTION"
        placeholder="1"
        type="number"
        value={field?.minSelection ?? ""}
        onChange={(e) =>
          updateField(field.randomId, {
            minSelection: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />

      <Input
        label="MAXIMUM SELECTION"
        placeholder="3"
        value={field?.maxSelection ?? ""}
        onChange={(e) =>
          updateField(field.randomId, {
            maxSelection: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />
    </div>
  );
}

export default CheckboxValidation;
