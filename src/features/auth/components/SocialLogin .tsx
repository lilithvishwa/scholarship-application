import { OAuthButton } from "@shared/ui";
import { AUTH_ENDPOINTS } from "@/api/endpoints";

function SocialLogin() {
  const googleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BACKEND}${AUTH_ENDPOINTS.GOOGLE_LOGIN}`;
  };

  const microsoftLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BACKEND}${AUTH_ENDPOINTS.MICROSOFT_LOGIN}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <OAuthButton
        iconName="flat-color-icons:google"
        iconSize={32}
        buttonName="Continue with Google"
        onClick={googleLogin}
      />
      <OAuthButton
        iconName="logos:microsoft-icon"
        iconSize={26}
        buttonName="Continue with Microsoft"
        onClick={microsoftLogin}
      />
    </div>
  );
}

export default SocialLogin;
