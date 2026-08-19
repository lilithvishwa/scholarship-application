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
  VERIFY_EMAIL: "/api/auth/verify-email",
  SET_PASSWORD: "/api/auth/set-password",
  GENERATE_PASSWORD_RESET_TOKEN: "/api/auth/generate-set-password-token",
} as const;

export const FORM_BUILDER_ENDPOINTS = {
  SAVEFORM: "/forms/d8010c01-a7ee-4fe7-b055-75673e38db08",
};

// form-id : "d8010c01-a7ee-4fe7-b055-75673e38db08"

export const PROFILE_COMPLETION_ENDPOINTS = {
  PERSONAL_DETAILS: "/api/profile-completion/personal-details",

  PARENTAL_DETAILS: "/api/profile-completion/parental-details",

  ACADEMIC_STATUS: "/api/profile-completion/academic-details/status",
  ACADEMIC_DETAILS: "/api/profile-completion/academic-details",
  CREATE_ACADEMIC: "/api/profile-completion/academic-details/create",
  UPDATE_ACADEMIC: (levelOfEducation: string) =>
    `/api/profile-completion/academic-details/update/${levelOfEducation}`,
  DELETE_ACADEMIC: (levelOfEducation: string) =>
    `/api/profile-completion/academic-details/delete/${levelOfEducation}`,
  COMPLETION_STATUS: "/api/profile-completion/status",
  LOCATION_PINCODE: (pincode: string) =>
    `/api/profile-completion/pincode/${pincode}`,
  COLLEGE_NAME: (collegeName: string) =>
    `/api/profile-completion/college/${collegeName}`,
} as const;
