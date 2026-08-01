import { Input, ToggleSwitch, Icon } from "@shared/ui";
import type { FormField } from "../../types/FieldType";

interface Props {
  field: FormField;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

function CommonProperties({ field, updateField }: Props) {
  const isOptionField =
    field.type === "select" ||
    field.type === "checkbox" ||
    field.type === "radio";

  const addOption = () => {
    // const newOption: FieldOption = { id: crypto.randomUUID(), label: "" };
    // updateField(field.randomId, { choices: [...field.choices, newOption] });
    //
    if (!("choices" in field)) return;
    updateField(field.randomId, {
      choices: [...field.choices, ""],
    });
  };

  // const updateOption = (id: string, label: string) => {
  //   updateField(field.randomId, {
  //     option: field.option.map((opt) =>
  //       opt.id === id ? { ...opt, label } : opt,
  //     ),
  //   });
  // };
  //
  const updateOption = (index: number, value: string) => {
    if (!("choices" in field)) return;

    const updated = [...field.choices];

    updated[index] = value;

    updateField(field.randomId, {
      choices: updated,
    });
  };

  // const deleteOption = (id: string) => {
  //   updateField(field.randomId, {
  //     option: field.option.filter((opt) => opt.id !== id),
  //   });
  // };

  const deleteOption = (index: number) => {
    if (!("choices" in field)) return;

    updateField(field.randomId, {
      choices: field.choices.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="body">PROPERTIES</p>

      <Input
        label="FIELD LABEL"
        placeholder="Field Label"
        value={field.label}
        onChange={(e) => updateField(field.randomId, { label: e.target.value })}
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
          {field?.choices.map((choice, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-1">
                <Input
                  placeholder="Enter your option"
                  value={choice}
                  type="text"
                  onChange={(e) => updateOption(index, e.target.value)}
                />
              </div>
              <button type="button" onClick={() => deleteOption(index)}>
                <Icon
                  name="material-symbols:delete-outline"
                  size={20}
                  className="text-body-muted cursor-pointer"
                />
              </button>
            </div>
          ))}
          {field.type === "select" && (
            <div className="flex items-center justify-between pt-4">
              <label className="caption text-body-muted">ALLOW OTHER</label>
              <ToggleSwitch
                checked={field.allowOther}
                onChange={(checked) =>
                  updateField(field.randomId, { allowOther: checked })
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
            value={field.helpText || ""}
            onChange={(e) =>
              updateField(field.randomId, { helpText: e.target.value })
            }
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <label className="caption text-body-muted">REQUIRED FIELD</label>
        <ToggleSwitch
          checked={field.required}
          onChange={(checked) =>
            updateField(field.randomId, { required: checked })
          }
        />
      </div>
    </div>
  );
}

export default CommonProperties;
