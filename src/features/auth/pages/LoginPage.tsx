// Auth Components imports
import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin ";
import AuthDivider from "../components/AuthDivider";

function LoginPage() {
  return (
    <section className="flex min-h-full items-center justify-center px-6 py-12">
      <AuthCard>
        <div className="text-center">
          <h1 className="application-card-heading">Welcome Back</h1>
          <p className="text-body-muted helper-text">
            Log in to access your Scholarship Portal
          </p>
        </div>

        <LoginForm />

        <AuthDivider />

        <SocialLogin />

        <div className="text-center text-body-muted">
          By logging in, you agree to our{" "}
          <a
            href="/terms"
            className="text-cohere-black underline underline-offset-2"
          >
            Terms of Service
          </a>{" "}
          and
          <br />
          <a
            href="/privacy-policy"
            className="text-black underline underline-offset-2"
          >
            Privacy Policy.
          </a>
        </div>
      </AuthCard>
    </section>
  );
}

export default LoginPage;
