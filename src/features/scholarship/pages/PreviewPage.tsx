import { useNavigate } from "react-router-dom";

import { PageHeader, IconButton, Button, Icon, Panel } from "@shared/ui";
import { FieldRenderer } from "../formbuilder/components/Canvas/FieldRenderer";
import { StepFooter } from "../components";

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
];

function PreviewPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeader
        left={
          <>
            <IconButton
              icon="ic:baseline-arrow-back"
              buttonName="Back to Editor"
              onClick={() => navigate("/forms/builder")}
            />
          </>
        }
        center={
          <>
            <h1 className="field-group-heading">Fall 2026 Tuition Grant</h1>
          </>
        }

        right={
          <>
            <Button
              variant="outline"
              leftIcon={<Icon name="tdesign:draft" size={24} />}
            >
              Save As Draft
            </Button>
          </>
        }
      />
      <section className="flex justify-center p-8">
        <Panel widthClass="w-192">
          <div className="space-y-6">
            {fields.map((field) => (
              <FieldRenderer key={field.randomId} field={field} />
            ))}
          </div>
          <StepFooter
            action={
              <>
                <Button
                  children="Submit Application"
                  fullWidth={false}
                  paddingClass="py-4 px-12"
                />
              </>
            }
          />
        </Panel>
      </section>
    </>
  );
}

export default PreviewPage;
