import type { AxiosError } from "axios";
import type { ApiErrorResponse } from "@/api/errors/api-error";

export function getApiError(error: unknown) {
  const axiosError = error as AxiosError<ApiErrorResponse>;

  return {
    status: axiosError.response?.status,
    type: axiosError.response?.data?.error?.type,
    error_code: axiosError.response?.data?.error?.error_code,
    message: axiosError.response?.data?.error?.message,
  };
}
