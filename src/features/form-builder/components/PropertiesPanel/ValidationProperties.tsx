import TextValidation from "./validations/TextValidation";
import NumberValidation from "./validations/NumberValidation";
import DateValidation from "./validations/DateValidation";
import DropdownValidation from "./validations/DropdownValidation";
import CheckboxValidation from "./validations/CheckboxValidation";
import FileUploadValidation from "./validations/FileUploadValidation";

import type { FormField } from "../../types/FieldType";

interface Props {
  field: FormField;
  updateValidation: (
    fieldId: string,
    validation: Partial<FormField["validation"]>,
  ) => void;
}

const validationMap = {
  text: TextValidation,
  textarea: TextValidation,
  number: NumberValidation,
  date: DateValidation,
  dropdown: DropdownValidation,
  radio: DropdownValidation,
  checkbox: CheckboxValidation,
  file: FileUploadValidation,
};

function ValidationProperties({ field, updateValidation }: Props) {
  const ValidationComponent = validationMap[field.type];

  return (
    <div>
      {ValidationComponent ? (
        <ValidationComponent
          field={field}
          updateValidation={updateValidation}
        />
      ) : (
        <p>No validation available</p>
      )}
    </div>
  );
}

export default ValidationProperties;
