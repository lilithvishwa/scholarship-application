import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { useAuth } from "./useAuth";
import type { LoginRequest, ErrorResponse } from "@/types/auth.type";
import axios from "axios";

/**
 * Encapsulates login form state, submission, loading and error handling.
 * Keeps LoginForm as a pure presentational component.
 */
export function useLogin() {
  const navigate = useNavigate();
  const { fetchCurrentUser } = useAuth();

  const [loginData, setLoginData] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof LoginRequest, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login(loginData);
      await fetchCurrentUser();
      navigate("/dashboard");
    } catch (err) {
      const message = axios.isAxiosError<ErrorResponse>(err)
        ? (err.response?.data?.message ?? "Login failed. Please try again.")
        : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginData, updateField, handleLogin, isLoading, error };
}
