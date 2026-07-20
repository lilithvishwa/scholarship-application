import { Input, Button } from "@shared/ui";
import { useSignup } from "../hooks/useSignup";
import type React from "react";

function SignUpForm() {
  const { signupData, updateField, handleSignup, loading, error } = useSignup();

  return (
    <form className="space-y-4" onSubmit={handleSignup}>
      <Input
        label="Name"
        placeholder="Enter your Name"
        type="text"
        value={signupData.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("username", e.target.value)
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
      <Button name={loading ? "Creating..." : "Create Account"} type="submit" />
    </form>
  );
}

export default SignUpForm;
