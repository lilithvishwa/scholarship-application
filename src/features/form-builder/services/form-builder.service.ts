import { apiClient } from "@/api/apiClient";
import type { FormField } from "../types/FieldType";
import { FORM_BUILDER_ENDPOINTS } from "@/api/endpoints";

export const saveForm = async (payload: FormField[]) => {
  const response = await apiClient.patch(
    FORM_BUILDER_ENDPOINTS.SAVEFORM,
    payload,
  );
  return response.data;
};
