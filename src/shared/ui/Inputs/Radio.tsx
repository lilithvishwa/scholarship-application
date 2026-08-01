// interface Option {
//   id: string;
//   label: string;
// }

interface RadioGroupProps {
  label?: string;
  name: string;
  options: string[];
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
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              disabled={disabled}
              onChange={() => onChange?.(option)}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
