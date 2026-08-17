import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { useAuth } from "./useAuth";
import type { LoginRequest } from "@/types/auth.type";
import { errorCodeEnum } from "@/errors";

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
    } catch (err: any) {
      const status = err.response?.status;
      const errorType = err.response?.data?.error?.type;

      let message = "Unable to login. Please try again later.";

      if (status === 401) {
        if (errorType === errorCodeEnum.INVALID_CREDENTIALS) {
          message =
            "Your email address hasn't been verified. Please verify your email before login.";
        } else {
          message = "Incorrect email or password.";
        }
      } else if (status === 422) {
        message = "Please enter a valid email and password.";
      } else if (status >= 500) {
        message = "Server error while logging in.";
      } else if (status === 404) {
        if (errorType === "PasswordNotFoundError") {
          navigate("/different-signin-method");
        } else {
          message = "Invalid Email or Password.";
        }
      }
      setError(message);
      console.error(err.response);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginData, updateField, handleLogin, isLoading, error };
}
