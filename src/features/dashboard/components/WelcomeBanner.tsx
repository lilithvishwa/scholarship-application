import { Button } from "@shared/ui";

type WelcomeBannerProps = {
  name: string | undefined;
  profileCompletion: number;
};

export function WelcomeBanner({ name, profileCompletion }: WelcomeBannerProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-pale-blue p-8">
      <div className="flex-1 space-y-4">
        <h1 className="application-card-heading">Welcome back, {name}.</h1>

        <p className="body-large max-w-4xl text-body-muted">
          You're seeing broad matches based on your education level. Add your
          field of study and location to unlock specific, high-value
          scholarships.
        </p>

        <div className="flex items-center gap-4">
          <div className="h-2 w-50 overflow-hidden rounded-full bg-hairline">
            <div className="h-full w-1/4 rounded-full bg-primary" />
          </div>

          <span className="reference-id text-body-muted">
            Profile {profileCompletion}% Complete
          </span>
        </div>
      </div>

      <div className="ml-8 shrink-0">
        <Button name="Complete My Profile" />
      </div>
    </div>
  );
}
