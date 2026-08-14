import { Button, Icon } from "@/shared/ui";

interface KeyboardShortcutProps {
  label: string;
  keys: string;
}

const SHORTCUTS: KeyboardShortcutProps[] = [
  { label: "Approve", keys: "Shift + A" },
  { label: "Reject", keys: "Shift + R" },
  { label: "Next", keys: "→" },
];

function KeyboardShortcut({ label, keys }: KeyboardShortcutProps) {
  return (
    <span className="flex disclaimer-text text-on-grey items-center gap-1">
      <span className="">{label}:</span>
      <kbd className="inline-flex items-center rounded-xs bg-light-grey px-2 pt-0.5">
        {keys}
      </kbd>
    </span>
  );
}

function FloatingActionBar() {
  return (
    <div className="flex items-center justify-between gap-6 bg-white border border-hairline py-4 px-6 shadow-[2px_4px_10px_0px_#00000040]">
      <div className="space-y-1">
        <div className="flex justify-center items-center gap-2">
          <Icon name="fluent-mdl2:decision-solid" size={24} />
          <h3 className="body-large">Review Decision</h3>
        </div>
        <p className="disclaimer-text">
          Review applicant details and make approval decisions.
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-end gap-2">
          <Button variant="outline">Reject</Button>
          <Button>Approve</Button>
        </div>
        <div className="flex items-center justify-end gap-3 text-xs">
          {SHORTCUTS.map((shortcut, i) => (
            <>
              <KeyboardShortcut key={shortcut.label} {...shortcut} />
              {i < SHORTCUTS.length - 1 && <span className="">|</span>}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloatingActionBar;
