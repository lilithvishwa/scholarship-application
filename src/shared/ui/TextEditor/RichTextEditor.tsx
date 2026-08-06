import { useEffect } from "react";
import { useEditor, EditorContent, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

interface RichTextEditorProps {
  label?: string;
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string | string[];
  editable?: boolean;
  className?: string;
}

export default function RichTextEditor({
  label,
  value = "",
  onChange,
  placeholder = "Start typing...",
  editable = true,
  className = "",
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
    ],
    content: value,
    editable,
    editorProps: {
      attributes: {
        class:
          "rte-prose min-h-30 px-4 py-3 text-sm leading-relaxed text-ink font-public focus:outline-none",
        "aria-label": label || "Rich text editor",
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    immediatelyRender: false,
  });
  const editorState: any = useEditorState({
    editor,
    selector: ({ editor }) => {
      if (!editor) {
        return {
          isBold: false,
          isItalic: false,
          isBulletList: false,
          isOrderedList: false,
          isEmpty: true,
        };
      }
      return {
        isBold: editor.isActive("bold"),
        isItalic: editor.isActive("italic"),
        isBulletList: editor.isActive("bulletList"),
        isOrderedList: editor.isActive("orderedList"),
        isEmpty: editor.isEmpty,
        isFocused: editor.isFocused, // add this
      };
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(value || "", false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, editor]);

  const placeholderLines = Array.isArray(placeholder)
    ? placeholder
    : placeholder
      ? [placeholder]
      : [];
  const isListPlaceholder = Array.isArray(placeholder);

  return (
    <div className={`w-full max-w-2xl ${className}`}>
      {label && <label className="caption text-ink mb-2 block">{label}</label>}

      <div className="overflow-hidden rounded-sm border border-hairline bg-white">
        {editable && <Toolbar editor={editor} state={editorState} />}

        <div className="relative">
          {editorState.isEmpty &&
            !editorState.isFocused &&
            placeholderLines.length > 0 &&
            (isListPlaceholder ? (
              <ul
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-3 list-disc pl-5 text-sm leading-relaxed text-body-muted"
              >
                {placeholderLines.map((line, i) => (
                  <li key={i} className="my-1">
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-3 text-sm text-body-muted"
              >
                {placeholderLines[0]}
              </span>
            ))}
          <EditorContent editor={editor} />
        </div>
      </div>

      {/*
        List styling for Tiptap output. Tailwind's Preflight strips default
        ul/ol markers globally, so they're reapplied here, scoped to
        .rte-prose so this never leaks into the rest of the app.
      */}
      <style>{`
        .rte-prose ul { list-style-type: disc; padding-left: 1.25rem; }
        .rte-prose ol { list-style-type: decimal; padding-left: 1.25rem; }
        .rte-prose li { margin: 0.25rem 0; }
        .rte-prose li p { margin: 0; }
        .rte-prose p { margin: 0; }
      `}</style>
    </div>
  );
}
