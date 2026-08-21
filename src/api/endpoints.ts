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
  PERSONAL_DETAILS: "/api/profile/personal/",

  PARENTAL_DETAILS: "/api/profile/parental/",

  ACADEMIC_STATUS: "/api/profile/academic/status",
  ACADEMIC_DETAILS: "/api/profile/academic/",
  CREATE_ACADEMIC: "/api/profile/academic/",
  UPDATE_ACADEMIC: (levelOfEducation: string) =>
    `/api/profile/academic/${levelOfEducation}`,
  DELETE_ACADEMIC: (levelOfEducation: string) =>
    `/api/profile/academic/${levelOfEducation}`,
  COMPLETION_STATUS: "/api/profile/status",
  LOCATION_PINCODE: (pincode: string) =>
    `/api/profile/lookup/pincode/${pincode}`,
  COLLEGE_NAME: (collegeName: string) =>
    `/api/profile/lookup/college/${collegeName}`,
} as const;

export const PROFILE_VERIFICATION_ENDPOINTS = {
  INITIALIZE_VERIFICATION: "/api/profile/verification/initialize",

  COMPLETE_VERIFICATION: "/api/profile/verification/complete",

  MARK_VERIFICATION_FAILED: (mediaId: string) =>
    `/api/profile/verification/failed/${mediaId}`,

  GET_VERIFICATION: (id: string) => `/api/profile/verification/${id}`,
};
