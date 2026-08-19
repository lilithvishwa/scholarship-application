import { Button, Icon } from "@/shared/ui";
import PanelCard from "@/shared/ui/Cards/Panel";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useVerifyEmail } from "../hooks/useVerifyEmail";

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log(token);
  const navigate = useNavigate();

  const { status, retry } = useVerifyEmail(token);

  const renderContent = () => {
    if (status === "verifying") {
      return (
        <div className="flex flex-col items-center justify-center gap-8 ">
          <div className="relative flex items-center justify-center">
            <img src={"VRX-logo.svg"} alt="VRX Logo" className="h-8 absolute" />
            <div className="w-20 h-20 rounded-full border-8 border-hairline border-t-black animate-spin" />
          </div>
          <h1 className="application-card-heading">Verifying your email....</h1>
          <p className="body text-center text-[#4D4D4D]">
            We are almost finished setting up your account. Please do not close
            or refresh this window.
          </p>
        </div>
      );
    }

    if (status === "success") {
      return (
        <div className="flex flex-col items-center justify-center gap-8 ">
          <div className="relative flex items-center justify-center">
            <Icon name="mdi:tick-circle" size={80} className="text-on-green" />
          </div>
          <h1 className="application-card-heading">Verification Successful</h1>
          <p className="body text-center  text-[#4D4D4D]">
            Thank you for confirming your email. Your account is now active  and
            ready to go.
          </p>
          <Button
            children="Continue to Dashboard"
            onClick={() => navigate("/profile")}
          />
        </div>
      );
    }
    if (status === "failed") {
      return (
        <div className="flex flex-col items-center justify-center gap-8 ">
          <div className="relative flex items-center justify-center">
            <Icon name="mdi:cross-circle" size={80} className="text-error" />
          </div>
          <h1 className="application-card-heading">
            This verification link has expired.
          </h1>
          <p className="body text-center  text-[#4D4D4D]">
            This link is no longer valid because it has expired. Please request
            a new verification email to continue.
          </p>
          <Button
            children="Resend Verification Link"
            onClick={() => navigate("/login")}
          />
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center gap-8 ">
        <div className="relative flex items-center justify-center">
          <Icon name="mdi:cross-circle" size={80} className="text-error" />
        </div>
        <h1 className="application-card-heading">
          This verification link is invalid.{" "}
        </h1>
        <p className="body text-center  text-[#4D4D4D]">
          This link is not recognized or may have been modified. Please request
          a new verification email to continue.
        </p>
        <Button children="Go to Homepage" onClick={() => navigate("/login")} />
      </div>
    );
  };

  return (
    <section className="flex items-center justify-center py-8 px-10 ">
      <PanelCard widthClass="w-175">{renderContent()}</PanelCard>
    </section>
  );
}

export default VerifyEmail;
