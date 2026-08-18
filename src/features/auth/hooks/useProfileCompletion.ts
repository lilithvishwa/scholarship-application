// Responsible for:

import { useNavigate } from "react-router-dom";
import {
  createParentalDetails,
  createPersonalDetails,
} from "../services/profile-completion.service";
import type { AboutYouFormData, FamilyDetails } from "../types/profile.types";

// Personal details
// Parental details
// Completion status

function useProfileCompletion() {
  const navigate = useNavigate();

  const createProfile = async (payload: AboutYouFormData) => {
    console.log(payload);
    try {
      const response = await createPersonalDetails(payload);
      console.log(response);
      if (response) {
        navigate("/profile/education");
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const createParentsDetails = async (payload: FamilyDetails) => {
    try {
      const response = await createParentalDetails(payload);
      console.log(response);
    } catch (error) {
      console.error(error.response);
    }
  };

  return {
    createProfile,
    createParentsDetails,
  };
}

export default useProfileCompletion;
