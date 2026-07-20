import { OAuthButton } from "@shared/ui";

function SocialLogin() {
  const googleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BACKEND}/auth/login/google`;
  };

  const microsoftLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BACKEND}/auth/login/microsoft`;
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
