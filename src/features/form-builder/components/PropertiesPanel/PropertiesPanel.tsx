import CommonProperties from "./CommonProperties";
import ValidationProperties from "./ValidationProperties";
import type { FormField } from "../../types/FieldType";

interface Props {
  field: FormField | null;
}

function PropertiesPanel({ field }: Props) {
  if (!field) {
    return (
      <div className="flex h-full items-center justify-center p-6 text-center text-body-muted">
        Select a field to edit its properties.
      </div>
    );
  }

  return (
    <div className=" p-6 flex flex-col gap-8">
      <CommonProperties field={field} />

      <hr className="border-hairline" />

      <ValidationProperties field={field} />
    </div>
  );
}

export default PropertiesPanel;
