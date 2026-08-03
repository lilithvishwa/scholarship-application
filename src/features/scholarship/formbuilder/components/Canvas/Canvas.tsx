import { useState } from "react";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import {
  DndContext,
  DragOverlay,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import SortableField from "./SortableField";
import { DragHandle } from "./DragHandle";
import { FieldRenderer } from "./FieldRenderer";
import type { FormField } from "../../types/FieldType";

interface CanvasProps {
  fields: FormField[];
  selectedFieldId: string | null;
  setSelectedField: (id: string) => void;
  onRemoveField: (id: string) => void;
  onDuplicateField: (id: string) => void;
  onReorderFields: (fields: FormField[]) => void;
}

function Canvas({
  fields,
  selectedFieldId,
  setSelectedField,
  onRemoveField,
  onDuplicateField,
  onReorderFields,
}: CanvasProps) {
  const [activeFieldId, setActiveFieldId] = useState<string | null>(null);
  const activeField =
    fields.find((field) => field.randomId === activeFieldId) ?? null;

  const handleDragStart = (event: DragStartEvent) => {
    setActiveFieldId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((f) => f.randomId === active.id);
      const newIndex = fields.findIndex((f) => f.randomId === over.id);
      onReorderFields(arrayMove(fields, oldIndex, newIndex));
    }
    setActiveFieldId(null);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
    >
      <div className="space-y-3 p-8">
        <SortableContext
          items={fields.map((field) => field.randomId)}
          strategy={verticalListSortingStrategy}
        >
          {fields.map((field) => (
            <SortableField
              key={field.randomId}
              field={field}
              selectedFieldId={selectedFieldId}
              onSelectField={setSelectedField}
              onRemoveField={onRemoveField}
              onDuplicateField={onDuplicateField}
            />
          ))}
        </SortableContext>
      </div>

      {/* This is what the user actually sees while dragging */}
      <DragOverlay
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      >
        {activeField ? (
          <div className="relative max-h-75 bg-white p-4">
            <DragHandle
              listeners={{}}
              attributes={{}}
              isActive={true}
              isDragging={true}
              onRemove={() => {}}
              onCopy={() => {}}
            />
            <div className="ml-5">
              <FieldRenderer field={activeField} />
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Canvas;
