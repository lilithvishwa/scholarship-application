interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  className = "",
}: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`
        relative
        flex
        h-5
        w-9
        items-center
        rounded-full
        p-0.5
        transition-colors
        duration-200
        ${checked ? "bg-action-blue" : "bg-gray-300"}
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        ${className}
      `}
    >
      <span
        className={`
          h-4
          w-4
          rounded-full
          bg-white
          shadow-sm
          transition-transform
          duration-200
          ${checked ? "translate-x-4" : "translate-x-0"}
        `}
      />
    </button>
  );
}

export default ToggleSwitch;
