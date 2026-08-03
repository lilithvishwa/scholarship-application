import type { FormField } from "@/features/scholarship/formbuilder/types/FieldType";
import { Input, ToggleSwitch } from "@shared/ui";

interface Props {
  field: FormField;
  updateField: (id: string, updates: Partial<FormField[]>) => void;
}

function NumberValidation({ field, updateField }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input
        label="MINIMUM VALUE"
        placeholder="Enter a Minimum Value"
        type="number"
        value={field?.minValue ?? ""}
        onChange={(e) => {
          updateField(field.randomId, {
            minValue: e.target.value ? Number(e.target.value) : undefined,
          });
        }}
      />

      <Input
        label="MAXIMUM VALUE"
        placeholder="Enter a Maximum value"
        value={field?.maxValue ?? ""}
        onChange={(e) =>
          updateField(field.randomId, {
            maxValue: e.target.value ? Number(e.target.value) : undefined,
          })
        }
      />

      {/*<div className="flex justify-between items-center">
        <label className="caption text-body-muted">ALLOW DECIMALS</label>

        <ToggleSwitch
          checked={field?.allowDecimals ?? true}
          onChange={(checked) =>
            updateField(field.randomId, {
              allowDecimals: checked,
            })
          }
        />
      </div>*/}
    </div>
  );
}

export default NumberValidation;
