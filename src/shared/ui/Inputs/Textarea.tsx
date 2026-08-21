interface TextareaProps {
  label?: string;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  errorMessage?: string;
}

function Textarea({
  label,
  placeholder,
  onChange,
  value,
  rows = 2,
  readOnly,
  className,
  errorMessage,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2 action-button">
      {label && <label className="caption text-ink">{label}</label>}

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`border border-hairline bg-transparent px-4 py-2.5 resize-none focus:outline-none ${className}`}
        readOnly={readOnly}
      />
      {errorMessage && (
        <span className="disclaimer-text text-error">{errorMessage}</span>
      )}
    </div>
  );
}

export default Textarea;
