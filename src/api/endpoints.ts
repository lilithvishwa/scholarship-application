/**
 * Defines all backend API endpoint paths in a single place.
 * Prevents hardcoded URLs across the application and makes
 * endpoint updates easier to maintain.
 */

export const AUTH_ENDPOINTS = {
  REGISTER: "/api/auth/sign-up",
  LOGIN: "/api/auth/login",
  GOOGLE_LOGIN: "/api/auth/google",
  MICROSOFT_LOGIN: "/api/auth/microsoft",
  USER: "/api/auth/me",
  LOGOUT: "/api/auth/logout",
} as const;

export const FORM_BUILDER_ENDPOINTS = {
  SAVEFORM: "/forms/d8010c01-a7ee-4fe7-b055-75673e38db08",
};

// form-id : "d8010c01-a7ee-4fe7-b055-75673e38db08"
