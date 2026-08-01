import { Icon, Button } from "@/shared/ui";
import { useForm } from "../hooks/useForm";
import type { FormField } from "../types/FieldType";

function BuilderHeader({ fields }: FormField[]) {
  const { save, error } = useForm();

  const handleSubmit = () => {
    console.log("Clicked");
    console.log(fields);
    if (fields.length === 0) return;
    save(fields);
  };
  return (
    <header className="flex h-18 items-center justify-between border-b border-hairline px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100">
          <Icon name="ic:baseline-arrow-back" size={20} />
        </button>

        <div className="h-6 w-px bg-hairline" />

        <h1 className="field-group-heading">Fall 2026 Tuition Grant</h1>
      </div>

      {/* Center */}
      <div className="flex items-center gap-2">
        <Icon
          name="gravity-ui:cloud-check"
          size={16}
          className="text-body-muted"
        />

        <span className="helper-text text-body-muted">Saved just now</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          leftIcon={<Icon name="tabler:eye" size={24} />}
        >
          Preview
        </Button>

        <Button
          variant="primary"
          paddingClass="px-8 py-3"
          onClick={handleSubmit}
        >
          Save Form
        </Button>

        <button className="flex h-full items-center justify-center text-body-muted">
          <Icon name="material-symbols:settings-outline" size={24} />
        </button>
      </div>
    </header>
  );
}

export default BuilderHeader;
