import { apiClient } from "@/api/apiClient";
import { PROFILE_COMPLETION_ENDPOINTS } from "@/api/endpoints";

import type {
  AboutYouFormData,
  AcademicRecord,
  FamilyDetails,
} from "../components/CompleteYourProfile/types/profile.types";

export const createPersonalDetails = async (payload: AboutYouFormData) => {
  const response = await apiClient.post(
    PROFILE_COMPLETION_ENDPOINTS.PERSONAL_DETAILS,
    payload,
  );

  return response.data;
};

export const createParentalDetails = async (
  payload: Partial<FamilyDetails>,
) => {
  const response = await apiClient.post(
    PROFILE_COMPLETION_ENDPOINTS.PARENTAL_DETAILS,
    payload,
  );

  return response.data;
};

export const getAcademicStatus = async () => {
  const response = await apiClient.get(
    PROFILE_COMPLETION_ENDPOINTS.ACADEMIC_STATUS,
  );

  return response.data;
};

export const getAcademicDetails = async () => {
  const response = await apiClient.get(
    PROFILE_COMPLETION_ENDPOINTS.ACADEMIC_DETAILS,
  );

  return response.data;
};

export const createAcademicDetail = async (payload: AcademicRecord) => {
  const response = await apiClient.post(
    PROFILE_COMPLETION_ENDPOINTS.CREATE_ACADEMIC,
    payload,
  );

  return response.data;
};

export const updateAcademicDetails = async (
  levelOfEducation: string,
  payload: AcademicRecord,
) => {
  const response = await apiClient.patch(
    PROFILE_COMPLETION_ENDPOINTS.UPDATE_ACADEMIC(levelOfEducation),
    payload,
  );

  return response.data;
};

export const deleteAcademicDetails = async (levelOfEducation: string) => {
  const response = await apiClient.delete(
    PROFILE_COMPLETION_ENDPOINTS.DELETE_ACADEMIC(levelOfEducation),
  );

  return response.data;
};

export const getProfileCompletionStatus = async () => {
  const response = await apiClient.get(
    PROFILE_COMPLETION_ENDPOINTS.COMPLETION_STATUS,
  );

  return response.data;
};

export const getLocationPincode = async (pincode: string) => {
  const response = await apiClient.get(
    PROFILE_COMPLETION_ENDPOINTS.LOCATION_PINCODE(pincode),
  );

  return response.data;
};

export const getCollegeDetails = async (collegeName: string) => {
  const response = await apiClient.get(
    PROFILE_COMPLETION_ENDPOINTS.COLLEGE_NAME(collegeName),
  );

  return response.data;
};
