import type { FormField } from "@/features/form-builder/types/FieldType";
import { Input } from "@shared/ui";

interface Props {
  field: FormField;
  updateValidation: (
    fieldId: string,
    validation: Partial<FormField["validation"]>,
  ) => void;
}

function DropdownValidation({ field, updateValidation }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input
        label="MINIMUM SELECTION"
        placeholder="1"
        type="number"
        value={field.validation?.minSelection ?? ""}
        onChange={(e) =>
          updateValidation(field.id, {
            minSelection: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />

      <Input
        label="MAXIMUM SELECTION"
        placeholder="3"
        type="number"
        value={field.validation?.maxSelection ?? ""}
        onChange={(e) =>
          updateValidation(field.id, {
            maxSelection: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />
    </div>
  );
}

export default DropdownValidation;
