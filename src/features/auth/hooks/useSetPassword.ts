import { useState } from "react";
import type { SetPasswordRequest } from "@/types/auth.type";
import { setPassword as setPasswordRequest } from "../services/auth.service";

interface ApiError {
  response?: {
    status?: number;
    data?: {
      message?: string;
      error_code?: string;
    };
  };
}

interface UseSetPasswordReturn {
  setPassword: (token: string, payload: SetPasswordRequest) => Promise<boolean>;
  loading: boolean;
  error: string | null;
  success: boolean;
  reset: () => void;
}

function useSetPassword(): UseSetPasswordReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const setPassword = async (
    token: string,
    payload: SetPasswordRequest,
  ): Promise<boolean> => {
    if (loading) {
      return false;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await setPasswordRequest(token, payload);
      console.log(response);

      setSuccess(true);

      return true;
    } catch (error: any) {
      const apiError = error as ApiError;
      console.log(error.response);

      const message =
        apiError.response?.data?.error?.message ||
        "Unable to set your password. Please try again.";

      setError(message);

      return false;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return {
    setPassword,
    loading,
    error,
    success,
    reset,
  };
}

export default useSetPassword;
