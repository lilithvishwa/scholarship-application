// Responsible for:
// Personal details
// Parental details
// Completion status
import { useCallback, useState } from "react";
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
  CompletionStatusResponse,
  Address,
  LoadingState,
} from "@/features/auth/components/CompleteYourProfile/types/profile.types";

import { getApiError } from "@/utils/get-api-error";
import { ERROR_CODES } from "@/constants/error-codes";

function useProfileCompletion() {
  const navigate = useNavigate();

  const [completionStatus, setCompletionStatus] =
    useState<CompletionStatusResponse>({
      personalDetails: false,
      academicDetails: false,
      parentalDetails: false,
      idUploaded: false,
    });

  const [fetchingStatus, setFetchingStatus] = useState(true);

  const [loading, setLoading] = useState<LoadingState>({
    createProfile: false,
    createParentsDetails: false,
    getAddressDetails: false,
  });

  const [address, setAddress] = useState<Address>({
    city: [],
    district: "",
    state: "",
    pincode: "",
  });

  const createProfile = async (payload: AboutYouFormData) => {
    try {
      setLoading((prev) => ({
        ...prev,
        createProfile: true,
      }));

      await createPersonalDetails(payload);
      await fetchProfileCompletionStatus();

      navigate("/onboarding");
    } catch (error: unknown) {
      console.error("Failed to create personal details:", error);
    } finally {
      setLoading((prev) => ({
        ...prev,
        createProfile: false,
      }));
    }
  };

  const createParentsDetails = async (payload: Partial<FamilyDetails>) => {
    try {
      setLoading((prev) => ({
        ...prev,
        createParentsDetails: true,
      }));

      await createParentalDetails(payload);
      await fetchProfileCompletionStatus();
      navigate("/onboarding");
    } catch (error: unknown) {
      console.error("Failed to create parental details:", error);
    } finally {
      setLoading((prev) => ({
        ...prev,
        createParentsDetails: false,
      }));
    }
  };

  const getAddressDetails = useCallback(async (pincode: string) => {
    try {
      setLoading((prev) => ({
        ...prev,
        getAddressDetails: true,
      }));

      const response = await getLocationPincode(pincode);

      setAddress(response);

      return {
        success: true as const,
        error: null,
      };
    } catch (error: unknown) {
      const { error_code } = getApiError(error);

      setAddress({
        city: [],
        district: "",
        state: "",
        pincode: "",
      });

      if (error_code === ERROR_CODES.PINCODE_NOT_FOUND) {
        return {
          success: false as const,
          error: "Enter a valid pincode",
        };
      }

      return {
        success: false as const,
        error: "Unable to fetch address details",
      };
    } finally {
      setLoading((prev) => ({
        ...prev,
        getAddressDetails: false,
      }));
    }
  }, []);

  const fetchProfileCompletionStatus = useCallback(async () => {
    try {
      setFetchingStatus(true);

      const response = await getProfileCompletionStatus();

      setCompletionStatus(response);
    } catch (error: unknown) {
      console.error("Failed to fetch profile completion status:", error);
    } finally {
      setFetchingStatus(false);
    }
  }, []);

  return {
    createProfile,
    createParentsDetails,
    getAddressDetails,

    completionStatus,
    fetchProfileCompletionStatus,
    fetchingStatus,

    address,
    loading,
  };
}

export default useProfileCompletion;
