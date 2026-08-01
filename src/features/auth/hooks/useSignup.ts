import { useState } from "react";
import { signupUser } from "../services/auth.service";
import type { RegisterRequest, ErrorResponse } from "@/types/auth.type";
import axios from "axios";

export function useSignup() {
  const [signupData, setSignupData] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof RegisterRequest, value: string) => {
    setSignupData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signupUser(signupData);
    } catch (err) {
      const message = axios.isAxiosError<ErrorResponse>(err)
        ? (err.response?.data?.message ?? "Signup failed. Please try again.")
        : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    signupData,
    handleSignup,
    updateField,

    loading,
    error,
  };
}
