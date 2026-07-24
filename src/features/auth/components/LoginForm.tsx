import { Input, Button } from "@shared/ui";
import { useLogin } from "../hooks/useLogin";

function LoginForm() {
  const { loginData, updateField, handleLogin, isLoading, error } = useLogin();

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <Input
        label="Email Address"
        placeholder="student@university.edu"
        type="email"
        value={loginData.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("email", e.target.value)
        }
      />
      <Input
        label="Password"
        placeholder="********"
        type="password"
        value={loginData.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateField("password", e.target.value)
        }
      />
      {error && <p className="text-error text-sm">{error}</p>}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
