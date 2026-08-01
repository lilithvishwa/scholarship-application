import CommonProperties from "./CommonProperties";
import ValidationProperties from "./ValidationProperties";
import type { FormField } from "../../types/FieldType";

interface Props {
  field: FormField | null;
  updateField: (id: string, updates: Partial<FormField>) => void;
}

function PropertiesPanel({ field, updateField }: Props) {
  if (!field) {
    return (
      <div className="flex h-full items-center justify-center p-6 text-center text-body-muted">
        Select a field to edit its properties.
      </div>
    );
  }

  return (
    <div className=" p-6 flex flex-col gap-8">
      <CommonProperties field={field} updateField={updateField} />

      <hr className="border-hairline" />

      <ValidationProperties field={field} updateField={updateField} />
    </div>
  );
}

export default PropertiesPanel;
