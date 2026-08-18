import { Panel, Input, Button } from "@/shared/ui";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSetPassword from "../hooks/useSetPassword";
import type { SetPasswordRequest } from "@/types/auth.type";

function SetPasswordPage() {
  const { setPassword, loading, error } = useSetPassword();
  const [credentials, setCredentials] = useState<SetPasswordRequest>({
    password: "",
    confirmPassword: "",
  });
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log(token);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      return;
    }

    const success = await setPassword(token, credentials);

    if (success) {
      navigate("/login", {
        replace: true,
        state: {
          message: "Password set successfully. You can now log in.",
        },
      });
    }
  };
  return (
    <section className="flex justify-center p-8">
      <Panel className="space-y-6">
        <div className="text-center">
          <h2 className="application-card-heading">Set Your Password</h2>
          <p className="caption text-body-muted">
            Enter a new password to secure your account.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Password"
            placeholder="********"
            type="password"
            value={credentials.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <Input
            label="Confirm Password"
            placeholder="********"
            type="password"
            value={credentials.confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCredentials({
                ...credentials,
                confirmPassword: e.target.value,
              })
            }
          />
          {credentials.confirmPassword &&
            credentials.password !== credentials.confirmPassword && (
              <p className="text-sm text-error">Passwords do not match.</p>
            )}

          {error && <p className="text-sm text-error">{error}</p>}
          <Button
            type="submit"
            disabled={
              loading ||
              !token ||
              !credentials.password ||
              !credentials.confirmPassword ||
              credentials.password !== credentials.confirmPassword
            }
          >
            {loading ? "Saving..." : "Save Password"}
          </Button>
        </form>
      </Panel>
    </section>
  );
}

export default SetPasswordPage;
