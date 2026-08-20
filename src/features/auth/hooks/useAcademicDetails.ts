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
import type {
  AcademicRecord,
  College,
} from "../components/CompleteYourProfile/types/profile.types";
import { useNavigate } from "react-router-dom";
import { getApiError } from "@/utils/get-api-error";

type LoadingState = {
  createEducationDetails: boolean;
  getEducationDetails: boolean;
  getAcademicDetails: boolean;
  getCollege: boolean;
  updateEducationDetails: boolean;
};

function useAcademicDetails() {
  const [educationalDetails, setEducationalDetails] = useState<
    AcademicRecord[]
  >([]);
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState<LoadingState>({
    createEducationDetails: false,
    getEducationDetails: false,
    getAcademicDetails: false,
    getCollege: false,
    updateEducationDetails: false,
  });

  const [error, setError] = useState("");
  const getEducationDetails = useCallback(async () => {
    try {
      const response = await getAcademicDetails();
      // console.log("Educational Details");
      // console.log(response);
      setEducationalDetails(response ?? []);
    } catch (error: any) {
      console.error(error.response);
    } finally {
      setLoading((prev) => ({ ...prev, getEducationDetails: false }));
    }
  }, []);

  const navigate = useNavigate();

  const createEducationDetails = async (payload: AcademicRecord) => {
    try {
      setLoading((prev) => ({ ...prev, createEducationDetails: true }));
      const response = await createAcademicDetail(payload);
      console.log("Created response");
      console.log(response);
      await getEducationDetails();
    } catch (err: any) {
      console.error(err.response);
    } finally {
      setLoading((prev) => ({ ...prev, createEducationDetails: false }));
    }
  };

  const getAcademicsStatus = async () => {
    try {
      setLoading((prev) => ({ ...prev, getAcademicDetails: true }));
      const response = await getAcademicStatus();
      console.log("Academics Status");
      console.log(response);
      if (response) {
        navigate("/onboarding/family-finance");
      }
    } catch (error: any) {
      const { error_code } = getApiError(error);
      if (error_code === "ACADEMIC_WITH_ENROLLMENTS_NOT_FOUND") {
        setError("Academic Details with Enrollment not found");
      }
      console.error(error.response);
    } finally {
      setLoading((prev) => ({ ...prev, getAcademicDetails: false }));
    }
  };

  const getCollege = async (collegeId: string) => {
    try {
      setLoading((prev) => ({ ...prev, getCollege: true }));
      const response = await getCollegeDetails(collegeId);
      setColleges(response?.colleges ?? []);
    } catch (error: any) {
      console.error(error.response);
    } finally {
      setLoading((prev) => ({ ...prev, getCollege: false }));
    }
  };

  const updateEducationDetails = async (
    levelOfEducation: string,
    payload: AcademicRecord,
  ) => {
    try {
      setLoading((prev) => ({ ...prev, updateEducationDetails: true }));
      const response = await updateAcademicDetails(levelOfEducation, payload);
      console.log("Edited response");
      console.log(response);
      await getEducationDetails();
    } catch (error: any) {
      console.error(error.response);
    } finally {
      setLoading((prev) => ({ ...prev, updateEducationDetails: false }));
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
    loading,
    updateEducationDetails,
    deleteEducationDetails,
  };
}

export default useAcademicDetails;
