// Responsible for:
// Personal details
// Parental details
// Address lookup
import { useCallback, useState } from "react";

import { useProfileCompletionContext } from "@/features/auth/context/ProfileCompletionContext";

import {
  createParentalDetails,
  createPersonalDetails,
  getLocationPincode,
} from "../services/profile-completion.service";

import type {
  AboutYouFormData,
  FamilyDetails,
  Address,
  LoadingState,
} from "@/features/auth/components/CompleteYourProfile/types/profile.types";

import { getApiError } from "@/utils/get-api-error";
import { ERROR_CODES } from "@/constants/error-codes";

function useProfileCompletion() {
  const { fetchProfileCompletionStatus } = useProfileCompletionContext();

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
    } catch (error: unknown) {
      console.error("Failed to create personal details:", error);
      throw error;
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
    } catch (error: unknown) {
      console.error("Failed to create personal details:", error);
      throw error;
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

  return {
    createProfile,
    createParentsDetails,
    getAddressDetails,

    address,
    loading,
  };
}

export default useProfileCompletion;
