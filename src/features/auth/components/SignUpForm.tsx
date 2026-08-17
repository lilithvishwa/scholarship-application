import { Input, Button, Icon } from "@shared/ui";
import { useSignup } from "../hooks/useSignup";
import type React from "react";
import SuccessMessage from "./SuccessMessage";

function SignUpForm() {
  const { signupData, updateField, handleSignup, loading, error, success } =
    useSignup();
  console.log(error);

  return (
    <form className="space-y-4" onSubmit={handleSignup}>
      {success && <SuccessMessage message={success} />}

      <Input
        label="Name"
        placeholder="Enter your Name"
        type="text"
        value={signupData.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("name", e.target.value)
        }
      />
      <Input
        label="Email Address"
        placeholder="Enter your Email"
        type="email"
        value={signupData.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("email", e.target.value)
        }
      />
      <Input
        label="Password"
        placeholder="********"
        type="password"
        value={signupData.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("password", e.target.value)
        }
      />
      <Input
        label="Confirm Password"
        placeholder="********"
        type="password"
        value={signupData.confirm_password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("confirm_password", e.target.value)
        }
      />
      {error && <p className="text-error disclaimer-text">{error}</p>}
      <Button type="submit">
        {loading ? "Creating..." : "Create Account"}
      </Button>
    </form>
  );
}

export default SignUpForm;
