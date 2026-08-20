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
import type {
  AboutYouFormData,
  FamilyDetails,
} from "@/features/auth/components/CompleteYourProfile/types/profile.types";
import { useState } from "react";

interface CompletionStatusResponse {
  personalDetails: boolean;
  academicDetails: boolean;
  parentalDetails: boolean;
}

type LoadingState = {
  createProfile: boolean;
  createParentsDetails: boolean;
  getAddressDetails: boolean;
};

function useProfileCompletion() {
  const [completionStatus, setCompletionStatus] =
    useState<CompletionStatusResponse>({
      personalDetails: false,
      academicDetails: false,
      parentalDetails: false,
    });
  const [fetchingStatus, setFetchingStatus] = useState(true);
  const [loading, setLoading] = useState<LoadingState>({
    createProfile: false,
    createParentsDetails: false,
    getAddressDetails: false,
  });

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
      setLoading((prev) => ({ ...prev, createProfile: true }));

      const response = await createPersonalDetails(payload);
      console.log(response);
      if (response) {
        navigate("/onboarding/education");
      }
    } catch (error: any) {
      console.error(error.response);
    } finally {
      setLoading((prev) => ({ ...prev, createProfile: false }));
    }
  };

  const createParentsDetails = async (payload: Partial<FamilyDetails>) => {
    try {
      setLoading((prev) => ({ ...prev, createParentsDetails: true }));
      const response = await createParentalDetails(payload);
      console.log(response);
    } catch (error: any) {
      console.error(error.response);
    } finally {
      setLoading((prev) => ({ ...prev, createParentsDetails: false }));
    }
  };

  const getAddressDetails = async (pincode: string) => {
    try {
      setLoading((prev) => ({ ...prev, getAddressDetails: true }));
      const response = await getLocationPincode(pincode);
      // console.log(response);
      setAddress(response);
    } catch (error: any) {
      console.error(error.response);
    } finally {
      setLoading((prev) => ({ ...prev, getAddressDetails: false }));
    }
  };

  const fetchProfileCompletionStatus = async () => {
    try {
      setFetchingStatus(true);
      const response = await getProfileCompletionStatus();

      setCompletionStatus(response);
    } catch (error: unknown) {
      console.error("Failed to fetch profile completion status:", error);
    } finally {
      setFetchingStatus(false);
    }
  };

  return {
    createProfile,
    createParentsDetails,
    getAddressDetails,
    completionStatus,

    address,
    fetchProfileCompletionStatus,
    fetchingStatus,
    loading,
  };
}

export default useProfileCompletion;
