import { useState } from "react";
import { Input, ToggleSwitch, Icon } from "@shared/ui";
import type { FormField } from "../../types/FieldType";

interface Props {
  field: FormField;
}

interface Option {
  id: number;
  value: string;
}

function CommonProperties({ field }: Props) {
  const [options, setOptions] = useState<Option[]>([
    {
      id: 1,
      value: "India",
    },
    {
      id: 2,
      value: "",
    },
  ]);

  const addOption = () => {
    setOptions((prev) => [
      ...prev,
      {
        id: Date.now(),
        value: "",
      },
    ]);
  };

  const updateOption = (id: number, value: string) => {
    setOptions((prev) =>
      prev.map((option) => (option.id === id ? { ...option, value } : option)),
    );
  };

  const deleteOption = (id: number) => {
    setOptions((prev) => prev.filter((option) => option.id !== id));
  };

  const isOptionField =
    field.type === "dropdown" ||
    field.type === "checkbox" ||
    field.type === "radio";

  return (
    <div className="flex flex-col gap-6">
      <p className="body">PROPERTIES</p>

      <Input
        label="FIELD LABEL"
        placeholder="Field Label"
        value={field.label}
      />

      {isOptionField ? (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="caption text-body-muted">OPTIONS</label>

            <button type="button" onClick={addOption}>
              <Icon
                name="ic:outline-plus"
                size={24}
                className="text-body-muted"
              />
            </button>
          </div>

          {options.map((option) => (
            <div key={option.id} className="flex items-center gap-2">
              <div className="flex-1">
                <Input
                  placeholder="Enter your option"
                  value={option.value}
                  type="text"
                  onChange={(e) => updateOption(option.id, e.target.value)}
                />
              </div>

              <button type="button" onClick={() => deleteOption(option.id)}>
                <Icon
                  name="material-symbols:delete-outline"
                  size={20}
                  className="text-body-muted"
                />
              </button>
            </div>
          ))}

          {field.type === "dropdown" && (
            <div className="flex items-center justify-between pt-4">
              <label className="caption text-body-muted">ALLOW OTHER</label>

              <ToggleSwitch checked={false} onChange={() => {}} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <label className="caption text-body-muted">HELPER TEXT</label>

          <textarea
            className="border border-hairline h-22 px-4 py-2"
            placeholder="Income Certificate"
            value={field.helperText}
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <label className="caption text-body-muted">REQUIRED FIELD</label>

        <ToggleSwitch checked={field.required} onChange={() => {}} />
      </div>
    </div>
  );
}

export default CommonProperties;
