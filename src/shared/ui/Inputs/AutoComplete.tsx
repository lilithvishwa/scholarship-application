import { useEffect, useRef, useState } from "react";
import { Icon } from "@shared/ui";

export interface AutocompleteOption {
  value: string;
  label: string;
  [key: string]: unknown;
}

interface AutocompleteProps {
  label?: string;
  placeholder?: string;
  value?: string;
  options: AutocompleteOption[];
  onChange?: (value: string) => void;
  onSelect?: (option: AutocompleteOption) => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

function Autocomplete({
  label,
  placeholder = "Type to search...",
  value = "",
  options,
  onChange,
  onSelect,
  loading = false,
  disabled = false,
  className = "",
}: AutocompleteProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    onChange?.(newValue);

    setOpen(newValue.trim().length > 0);
  };

  const handleSelect = (option: AutocompleteOption) => {
    onChange?.(option.value);
    onSelect?.(option);
    setOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col space-y-2 ${className}`}
    >
      {label && <label className="caption text-ink">{label}</label>}

      <div className="relative">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => {
            if (value.trim()) {
              setOpen(true);
            }
          }}
          autoComplete="off"
          className={`
            h-10.25 w-full
            border border-hairline
            bg-transparent
            px-4 py-2.5
            text-sm
            outline-none
            ${disabled ? "cursor-not-allowed bg-card-border" : ""}
          `}
        />

        {loading && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <Icon
              name="svg-spinners:ring-resize"
              size={18}
              className="text-body-muted"
            />
          </span>
        )}
      </div>

      {open && !disabled && (
        <div
          className="
            absolute
            left-0
            top-full
            z-50
            mt-1
            max-h-60
            w-full
            overflow-y-auto
            border border-hairline
            bg-white
            shadow-md
          "
        >
          {loading ? (
            <div className="px-4 py-3 text-sm text-body-muted">
              Searching...
            </div>
          ) : options.length > 0 ? (
            options.map((option) => {
              const isActive = option.value === value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`
                    flex w-full
                    items-center
                    px-4 py-3
                    text-left
                    text-sm
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
            })
          ) : (
            <div className="px-4 py-3 text-sm text-body-muted">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
