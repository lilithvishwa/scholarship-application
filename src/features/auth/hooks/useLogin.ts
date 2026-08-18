import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { useAuth } from "./useAuth";
import type { LoginRequest } from "@/types/auth.type";
import { getApiError } from "@/utils/get-api-error";
import { HTTP_STATUS } from "@/constants/http-status";
import { ERROR_CODES } from "@/constants/error-codes";

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
      localStorage.setItem("pendingLogin", "password");
    } catch (err: unknown) {
      const { status, error_code, message } = getApiError(err);
      let errorMessage = "Unable to login. Please try again later.";

      if (status === HTTP_STATUS.UNAUTHORIZED) {
        if (error_code === ERROR_CODES.INVALID_CREDENTIALS) {
          console.log(message);
          if (message === "Incorrect Email or Password.") {
            errorMessage = "Incorrect email or password.";
          } else {
            errorMessage =
              "Your email address hasn't been verified. Please verify your email before login.";
          }
        }
      }
      if (status === HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        errorMessage = "Please enter a valid email and password.";
      }

      if (status === HTTP_STATUS.NOT_FOUND) {
        if (error_code === ERROR_CODES.PASSWORD_NOT_FOUND) {
          navigate("/different-signin-method");
          localStorage.setItem("email", loginData.email);
        } else {
          errorMessage = "Invalid Email or Password.";
        }
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginData, updateField, handleLogin, isLoading, error };
}
