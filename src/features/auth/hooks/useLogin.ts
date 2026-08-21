import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { login } from "../services/auth.service";
import { useAuth } from "./useAuth";

import { loginSchema, type LoginFormData } from "../schemas/login.schema";
import type { LoginRequest } from "@/types/auth.type";

import { getApiError } from "@/utils/get-api-error";
import { HTTP_STATUS } from "@/constants/http-status";
import { ERROR_CODES } from "@/constants/error-codes";

// type for validation error state
type LoginFormErrors = Partial<Record<keyof LoginFormData, string>>;

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
  const [validationErrors, setValidationErrors] = useState<LoginFormErrors>({});
  console.log(validationErrors);

  const updateField = (field: keyof LoginRequest, value: string) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setValidationErrors({ email: "", password: "" });
    setIsLoading(true);

    const result = loginSchema.safeParse(loginData);

    if (!result.success) {
      const tree = z.treeifyError(result.error);

      setValidationErrors({
        email: tree.properties?.email?.errors?.[0],
        password: tree.properties?.password?.errors?.[0],
      });

      setIsLoading(false);
      return;
    }

    try {
      await login(loginData);
      await fetchCurrentUser();
      navigate("/dashboard");
      localStorage.setItem("pendingLogin", "password");
    } catch (err: any) {
      const { status, error_code } = getApiError(err);

      console.error(err.response);
      if (error_code === ERROR_CODES.PASSWORD_NOT_FOUND) {
        navigate("/different-signin-method");
        localStorage.setItem("email", loginData.email);
      }

      let errorMessage = "Unable to login. Please try again later.";
      console.log(error_code);
      if (status === HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        errorMessage = "Please enter a valid email and password.";
      } else if (error_code === ERROR_CODES.INVALID_CREDENTIALS) {
        errorMessage = "Invalid Email or Password.";
      } else if (error_code === ERROR_CODES.EMAIL_NOT_VERIFIED) {
        errorMessage =
          "Your Email Address hasn't been verified yet. Please verify your email before login.";
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loginData,
    updateField,
    handleLogin,
    isLoading,
    error,
    validationErrors,
  };
}
