/**
 * Defines all backend API endpoint paths in a single place.
 * Prevents hardcoded URLs across the application and makes
 * endpoint updates easier to maintain.
 */

export const AUTH_ENDPOINTS = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  GOOGLE_LOGIN: "/auth/login/google",
  MICROSOFT_LOGIN: "/auth/login/microsoft",
  USER: "/auth/me",
} as const;
