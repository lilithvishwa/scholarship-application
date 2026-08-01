import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableField from "./SortableField";
import type { FormField } from "../../types/FieldType";

interface CanvasProps {
  fields: FormField[];
  selectedFieldId: string | null;
  setSelectedField: (id: string) => void;
  onRemoveField: (id: string) => void;
  onDuplicateField: (id: string) => void;
}

function Canvas({
  fields,
  selectedFieldId,
  setSelectedField,
  onRemoveField,
  onDuplicateField,
}: CanvasProps) {
  return (
    <div className="space-y-3 p-8">
      <SortableContext
        items={fields.map((field) => field.id)}
        strategy={verticalListSortingStrategy}
      >
        {fields?.map((field) => (
          <SortableField
            key={field.id}
            field={field}
            selectedFieldId={selectedFieldId}
            onSelectField={setSelectedField}
            onRemoveField={onRemoveField}
            onDuplicateField={onDuplicateField}
          />
        ))}
      </SortableContext>
    </div>
  );
}

export default Canvas;
