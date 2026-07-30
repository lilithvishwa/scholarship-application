import { useState } from "react";
import { FieldsEmptyState } from "@assets";
import {
  BuilderHeader,
  FormSidebar,
  PropertiesPanel,
  Canvas,
} from "../components";
import type { FormField } from "../types/FieldType";

function BuilderPage() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, ...updates } : field)),
    );
  };

  const updateValidation = (
    fieldId: string,
    validation: Partial<FormField["validation"]>,
  ) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              validation: {
                ...field.validation,
                ...validation,
              },
            }
          : field,
      ),
    );
  };

  const selectedField =
    fields.find((field) => field.id === selectedFieldId) ?? null;
  // console.log(selectedField);

  const addField = (type: FormField["type"]) => {
    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: "untitled",
      helperText: "",
      required: false,
      option: [],
      allowOther: false,
      validation: [],
    };

    setFields((prev) => [...prev, newField]);
  };

  console.log(fields);

  return (
    <div className="bg-white">
      <BuilderHeader />
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
              onSelectField={setSelectedFieldId}
            />
          )}
        </main>

        {/* Right Properties */}
        <aside className="w-79.75 shrink-0 overflow-y-auto border-l border-hairline">
          <PropertiesPanel
            field={selectedField}
            onUpdateField={updateField}
            updateValidation={updateValidation}
          />
        </aside>
      </div>
    </div>
  );
}

export default BuilderPage;
