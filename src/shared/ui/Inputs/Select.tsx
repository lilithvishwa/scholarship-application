interface Option {
  id: string;
  label: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function Select({
  label,
  placeholder,
  options,
  value,
  onChange,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="caption text-ink uppercase">{label}</label>}

      <select
        className="h-10.5 border border-hairline bg-transparent px-4"
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      >
        <option value="" disabled>
          {placeholder || "Select"}
        </option>

        {options.map((option) => (
          <option key={option.id} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
