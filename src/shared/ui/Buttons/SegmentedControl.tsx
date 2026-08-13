import clsx from "clsx";

interface SegmentedOption<T extends string> {
  label: string;
  value: T;
}

interface SegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  label?: string;
}

function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
  label,
}: SegmentedControlProps<T>) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="caption text-ink">{label}</label>}
      <div
        className={clsx(
          "flex w-full rounded-xs border border-hairline bg-soft-stone gap-4 p-1",
          className,
        )}
      >
        {options.map((option) => {
          const isSelected = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={clsx(
                "flex-1 rounded-xs p-1 action-button",
                isSelected
                  ? "bg-white text-ink shadow-sm"
                  : "bg-transparent text-ink ",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SegmentedControl;
