// interface Option {
//   id: string;
//   label: string;
// }

interface CheckboxGroupProps {
  label?: string;
  options: string[];
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
      {label && <label className="caption text-ink">{label}</label>}

      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={option}
              checked={value.includes(option)}
              disabled={disabled}
              onChange={(e) => handleChange(option, e.target.checked)}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
