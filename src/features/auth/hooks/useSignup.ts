import { useState } from "react";
import { signupUser } from "../services/auth.service";
import type { RegisterRequest } from "@/types/auth.type";

export function useSignup() {
  const [signupData, setSignupData] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const updateField = (field: keyof RegisterRequest, value: string) => {
    setSignupData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await signupUser(signupData);
      console.log(response);
      setSuccess(
        "Please verify your email before logging in. Check your inbox for the verification link.",
      );
    } catch (err: any) {
      const status = err.response?.status;
      const errorType = err.response?.data?.error?.type;
      let message = "Unable to signup. Please try again later.";

      if (status === 409) {
        if (errorType === "UserAlreadyExistsError") {
          message = "User already exists. Please login.";
        } else {
          message = "Invalid credentials.";
        }
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    signupData,
    handleSignup,
    updateField,
    success,

    loading,
    error,
  };
}
