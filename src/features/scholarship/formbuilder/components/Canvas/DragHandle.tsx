import { Icon, IconButton } from "@/shared/ui";

interface DragHandleProps {
  onRemove: () => void;
  onCopy: () => void;
  listeners: any;
  attributes: any;
  isDragging: boolean;
  isActive: boolean;
}

export function DragHandle({
  onRemove,
  onCopy,
  listeners,
  attributes,
  isDragging,
  isActive,
}: DragHandleProps) {
  return (
    <div
      className={`pointer-events-none absolute left-0 top-0 flex h-full w-full items-center transition-opacity duration-450 ${
        isActive || isDragging
          ? "opacity-100"
          : "opacity-0 group-hover:opacity-100"
      }`}
    >
      {/* Drag Handle */}
      <div
        {...listeners}
        {...attributes}
        className={`pointer-events-auto flex h-full w-6 items-center justify-center rounded-s-xs bg-cohere-black ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <Icon
          name="fluent:re-order-dots-vertical-16-filled"
          size={16}
          className="text-white"
        />
      </div>

      {/* Right Side */}
      <div
        className={`relative h-full flex-1 rounded-e-xs border-2 border-l-0 ${
          isActive ? "border-action-blue" : "border-hairline"
        }`}
      >
        <div className="absolute right-0 flex gap-2 p-4 text-body-muted">
          <div className="pointer-events-auto">
            <IconButton
              icon="material-symbols:content-copy-outline-rounded"
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                onCopy();
              }}
              className="hover:text-ink"
            />
          </div>

          <div className="pointer-events-auto">
            <IconButton
              icon="material-symbols:delete-outline"
              size={16}
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="hover:text-red-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
