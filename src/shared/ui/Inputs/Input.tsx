interface InputProps {
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
}
function Input({
  label,
  placeholder,
  type,
  onChange,
  value,
  readOnly,
}: InputProps) {
  return (
    <div className="flex flex-col space-y-2 action-button">
      {label && <label className="caption text-ink">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="border border-hairline bg-transparent h-10.25 py-2.5 px-4"
        onChange={onChange}
        value={value}
        autoComplete="current-password"
        readOnly={readOnly}
      />
    </div>
  );
}
export default Input;
