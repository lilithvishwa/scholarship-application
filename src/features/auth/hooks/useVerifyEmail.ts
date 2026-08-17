import { useEffect, useRef, useState } from "react";
import { verifyEmail } from "../services/auth.service";

type VerificationStatus = "verifying" | "success" | "failed" | "invalid";

interface UseVerifyEmailResult {
  status: VerificationStatus;
  error: unknown;
  retry: () => void;
}

export const useVerifyEmail = (token: string | null): UseVerifyEmailResult => {
  const [status, setStatus] = useState<VerificationStatus>("verifying");

  const [error, setError] = useState<unknown>(null);

  const hasVerified = useRef(false);

  const verify = async () => {
    if (!token) {
      setStatus("invalid");
      return;
    }

    try {
      setStatus("verifying");
      setError(null);

      const response = await verifyEmail(token);
      console.log(response);

      setStatus("success");
    } catch (error: any) {
      setError(error);
      console.error(error.response);

      const statusCode = error?.response?.status;

      if (statusCode === 400 || statusCode === 404 || statusCode === 401) {
        setStatus("invalid");
      } else if (statusCode === 410) {
        setStatus("failed");
      } else {
        setStatus("failed");
      }
    }
  };

  useEffect(() => {
    if (hasVerified.current) {
      return;
    }

    hasVerified.current = true;

    verify();
  }, [token]);

  const retry = () => {
    hasVerified.current = false;
    verify();
  };

  return {
    status,
    error,
    retry,
  };
};
