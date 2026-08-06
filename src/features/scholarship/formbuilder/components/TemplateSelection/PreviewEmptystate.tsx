import { PreviewTemplateEmptystate } from "@assets";

export default function PreviewEmptystate() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-18">
      <img
        src={PreviewTemplateEmptystate}
        alt="No template selected"
        className="h-51 w-auto"
      />

      <div className="space-y-3 text-center">
        <h3 className="field-group-heading">Preview Unavailable</h3>

        <p className="instruction-text text-body-muted">
          Select a scholarship from the left panel to display its preview.
        </p>
      </div>
    </div>
  );
}
