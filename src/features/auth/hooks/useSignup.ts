import { z } from "zod";
import { useState } from "react";
import { signupUser } from "../services/auth.service";
import type { RegisterRequest } from "@/types/auth.type";
import { getApiError } from "@/utils/get-api-error";
import { HttpStatusCode } from "axios";
import { ERROR_CODES } from "@/constants/error-codes";
import { signUpSchema, type signUpSchemaData } from "../schemas/signUp.schema";

// type for validation error state
type signupFormErrors = Partial<Record<keyof signUpSchemaData, string>>;

export function useSignup() {
  const [signupData, setSignupData] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [validationErrors, setValidationError] = useState<signupFormErrors>({});

  const updateField = (field: keyof RegisterRequest, value: string) => {
    setSignupData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const result = signUpSchema.safeParse(signupData);

    if (!result.success) {
      const tree = z.treeifyError(result.error);
      // const confirmPasswordErrors =
      //   tree.properties?.confirmPassword?.errors ?? [];

      // const confirmPasswordError =
      //   confirmPasswordErrors.length > 1
      //     ? confirmPasswordErrors[confirmPasswordErrors.length - 1]
      //     : confirmPasswordErrors[0];

      console.log(tree);
      setValidationError({
        name: tree.properties?.name?.errors?.[0],
        email: tree.properties?.email?.errors?.[0],
        password: tree.properties?.password?.errors?.[0],
        confirmPassword: tree.properties?.confirmPassword?.errors?.[0],
      });

      return;
    }

    try {
      setLoading(true);
      const response = await signupUser(signupData);
      console.log(response);
      setSuccess(
        "Please verify your email before logging in. Check your inbox for the verification link.",
      );
    } catch (err: unknown) {
      const { status, error_code } = getApiError(err);
      let message = "Unable to signup. Please try again later.";
      // console.log(error_code, status);

      if (status === HttpStatusCode.Conflict) {
        if (error_code === ERROR_CODES.USER_ALREADY_EXISTS) {
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
    validationErrors,
  };
}
