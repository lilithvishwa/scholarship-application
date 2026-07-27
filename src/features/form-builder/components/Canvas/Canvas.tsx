import { DragHandle } from "./DragHandle";
import { FieldRenderer } from "./FieldRenderer";
import type { FormField } from "../../types/FieldType";

interface CanvasProps {
  fields: FormField[];
  selectedFieldId: string | null;
  onSelectField: (id: string) => void;
}

function Canvas({ fields, selectedFieldId, onSelectField }: CanvasProps) {
  return (
    <div className="space-y-3 p-8">
      {fields?.map((field) => (
        <div
          key={field.id}
          onClick={() => onSelectField(field.id)}
          className={`group relative p-4 max-h-75 ${
            selectedFieldId === field.id
              ? "border border-action-blue"
              : "border border-transparent"
          }`}
        >
          <DragHandle />
          <div className="group-hover:ml-5 transition-all duration-450">
            <FieldRenderer field={field} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Canvas;
