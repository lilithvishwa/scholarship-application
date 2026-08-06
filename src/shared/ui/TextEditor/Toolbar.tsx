/**
 * ToolbarButton
 * Single formatting action button. Uses onMouseDown + preventDefault
 * so clicking the button never steals focus/selection from the editor.
 */
import Icon from "../Icon/Icon";

interface ToolbarButtonProps {
  onClick: () => void;
  isActive: boolean;
  label: string;
  children: React.ReactNode;
}

function ToolbarButton({
  onClick,
  isActive,
  label,
  children,
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isActive}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={[
        "inline-flex h-5 w-6 items-center justify-center rounded",
        "text-gray-600 transition-colors",
        "hover:bg-gray-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300",
        isActive ? "bg-gray-200 text-body-muted" : "bg-transparent",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <div className="mx-1 h-4 w-px bg-gray-300" aria-hidden="true" />;
}

export interface ToolbarActiveState {
  isBold: boolean;
  isItalic: boolean;
  isBulletList: boolean;
  isOrderedList: boolean;
}

interface ToolbarProps {
  editor: any;
  state: ToolbarActiveState;
}

export default function Toolbar({ editor, state }: ToolbarProps) {
  if (!editor) return null;

  return (
    <div
      role="toolbar"
      aria-label="Text formatting"
      className="flex items-center gap-1 border-b border-hairline bg-[#F8F9FA] px-4 py-2"
    >
      <ToolbarButton
        label="Italic"
        isActive={state.isItalic}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Icon name="gridicons:italic" size={16} />
      </ToolbarButton>

      <ToolbarButton
        label="Bold"
        isActive={state.isBold}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Icon name="gridicons:bold" size={16} />
      </ToolbarButton>

      <ToolbarDivider />

      <ToolbarButton
        label="Bulleted list"
        isActive={state.isBulletList}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <Icon name="material-symbols:list" size={16} />
      </ToolbarButton>

      <ToolbarButton
        label="Numbered list"
        isActive={state.isOrderedList}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <Icon name="boxicons:list-ol" size={16} />
      </ToolbarButton>
    </div>
  );
}
