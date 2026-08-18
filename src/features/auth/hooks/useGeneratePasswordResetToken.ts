import { useState } from "react";
import { generatePasswordResetToken } from "../services/auth.service";

import type { GeneratePasswordResetTokenResponse } from "@/types/auth.type";

interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
      code?: string;
    };
  };
}

interface UseGeneratePasswordResetTokenReturn {
  generateToken: (
    payload: GeneratePasswordResetTokenResponse,
  ) => Promise<GeneratePasswordResetTokenResponse | null>;

  error: string | null;
  success: boolean;
  data: GeneratePasswordResetTokenResponse | null;
}

function useGeneratePasswordResetToken(): UseGeneratePasswordResetTokenReturn {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<GeneratePasswordResetTokenResponse | null>(
    null,
  );

  const generateToken = async (
    payload: GeneratePasswordResetTokenResponse,
  ): Promise<GeneratePasswordResetTokenResponse | null> => {
    setError(null);
    setSuccess(false);
    setData(null);

    try {
      const response = await generatePasswordResetToken(payload);
      console.log(response);
      setData(response);
      setSuccess(true);

      return response;
    } catch (error) {
      const apiError = error as ApiError;

      const message =
        apiError.response?.data?.message ||
        "Unable to generate password reset token. Please try again.";

      setError(message);

      return null;
    } finally {
    }
  };

  return {
    generateToken,
    error,
    success,
    data,
  };
}

export default useGeneratePasswordResetToken;
