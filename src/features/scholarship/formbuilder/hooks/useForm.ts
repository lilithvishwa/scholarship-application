import { useState } from "react";
import { saveForm } from "../services/form-builder.service";
import type { FormField } from "../types/FieldType";

export function useForm() {
  const [error, setError] = useState<string | null>(null);

  const save = async (fields: FormField[]) => {
    try {
      setError(null);

      const response = await saveForm(fields);
      console.log(response);
      return response;
    } catch (err) {
      setError("Unable to save form");
      console.error(err?.response);
      throw err;
    }
  };

  return {
    save,
    error,
  };
}
