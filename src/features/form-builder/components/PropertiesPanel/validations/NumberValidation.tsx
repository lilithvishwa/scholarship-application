import { Input, ToggleSwitch } from "@shared/ui";

function NumberValidation({ field }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input label="MINIMUM VALUE" placeholder="1" />

      <Input label="MAXIMUM VALUE" placeholder="10" />

      <div className="flex justify-between items-center">
        <label className="caption text-body-muted">ALLOW DECIMALS</label>

        <ToggleSwitch
          checked={field.validation.allowDecimals}
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default NumberValidation;
