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
  const { setNodeRef, listeners, attributes, transform, transition } =
    useSortable({
      id: field.randomId,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => onSelectField(field.randomId)}
      className={`group relative p-4 max-h-75 ${
        selectedFieldId === field.randomId
          ? "border border-action-blue"
          : "border border-transparent"
      }`}
    >
      <DragHandle
        listeners={listeners}
        attributes={attributes}
        onRemove={() => onRemoveField(field.randomId)}
        onCopy={() => onDuplicateField(field.randomId)}
      />

      <div className="group-hover:ml-5 transition-all duration-450">
        <FieldRenderer field={field} />
      </div>
    </div>
  );
}

export default SortableField;
