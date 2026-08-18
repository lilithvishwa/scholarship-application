import type { AxiosError } from "axios";
import { HTTP_STATUS } from "@/constants/http-status";

export function responseErrorInterceptor(error: AxiosError) {
  const status = error.response?.status;
  const url = error.config?.url;

  const isLoginRequest = url?.includes("/auth/login");
  const isSignupRequest = url?.includes("/auth/sign-up");

  if (
    status === HTTP_STATUS.UNAUTHORIZED &&
    !isLoginRequest &&
    !isSignupRequest
  ) {
    // logout
    // redirect to login
    console.error("Unauthorized:", error);
  }

  if (
    status === HTTP_STATUS.INTERNAL_SERVER_ERROR ||
    status === HTTP_STATUS.BAD_GATEWAY ||
    status === HTTP_STATUS.SERVICE_UNAVAILABLE ||
    status === HTTP_STATUS.GATEWAY_TIMEOUT
  ) {
    // global server error
    console.error("Server error:", error);
  }

  return Promise.reject(error);
}
