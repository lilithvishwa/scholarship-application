import { Input } from "@shared/ui";

function CheckboxValidation() {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input label="MINIMUM SELECTION" placeholder="1" />

      <Input label="MAXIMUM SELECTION" placeholder="3" />
    </div>
  );
}

export default CheckboxValidation;
