//Responsible for:
// Get academic records
// Create academic record
// Update academic record
// Delete academic record
// Academic status

import { useCallback, useEffect, useState } from "react";
import {
  createAcademicDetail,
  deleteAcademicDetails,
  getAcademicDetails,
  getAcademicStatus,
  getCollegeDetails,
  updateAcademicDetails,
} from "../services/profile-completion.service";
import type { AcademicRecord, College } from "../types/profile.types";
import { useNavigate } from "react-router-dom";
import { getApiError } from "@/utils/get-api-error";

function useAcademicDetails() {
  const [educationalDetails, setEducationalDetails] = useState<
    AcademicRecord[]
  >([]);
  const [colleges, setColleges] = useState<College[]>([]);

  const [error, setError] = useState("");
  const getEducationDetails = useCallback(async () => {
    try {
      const response = await getAcademicDetails();
      console.log("Educational Details");
      console.log(response);
      setEducationalDetails(response ?? []);
    } catch (error) {
      console.error(error.response);
    }
  }, []);

  const navigate = useNavigate();

  const createEducationDetails = async (payload: AcademicRecord) => {
    try {
      const response = await createAcademicDetail(payload);
      console.log("Created response");
      console.log(response);
      await getEducationDetails();
    } catch (err: any) {
      console.error(err.response);
    } finally {
    }
  };

  const getAcademicsStatus = async () => {
    try {
      const response = await getAcademicStatus();
      console.log("Academics Status");
      console.log(response);
      if (response) {
        navigate("/profile/family-finance");
      }
    } catch (error: any) {
      const { error_code } = getApiError(error);
      if (error_code === "ACADEMIC_WITH_ENROLLMENTS_NOT_FOUND") {
        setError("Academic Details with Enrollment not found");
      }
      console.error(error.response);
    }
  };
  const getCollege = async (collegeId: string) => {
    try {
      const response = await getCollegeDetails(collegeId);
      setColleges(response?.colleges ?? []);
    } catch (error) {
      console.error(error.response);
    }
  };

  const updateEducationDetails = async (
    levelOfEducation: string,
    payload: AcademicRecord,
  ) => {
    try {
      const response = await updateAcademicDetails(levelOfEducation, payload);
      console.log("Edited response");
      console.log(response);
      await getEducationDetails();
    } catch (error: any) {
      console.error(error.response);
    }
  };

  const deleteEducationDetails = async (levelOfEducation: string) => {
    try {
      const response = await deleteAcademicDetails(levelOfEducation);
      console.log("Deleted response");
      console.log(response);
      await getEducationDetails();
    } catch (error: any) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    getEducationDetails();
  }, [getEducationDetails]);

  return {
    createEducationDetails,
    getEducationDetails,
    getAcademicsStatus,
    educationalDetails,
    error,
    getCollege,
    colleges,
    updateEducationDetails,
    deleteEducationDetails,
  };
}

export default useAcademicDetails;
