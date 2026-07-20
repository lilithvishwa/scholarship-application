// import Auth components
import AuthCard from "../components/AuthCard";
import SignUpForm from "../components/SignUpForm";
import AuthDivider from "../components/AuthDivider";
import SocialLogin from "../components/SocialLogin ";

function SignUp() {
  return (
    <section className="flex min-h-full items-center justify-center px-6 py-10">
      <AuthCard>
        <div className="text-center">
          <h1 className="application-card-heading">Create Your Account</h1>
          <p className="text-body-muted helper-text">
            Secure access to the scholarship portal.
          </p>
        </div>
        <SignUpForm />
        <AuthDivider />
        <SocialLogin />
      </AuthCard>
    </section>
  );
}

export default SignUp;
