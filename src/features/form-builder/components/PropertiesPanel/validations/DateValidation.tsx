import { Input } from "@shared/ui";

function DateValidation() {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <Input label="MINIMUM DATE" placeholder="DD/MM/YYYY" type="date" />

      <Input label="MAXIMUM DATE" placeholder="DD/MM/YYYY" type="date" />
    </div>
  );
}

export default DateValidation;
