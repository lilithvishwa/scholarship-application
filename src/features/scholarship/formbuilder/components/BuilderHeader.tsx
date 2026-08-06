import { Icon, Button, IconButton, PageHeader } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

interface Props {
  handleSubmit: () => void;
}

function BuilderHeader({ handleSubmit }: Props) {
  const navigate = useNavigate();
  return (
    <PageHeader
      left={
        <>
          <IconButton
            icon="ic:baseline-arrow-back"
            onClick={() => navigate("/forms/templates")}
          />

          <div className="h-6 w-px bg-hairline" />

          <h1 className="field-group-heading">Fall 2026 Tuition Grant</h1>
        </>
      }

      center={
        <>
          <div className="flex items-center gap-2">
            <Icon
              name="gravity-ui:cloud-check"
              size={16}
              className="text-body-muted"
            />

            <span className="helper-text text-body-muted">Saved just now</span>
          </div>
        </>
      }
      right={
        <>
          <Button
            variant="outline"
            leftIcon={<Icon name="tabler:eye" size={24} />}
            onClick={() => navigate("/forms/builder/preview")}
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
        </>
      }
    />
  );
}

export default BuilderHeader;
