import type { FormField } from "@/features/form-builder/types/FieldType";
import { Input, ToggleSwitch } from "@shared/ui";

interface Props {
  field: FormField;
  updateValidation: (
    fieldId: string,
    validation: Partial<FormField["validation"]>,
  ) => void;
}

function NumberValidation({ field, updateValidation }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input
        label="MINIMUM VALUE"
        placeholder="Enter a Minimum Value"
        type="number"
        value={field.validation?.minValue ?? ""}
        onChange={(e) => {
          updateValidation(field.id, {
            minValue: e.target.value ? Number(e.target.value) : undefined,
          });
        }}
      />

      <Input
        label="MAXIMUM VALUE"
        placeholder="Enter a Maximum value"
        value={field.validation?.maxValue ?? ""}
        onChange={(e) =>
          updateValidation(field.id, {
            maxValue: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />

      <div className="flex justify-between items-center">
        <label className="caption text-body-muted">ALLOW DECIMALS</label>

        <ToggleSwitch
          checked={field.validation?.allowDecimals ?? true}
          onChange={(checked) =>
            updateValidation(field.id, {
              allowDecimals: checked,
            })
          }
        />
      </div>
    </div>
  );
}

export default NumberValidation;
