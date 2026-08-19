//Responsible for:
// Get academic records
// Create academic record
// Update academic record
// Delete academic record
// Academic status

import { useCallback, useEffect, useState } from "react";
import {
  createAcademicDetail,
  getAcademicDetails,
} from "../services/profile-completion.service";
import type { AcademicRecord } from "../components/CompleteYourProfile/types/profile.types";

function useAcademicDetails() {
  const [educationalDetails, setEducationalDetails] = useState<
    AcademicRecord[]
  >([]);

  const getEducationDetails = useCallback(async () => {
    try {
      const response = await getAcademicDetails();
      console.log(response);
      setEducationalDetails(response ?? []);
    } catch (error) {
      console.error(error.response);
    }
  }, []);

  const createEducationDetails = async (payload: AcademicRecord) => {
    try {
      const response = await createAcademicDetail(payload);
      console.log(response);
      const updatedEducationDetails = await getEducationDetails();
      console.log("updatedEducationDetails", updatedEducationDetails);
    } catch (err) {
      console.error(err.response);
    } finally {
    }
  };

  useEffect(() => {
    getEducationDetails();
  }, [getEducationDetails]);

  return {
    createEducationDetails,
    getEducationDetails,
    educationalDetails,
  };
}
export default useAcademicDetails;
