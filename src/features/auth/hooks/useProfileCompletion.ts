// Responsible for:
// Personal details
// Parental details
// Completion status

import { useNavigate } from "react-router-dom";
import {
  createParentalDetails,
  createPersonalDetails,
  getLocationPincode,
  getProfileCompletionStatus,
} from "../services/profile-completion.service";
import type { AboutYouFormData, FamilyDetails } from "../types/profile.types";
import { useState } from "react";

function useProfileCompletion() {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    city: [],
    district: "",
    state: "",
    pincode: "",
  });

  const createProfile = async (payload: AboutYouFormData) => {
    console.log(payload);
    try {
      const response = await createPersonalDetails(payload);
      console.log(response);
      if (response) {
        navigate("/profile/education");
      }
    } catch (error: any) {
      console.error(error.response);
    }
  };

  const createParentsDetails = async (payload: Partial<FamilyDetails>) => {
    try {
      const response = await createParentalDetails(payload);
      console.log(response);
    } catch (error: any) {
      console.error(error.response);
    }
  };

  const completionStatus = async () => {
    try {
      const response = await getProfileCompletionStatus();
      console.log(response);
    } catch (error: any) {
      console.error(error.response);
    }
  };

  const getAddressDetails = async (pincode: string) => {
    try {
      const response = await getLocationPincode(pincode);
      // console.log(response);
      setAddress(response);
    } catch (error) {
      console.error(error.response);
    }
  };

  return {
    createProfile,
    createParentsDetails,
    completionStatus,
    getAddressDetails,

    address,
  };
}

export default useProfileCompletion;
