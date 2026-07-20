/**
 * Contains all authentication-related API functions such as
 * login, register, and fetching the current user. Separates
 * API communication from UI components for better maintainability.
 */

import { apiClient } from "@/api/apiClient";
import { AUTH_ENDPOINTS } from "@/api/endpoints";
import type {
  AuthUser,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "@/types/auth.type";

/**
 * Logs in a user with the given credentials.
 * @param payload - Email/username and password (see LoginRequest).
 * @returns The authenticated user's session data (e.g. token, user info).
 * @throws Propagates any error from apiClient (expected to be handled
 * by a global interceptor or by the calling code).
 */
export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>(
    AUTH_ENDPOINTS.LOGIN,
    payload,
  );

  return response.data;
};

/**
 * Fetches the currently authenticated user's profile.
 * Typically called on app load to restore session state.
 * @returns The current user's data.
 */
export const getCurrentUser = async (): Promise<AuthUser> => {
  const response = await apiClient.get<AuthUser>(AUTH_ENDPOINTS.USER);

  return response.data;
};

/**
 * Registers a new user account.
 * @param payload - New user's registration details (see RegisterRequest).
 * @returns The created user's data / confirmation response.
 */
export const signupUser = async (
  payload: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await apiClient.post<RegisterResponse>(
    AUTH_ENDPOINTS.REGISTER,
    payload,
  );

  return response.data;
};
