import { useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useProfileCompletionContext } from "@/features/auth/context/ProfileCompletionContext";

function ProfileCompletionGuard() {
  const location = useLocation();

  const { fetchingStatus, completionStatus, fetchProfileCompletionStatus } =
    useProfileCompletionContext();

  console.log("guardStatus...", completionStatus);

  useEffect(() => {
    fetchProfileCompletionStatus();
  }, [fetchProfileCompletionStatus]);

  if (fetchingStatus) {
    return <div>loading...</div>;
  }

  const steps = [
    { key: "personalDetails", path: "/onboarding/about" },
    { key: "academicDetails", path: "/onboarding/education" },
    { key: "parentalDetails", path: "/onboarding/family-finance" },
    { key: "idUploaded", path: "/onboarding/verify-identity" },
  ] as const;

  // finds the next false state key from api reponse state
  const nextStep = steps.find((step) => !completionStatus[step.key]);
  console.log(nextStep);

  // check everything completed
  if (!nextStep) {
    return <Navigate to="/dashboard" replace />;
  }

  // checking the currect loaction path is not equal next path if not then replace location to next path
  if (location.pathname !== nextStep.path) {
    return <Navigate to={nextStep.path} replace />;
  }

  return <Outlet />;
}

export default ProfileCompletionGuard;
