import { Button } from "@shared/ui";
import { useNavigate } from "react-router-dom";

type WelcomeBannerProps = {
  name: string | undefined;
  profileCompletion: number;
};

export function WelcomeBanner({ name, profileCompletion }: WelcomeBannerProps) {
  const navigate = useNavigate();
  const isProfileComplete: boolean = profileCompletion === 100;
  console.log(isProfileComplete);
  return (
    <div className="flex items-center justify-between rounded-lg bg-pale-blue p-8">
      <div className="flex-1 space-y-4">
        <h1 className="application-card-heading">
          {isProfileComplete ? "You're all set, " : "Welcome back, "}
          {name}.
        </h1>

        <p className="body-large max-w-4xl text-body-muted">
          {isProfileComplete
            ? "Your student status is verified and your profile is 100% complete. You can now browse your personalized scholarship matches and start submitting applications."
            : " You're seeing broad matches based on your education level. Add your field of study and location to unlock specific, high-value scholarships."}
        </p>

        <div className="flex items-center gap-4">
          <div className="h-2 w-50 overflow-hidden rounded-full bg-hairline">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${profileCompletion}%` }}
            />
          </div>

          <span className="reference-id text-body-muted">
            Profile {profileCompletion}% Complete
          </span>
        </div>
      </div>
      {!isProfileComplete && (
        <div className="ml-8 shrink-0">
          <Button
            children="Complete My Profile"
            onClick={() => navigate("/onboarding")}
          />
        </div>
      )}
    </div>
  );
}
