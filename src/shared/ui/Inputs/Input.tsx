import clsx from "clsx";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  borderColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
function Input({
  label,
  placeholder,
  type,
  onChange,
  value,
  readOnly,
  className,
  borderColor = "border-hairline",
  leftIcon,
  rightIcon,
}: InputProps) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="caption text-ink">{label}</label>}
      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body-muted">
            {leftIcon}
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          className={clsx(
            "h-10.25 w-full border bg-transparent py-2.5",
            borderColor,
            leftIcon ? "pl-11" : "px-4",
            rightIcon ? "pr-11" : "px-4",
            className,
          )}
          onChange={onChange}
          value={value}
          autoComplete="current-password"
          readOnly={readOnly}
        />

        {rightIcon && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-body-muted">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}
export default Input;
