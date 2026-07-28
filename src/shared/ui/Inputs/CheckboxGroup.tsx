interface Option {
  id: string;
  label: string;
}

interface CheckboxGroupProps {
  label?: string;
  options: Option[];
  value?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean;
}

export default function CheckboxGroup({
  label,
  options,
  value = [],
  onChange,
  disabled = false,
}: CheckboxGroupProps) {
  const handleChange = (optionLabel: string, checked: boolean) => {
    if (!onChange) return;

    if (checked) {
      onChange([...value, optionLabel]);
    } else {
      onChange(value.filter((item) => item !== optionLabel));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="caption text-ink uppercase">{label}</label>}

      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={option.label}
              checked={value.includes(option.label)}
              disabled={disabled}
              onChange={(e) => handleChange(option.label, e.target.checked)}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
