interface Option {
  id: string;
  label: string;
}

interface RadioGroupProps {
  label?: string;
  name: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  disabled = false,
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="caption text-ink uppercase">{label}</label>}

      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label key={option.id} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={option.label}
              checked={value === option.label}
              disabled={disabled}
              onChange={() => onChange?.(option.label)}
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
