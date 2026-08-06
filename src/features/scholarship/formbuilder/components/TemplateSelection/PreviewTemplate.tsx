import { Badge, Button, Icon } from "@/shared/ui";
import { FieldRenderer } from "../Canvas/FieldRenderer";

import type { FormField } from "../../types/FieldType";

const fields: FormField[] = [
  {
    randomId: crypto.randomUUID(),
    type: "text",
    label: "Email",
    helpText: "Enter your email",
    required: false,
    minLength: null,
    maxLength: null,
    regex: null,
  },
  {
    randomId: crypto.randomUUID(),
    type: "text-area",
    label: "Address",
    helpText: "Enter your address",
    required: false,
    minLength: null,
    maxLength: null,
  },
  {
    randomId: crypto.randomUUID(),
    type: "date",
    label: "Date of Birth",
    helpText: null,
    required: false,
    minDate: null,
    maxDate: null,
  },
  {
    randomId: crypto.randomUUID(),
    type: "date",
    label: "Date of Birth",
    helpText: null,
    required: false,
    minDate: null,
    maxDate: null,
  },
  {
    randomId: crypto.randomUUID(),
    type: "date",
    label: "Date of Birth",
    helpText: null,
    required: false,
    minDate: null,
    maxDate: null,
  },
  {
    randomId: crypto.randomUUID(),
    type: "date",
    label: "Date of Birth",
    helpText: null,
    required: false,
    minDate: null,
    maxDate: null,
  },
];

export default function PreviewTemplate() {
  return (
    <>
      <div className="px-8 py-4 border-b border-hairline">
        <p className="reference-id text-body-muted">READ-ONLY PREVIEW</p>
        <h3 className="application-card-heading">Fall 2025 Tuition Grant</h3>
        <Badge tag="undergraduate" />
      </div>
      <div className="space-y-6 px-8 py-6 h-90 overflow-y-auto">
        {fields.map((field) => (
          <FieldRenderer key={field.randomId} field={field} />
        ))}
      </div>
      <div className="border-t border-hairline p-6">
        <Button
          rightIcon={
            <Icon name="mi:arrow-up" className="rotate-90" size={20} />
          }
        >
          Duplicate & Edit Form
        </Button>
      </div>
    </>
  );
}
