import { useState } from "react";

import { uploadFileToS3 } from "@/utils/uploadFileToS3";

import type { InitializeVerificationPayload } from "../components/CompleteYourProfile/types/profile.types";

import {
  completeVerification,
  getVerification,
  initializeVerification,
  markVerificationFailed,
} from "../services/profile-completion.service";

function useProfileVerification() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const uploadVerificationDocument = async (
    payload: InitializeVerificationPayload,
    file: File,
  ) => {
    setIsUploading(true);
    setError(null);
    setUploadSuccess(false);

    let mediaId: string | null = null;

    try {
      // 1. Initialize verification
      const initializeResponse = await initializeVerification(payload);
      console.log("Initialize response:", initializeResponse);

      const { presignedUrl, mediaId: initializedMediaId } = initializeResponse;

      mediaId = initializedMediaId;

      // 2. Upload file to S3
      try {
        const uploadResponse = await uploadFileToS3(presignedUrl, file);
        console.log("Upload response:", uploadResponse);
      } catch (error) {
        // S3 upload actually failed
        if (mediaId) {
          try {
            const markResponse = await markVerificationFailed(mediaId);
            console.log("Mark response:", markResponse);
          } catch (failureError: any) {
            console.error(
              "Failed to mark verification as failed:",
              failureError.response,
            );
          }
        }

        throw error;
      }

      // 3. Notify backend that upload succeeded
      const completeResponse = await completeVerification(mediaId);
      console.log("Complete response:", completeResponse);

      // If completeVerification succeeds and also the verification flow is successful.

      setUploadSuccess(true);

      return completeResponse;
    } catch (error: any) {
      console.error("Profile verification failed:", error.response);

      setError(error);

      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const resetUploadState = () => {
    setUploadSuccess(false);
    setError(null);
  };

  //Get Profile Completion (LATER PURPOSE....)

  const fetchVerification = async (id: string) => {
    setError(null);

    try {
      return await getVerification(id);
    } catch (error) {
      console.error("Failed to fetch verification:", error);

      setError(error);

      throw error;
    }
  };

  return {
    uploadVerificationDocument,
    fetchVerification,
    isUploading,
    error,
    uploadSuccess,
    resetUploadState,
  };
}

export default useProfileVerification;
