import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";

interface TagOption {
  id: string;
  label: string;
}

interface TagSelectProps {
  label?: string;
  options: TagOption[];
  value: string[];
  onChange: (ids: string[]) => void;
  placeholder?: string;
  className?: string;
}

export default function TagSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Search",
  className = "",
}: TagSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOptions = options.filter((opt) => value.includes(opt.id));
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((v) => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const removeOption = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== id));
  };

  return (
    <div className={`w-full max-w-2xl ${className}`} ref={containerRef}>
      {label && <label className="caption text-ink mb-2 block">{label}</label>}

      <div className="relative">
        <div
          onClick={() => {
            setIsOpen(true);
            inputRef.current?.focus();
          }}
          className={[
            "flex min-h-10.5 w-full cursor-text flex-wrap items-center gap-1.5",
            "rounded-sm border border-hairline bg-white px-3 py-2",
          ].join(" ")}
        >
          <Icon
            name="material-symbols:search"
            size={18}
            className="shrink-0 text-body-muted"
          />

          {selectedOptions.map((opt) => (
            <span
              key={opt.id}
              className="flex items-center gap-2 rounded-xs bg-border-light p-1.5 text-sm text-ink disclaimer-text"
            >
              {opt.label}
              <button
                type="button"
                aria-label={`Remove ${opt.label}`}
                onClick={(e) => removeOption(opt.id, e)}
                className="text-gray-500 hover:text-gray-800"
              >
                <Icon name="mdi:close" size={14} />
              </button>
            </span>
          ))}

          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={selectedOptions.length === 0 ? placeholder : ""}
            className="min-w-20 flex-1 border-none text-sm text-ink placeholder:text-body-muted focus:outline-none focus:ring-0"
          />

          <button
            type="button"
            aria-label="Toggle options"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            className="ml-auto shrink-0 text-gray-500"
          >
            <Icon
              name="mdi:chevron-down"
              size={24}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {isOpen && (
          <ul
            role="listbox"
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-hairline bg-white py-1 shadow-md"
          >
            {filteredOptions.length === 0 && (
              <li className="px-3 py-2 text-sm text-body-muted">No results</li>
            )}
            {filteredOptions.map((opt) => {
              const isSelected = value.includes(opt.id);
              return (
                <li
                  key={opt.id}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => toggleOption(opt.id)}
                  className={[
                    "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm",
                    "hover:bg-gray-50",
                    isSelected ? "text-ink" : "text-ink",
                  ].join(" ")}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="pointer-events-none h-3.5 w-3.5 rounded border-gray-300"
                  />
                  {opt.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
