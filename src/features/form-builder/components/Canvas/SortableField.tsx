import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { DragHandle } from "./DragHandle";
import { FieldRenderer } from "./FieldRenderer";

import type { FormField } from "../../types/FieldType";

interface SortableFieldProps {
  field: FormField;
  selectedFieldId: string | null;
  onSelectField: (id: string) => void;
  onRemoveField: (id: string) => void;
  onDuplicateField: (id: string) => void;
}

function SortableField({
  field,
  selectedFieldId,
  onSelectField,
  onRemoveField,
  onDuplicateField,
}: SortableFieldProps) {
  const {
    setNodeRef,
    listeners,
    attributes,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: field.id,
    animateLayoutChanges: () => false,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => onSelectField(field.id)}
      className={`group relative p-4 max-h-75 ${
        selectedFieldId === field.id
          ? "border border-action-blue"
          : "border border-transparent"
      }`}
    >
      <DragHandle
        listeners={listeners}
        isDragging={isDragging}
        attributes={attributes}
        onRemove={() => onRemoveField(field.id)}
        onCopy={() => onDuplicateField(field.id)}
      />

      <div className="group-hover:ml-5 transition-all duration-450">
        <FieldRenderer field={field} />
      </div>
    </div>
  );
}

export default SortableField;
