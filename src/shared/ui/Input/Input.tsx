interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  onChange(): void;
  value: string | number;
}

function Input({ label, placeholder, type, onChange, value }: InputProps) {
  return (
    <div className="flex flex-col space-y-2 action-button">
      {/*<label>{label}</label>*/}
      {label && (
        <label className="caption text-body-muted uppercase">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="border border-hairline bg-transparent h-10.25 py-2.5 px-4"
        onChange={onChange}
        value={value}
        autoComplete="current-password"
      />
    </div>
  );
}
export default Input;
