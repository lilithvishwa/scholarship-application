import TextValidation from "./validations/TextValidation";
import NumberValidation from "./validations/NumberValidation";
import DateValidation from "./validations/DateValidation";
import DropdownValidation from "./validations/DropdownValidation";
import CheckboxValidation from "./validations/CheckboxValidation";
import FileUploadValidation from "./validations/FileUploadValidation";

import type { FormField } from "../../types/FieldType";

interface Props {
  field: FormField;
}

const validationMap = {
  shorttext: () => <TextValidation showFormat={true} />,
  longtext: () => <TextValidation showFormat={false} />,
  number: NumberValidation,
  date: DateValidation,
  dropdown: DropdownValidation,
  radio: DropdownValidation,
  checkbox: CheckboxValidation,
  file: FileUploadValidation,
};

function ValidationProperties({ field }: Props) {
  const ValidationComponent = validationMap[field.type];

  return (
    <div>
      {ValidationComponent ? (
        <ValidationComponent field={field} />
      ) : (
        <p>No validation available</p>
      )}
    </div>
  );
}

export default ValidationProperties;
