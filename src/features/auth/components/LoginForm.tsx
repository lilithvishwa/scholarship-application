import { useLogin } from "../hooks/useLogin";

import { Input, Button } from "@shared/ui";

function LoginForm() {
  const {
    loginData,
    updateField,
    handleLogin,
    isLoading,
    error,
    validationErrors,
  } = useLogin();

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <Input
        label="Email Address"
        placeholder="Email (eg. student@university.edu)"
        // type="email"
        value={loginData.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("email", e.target.value)
        }
        errorMessage={validationErrors.email}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        value={loginData.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("password", e.target.value)
        }
        errorMessage={validationErrors.password}
      />
      {error && <p className="text-error disclaimer-text">{error}</p>}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
