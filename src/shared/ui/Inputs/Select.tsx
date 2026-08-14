import { useState } from "react";
import { Icon } from "@shared/ui";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Select",
  disabled = false,
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  const handleToggle = () => {
    if (disabled) return;

    setOpen((prev) => !prev);
  };

  const handleSelect = (option: SelectOption) => {
    onChange?.(option.value);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Select trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        className={`
          flex h-10.5 w-full items-center justify-between
          border border-hairline bg-transparent px-3
          text-sm
          ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        `}
      >
        <span className="truncate text-body-muted">
          {label && `${label}: `}
          {selectedOption?.label ?? placeholder}
        </span>

        <Icon
          name="material-symbols:keyboard-arrow-down"
          size={18}
          className={`shrink-0 text-body-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && !disabled && (
        <div
          className="
            absolute left-0 top-full z-50 mt-1
            max-h-60 w-full
            overflow-y-auto
            border border-hairline
            bg-white
            shadow-md
          "
        >
          {options.map((option) => {
            const isActive = option.value === value;

            return (
              <button
                type="button"
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`
                  flex w-full items-center px-3 py-2
                  text-left text-sm
                  transition-colors
                  ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-ink hover:bg-gray-100"
                  }
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Select;
