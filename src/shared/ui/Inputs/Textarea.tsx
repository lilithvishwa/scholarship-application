interface TextareaProps {
  label?: string;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
}

function Textarea({
  label,
  placeholder,
  onChange,
  value,
  rows = 2,
}: TextareaProps) {
  return (
    <div className="flex flex-col space-y-2 action-button">
      {label && <label className="caption text-ink uppercase">{label}</label>}

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="border border-hairline bg-transparent px-4 py-2.5 resize-none focus:outline-none"
      />
    </div>
  );
}

export default Textarea;
