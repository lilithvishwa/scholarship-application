import { Input, Button, Icon } from "@shared/ui";
import { useSignup } from "../hooks/useSignup";
import type React from "react";
import SuccessMessage from "./SuccessMessage";

function SignUpForm() {
  const {
    signupData,
    updateField,
    handleSignup,
    loading,
    error,
    success,
    validationErrors,
  } = useSignup();
  console.log(signupData);

  return (
    <form className="space-y-4" onSubmit={handleSignup}>
      {success && <SuccessMessage message={success} />}

      <Input
        label="Name"
        placeholder="Name"
        type="text"
        value={signupData.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("name", e.target.value)
        }
        errorMessage={validationErrors?.name}
      />
      <Input
        label="Email Address"
        placeholder="Email"
        // type="email"
        value={signupData.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("email", e.target.value)
        }
        errorMessage={validationErrors?.email}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        value={signupData.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("password", e.target.value)
        }
        errorMessage={validationErrors?.password}
      />
      <Input
        label="Confirm Password"
        placeholder="Password"
        type="password"
        value={signupData.confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("confirmPassword", e.target.value)
        }
        errorMessage={validationErrors?.confirmPassword}
      />
      {error && <p className="text-error disclaimer-text">{error}</p>}
      <Button type="submit">
        {loading ? "Creating..." : "Create Account"}
      </Button>
    </form>
  );
}

export default SignUpForm;
