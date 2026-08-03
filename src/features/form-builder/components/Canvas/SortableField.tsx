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
    id: field.randomId,
    animateLayoutChanges: () => false,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  };

  const isSelected = selectedFieldId === field.randomId;
  const isActive = isSelected || isDragging;

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => onSelectField(field.randomId)}
      className={`group relative max-h-75 p-4`}
    >
      <DragHandle
        listeners={listeners}
        isDragging={isDragging}
        isActive={isActive}
        attributes={attributes}
        onRemove={() => onRemoveField(field.randomId)}
        onCopy={() => onDuplicateField(field.randomId)}
      />

      <div
        className={`${isActive ? "ml-5 " : ""}group-hover:ml-5 transition-all duration-450`}
      >
        <FieldRenderer field={field} />
      </div>
    </div>
  );
}

export default SortableField;
