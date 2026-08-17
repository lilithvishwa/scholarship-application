import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Panel } from "@/shared/ui";
import SuccessMessage from "../components/SuccessMessage";
import useGeneratePasswordResetToken from "../hooks/useGeneratePasswordResetToken";

function SignInMethodPage() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const { generateToken, loading, error, success } =
    useGeneratePasswordResetToken();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await generateToken({
      email,
    });

    if (response) {
      setSuccessMessage(
        "Your password reset link has been sent to your email.",
      );
    }
  };

  return (
    <section className="flex items-center justify-center p-8">
      <Panel className="space-y-6">
        {successMessage && <SuccessMessage message={successMessage} />}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-on-grey flex items-center justify-center bg-light-grey rounded-lg h-12 w-12">
            <Icon name="streamline-sharp:information-circle-remix" size={32} />
          </div>
          <h2 className="application-card-heading">
            Different Sign-In Method Detected
          </h2>
          <p className="body text-body-muted">
            This account is associated with a different log-in method. Continue
            with your existing log-in method or set up a password.
          </p>
        </div>
        <div className="space-y-4">
          <Button
            children="Continue to Login"
            onClick={() => navigate("/login")}
          />
          <Button
            children="Set Up Password"
            variant="outline"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </Panel>
    </section>
  );
}

export default SignInMethodPage;
