import FieldItem from "./FieldItem";
import type { FieldType } from "../../types/FieldType";

interface FormSidebarProps {
  onAddField: (type: FieldType) => void;
}

function FormSidebar({ onAddField }: FormSidebarProps) {
  const textFields = [
    {
      label: "Short Text",
      icon: "mdi:text-short",
      type: "text",
    },
    {
      label: "Long Text",
      icon: "mdi:text-long",
      type: "text-area",
    },
    {
      label: "Number",
      icon: "mdi:numeric",
      type: "number",
    },
    {
      label: "Date Picker",
      icon: "mdi:calendar",
      type: "date",
    },
  ];

  const choicesFields = [
    {
      label: "Dropdown",
      icon: "cuida:dropdown-outline",
      type: "select",
    },
    {
      label: "Radio Buttons",
      icon: "fluent:radio-button-20-filled",
      type: "radio",
    },
    {
      label: "Checkboxes",
      icon: "mingcute:checkbox-fill",
      type: "checkbox",
    },
  ];

  const documentField = [
    {
      label: "File Upload",
      icon: "material-symbols:upload-file-outline",
      type: "file",
    },
  ];
  return (
    <div className="space-y-8 p-4">
      <div className="space-y-2">
        <h3 className="px-2 caption text-body-muted">TEXT & NUMBERS</h3>
        {textFields.map((field) => (
          <FieldItem
            key={field.type}
            icon={field.icon}
            label={field.label}
            onClick={() => onAddField(field.type)}
          />
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="px-2 caption text-body-muted">CHOICES</h3>
        {choicesFields.map((field) => (
          <FieldItem
            key={field.type}
            icon={field.icon}
            label={field.label}
            onClick={() => onAddField(field.type)}
          />
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="px-2 caption text-body-muted">DOCUMENTS</h3>
        {documentField.map((field) => (
          <FieldItem
            key={field.type}
            icon={field.icon}
            label={field.label}
            onClick={() => onAddField(field.type)}
          />
        ))}
      </div>
    </div>
  );
}

export default FormSidebar;
