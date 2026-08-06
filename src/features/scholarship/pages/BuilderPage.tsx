import { useEffect, useState } from "react";
import { FieldsEmptyState } from "@/assets";
import {
  BuilderHeader,
  FormSidebar,
  PropertiesPanel,
  Canvas,
} from "../formbuilder/components";
import type { FormField } from "../formbuilder/types/FieldType";
import { createField } from "../formbuilder/types/FieldFactory";
import { useForm } from "../formbuilder/hooks/useForm";
import { useNavigate } from "react-router-dom";

function BuilderPage() {
  const navigate = useNavigate();
  const { save } = useForm();

  const [fields, setFields] = useState<FormField[]>([]);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

  const handleSubmit = () => {
    console.log("Clicked");
    console.log(fields);
    if (fields.length === 0) return;
    save(fields);
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      console.log("Auto Saved Enabled...");
      // console.log(fields);
    }, 4000);

    return () => clearTimeout(Timer);
  }, [fields]);

  /**
   * Updates the properties of a form field
   * identified by its ID.
   */
  const updateField = (id: string, updates: Partial<FormField[]>) => {
    setFields((prev) =>
      prev.map((field) =>
        field.randomId === id ? { ...field, ...updates } : field,
      ),
    );
  };

  /**
   * Finds the currently selected field
   * from the form fields in Canvas component using the selected field ID.
   */
  const selectedField =
    fields.find((field) => field.randomId === selectedFieldId) ?? null;

  /**
   * Creates a new form field with default values and
   * appends it to the form builder @setFields state.
   *
   * @parms type The type of form field to create
   * (e.g. shorttext(text), longtext(textarea), dropdown, radio).
   */
  const addField = (type: FormField["type"]) => {
    const newField = createField(type);
    setFields((prev) => [...prev, newField]);
    setSelectedFieldId(newField.randomId);
  };

  /**
   * Removes the currently selected form field
   * from the form builder.
   */
  const removeField = (fieldId: string) => {
    setFields((prev) => prev.filter((field) => field.randomId !== fieldId));
  };

  /**
   *
   */
  const duplicateField = (fieldId: string) => {
    const fieldToCopy = fields.find((field) => field.randomId === fieldId);

    if (!fieldToCopy) return;
    const newField: FormField = {
      ...fieldToCopy,
      randomId: crypto.randomUUID(),
    };
    setFields((prev) => [...prev, newField]);
  };

  return (
    <div className="bg-white">
      <BuilderHeader handleSubmit={handleSubmit} />
      <div className="flex flex-1 overflow-hidden ">
        {/* Left Sidebar */}
        <aside className="w-69.75 shrink-0 overflow-y-auto border-r border-hairline">
          <FormSidebar onAddField={addField} />
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-y-auto">
          {fields.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <div className="space-y-6 text-center">
                <img
                  src={FieldsEmptyState}
                  alt="no fields added"
                  className="h-64 w-full"
                />
                <h2 className="text-lg font-medium">
                  Start building your form
                </h2>
                <p className="mt-2 text-caption text-body-muted">
                  Start Building Your Form Select or click a field from the left
                  menu to add it here.
                </p>
              </div>
            </div>
          ) : (
            <Canvas
              fields={fields}
              selectedFieldId={selectedFieldId}
              setSelectedField={setSelectedFieldId}
              onRemoveField={removeField}
              onDuplicateField={duplicateField}
              onReorderFields={setFields}
            />
          )}
        </main>

        {/* Right Properties */}
        <aside className="w-79.75 shrink-0 overflow-y-auto border-l border-hairline">
          <PropertiesPanel field={selectedField} updateField={updateField} />
        </aside>
      </div>
    </div>
  );
}

export default BuilderPage;
