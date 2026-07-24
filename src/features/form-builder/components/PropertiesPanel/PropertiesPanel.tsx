import CommonProperties from "./CommonProperties";
import ValidationProperties from "./ValidationProperties";
import type { FormField } from "./FieldType";

function PropertiesPanel() {
  const field: FormField = {
    id: "123",
    type: "file",
    label: "",
    helperText: "",
    required: true,
    validation: {
      min: 1,
      max: 10,
      allowDecimals: true,
    },
  };

  return (
    <div className=" p-6 flex flex-col gap-8">
      <CommonProperties field={field} />

      <hr className="border-hairline" />

      <ValidationProperties field={field} />
    </div>
  );
}

export default PropertiesPanel;
