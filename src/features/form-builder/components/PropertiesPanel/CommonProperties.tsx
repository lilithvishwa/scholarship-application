import { Input, ToggleSwitch, Icon } from "@shared/ui";
import type { FormField, FieldOption } from "../../types/FieldType";

interface Props {
  field: FormField;
  onUpdateField: (id: string, updates: Partial<FormField>) => void;
}

function CommonProperties({ field, onUpdateField }: Props) {
  const isOptionField =
    field.type === "dropdown" ||
    field.type === "checkbox" ||
    field.type === "radio";

  const addOption = () => {
    const newOption: FieldOption = { id: crypto.randomUUID(), label: "" };
    onUpdateField(field.id, { option: [...field.option, newOption] });
  };

  const updateOption = (id: string, label: string) => {
    onUpdateField(field.id, {
      option: field.option.map((opt) =>
        opt.id === id ? { ...opt, label } : opt,
      ),
    });
  };

  const deleteOption = (id: string) => {
    onUpdateField(field.id, {
      option: field.option.filter((opt) => opt.id !== id),
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="body">PROPERTIES</p>

      <Input
        label="FIELD LABEL"
        placeholder="Field Label"
        value={field.label}
        onChange={(e) => onUpdateField(field.id, { label: e.target.value })}
      />

      {isOptionField ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="caption text-body-muted">OPTIONS</label>

            <button type="button" onClick={addOption}>
              <Icon
                name="ic:outline-plus"
                size={24}
                className="text-body-muted cursor-pointer"
              />
            </button>
          </div>
          {field.option.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              <div className="flex-1">
                <Input
                  placeholder="Enter your option"
                  value={option.label}
                  type="text"
                  onChange={(e) => updateOption(option.id, e.target.value)}
                />
              </div>
              <button type="button" onClick={() => deleteOption(option.id)}>
                <Icon
                  name="material-symbols:delete-outline"
                  size={20}
                  className="text-body-muted cursor-pointer"
                />
              </button>
            </div>
          ))}
          {field.type === "dropdown" && (
            <div className="flex items-center justify-between pt-4">
              <label className="caption text-body-muted">ALLOW OTHER</label>
              <ToggleSwitch
                checked={field.allowOther}
                onChange={(checked) =>
                  onUpdateField(field.id, { allowOther: checked })
                }
              />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <label className="caption text-body-muted">HELPER TEXT</label>
          <textarea
            className="border border-hairline h-22 px-4 py-2"
            placeholder="Enter Helper Text"
            value={field.helperText}
            onChange={(e) =>
              onUpdateField(field.id, { helperText: e.target.value })
            }
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <label className="caption text-body-muted">REQUIRED FIELD</label>
        <ToggleSwitch
          checked={field.required}
          onChange={(checked) => onUpdateField(field.id, { required: checked })}
        />
      </div>
    </div>
  );
}

export default CommonProperties;
