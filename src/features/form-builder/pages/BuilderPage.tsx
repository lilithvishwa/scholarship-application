import { useState } from "react";
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

  const selectedField =
    fields.find((field) => field.id === selectedFieldId) ?? null;
  console.log(selectedField);

  const addField = (type: FormField["type"]) => {
    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: "untitled",
      helperText: "",
      required: false,
      option: [],
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
              <div className="text-center">
                <h2 className="text-lg font-medium">
                  Start building your form
                </h2>
                <p className="mt-2 text-body-muted">
                  Select a field from the left sidebar to add it to your form.
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
          <PropertiesPanel field={selectedField} />
        </aside>
      </div>
    </div>
  );
}

export default BuilderPage;
