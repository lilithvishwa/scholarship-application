import TextValidation from "./validations/TextValidation";
import NumberValidation from "./validations/NumberValidation";
import DateValidation from "./validations/DateValidation";
import DropdownValidation from "./validations/DropdownValidation";
import CheckboxValidation from "./validations/CheckboxValidation";
import FileUploadValidation from "./validations/FileUploadValidation";

import type { FormField } from "../../types/FieldType";

interface Props {
  field: FormField;
  updateField: (id: string, updates: Partial<FormField>) => void;
}
// const textarea = "text-area";

const validationMap = {
  text: TextValidation,
  "text-area": TextValidation,
  number: NumberValidation,
  date: DateValidation,
  select: DropdownValidation,
  radio: DropdownValidation,
  checkbox: CheckboxValidation,
  file: FileUploadValidation,
};

function ValidationProperties({ field, updateField }: Props) {
  const ValidationComponent = validationMap[field.type];
  // console.log(ValidationComponent);

  return (
    <div>
      {ValidationComponent ? (
        <ValidationComponent updateField={updateField} field={field} />
      ) : (
        <p>No validation available</p>
      )}
    </div>
  );
}

export default ValidationProperties;
