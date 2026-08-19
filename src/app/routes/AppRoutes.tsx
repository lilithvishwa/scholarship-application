import { AppLayout } from "@/layouts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  AboutYouPage,
  EducationProfilePage,
  FamilyFinancePage,
  LoginPage,
  Signup,
  VerifyEmail,
} from "@/features/auth/pages";

import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import ProtectedRoute from "./ProtectedRoute";
import SignInMethodPage from "@/features/auth/pages/SignInMethodPage";
import SetPasswordPage from "@/features/auth/pages/SetPasswordPage";

// PUBLIC pages import
import {
  AboutUsPage,
  HomePage,
  ScholarshipPage,
} from "@/features/public/pages";
import ProfileCompletionGuard from "./ProfileCompletionGuard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route element={<AppLayout variant="public" />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/scholarship" element={<ScholarshipPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Route>

        {/* ================= AUTH ROUTES ================= */}
        <Route element={<AppLayout variant="default" />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/different-signin-method"
            element={<SignInMethodPage />}
          />
          <Route path="/set-up-password" element={<SetPasswordPage />} />
        </Route>

        {/* ================= PROTECTED ROUTES ================= */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout variant="authenticated" />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/scholarships" element={<p>Scholarship Page...</p>} />

            {/*onBoarding profile completion check @ProfileCompletionGuard */}
            <Route element={<ProfileCompletionGuard />}>
              <Route path="/onboarding">
                <Route path="about" element={<AboutYouPage />} />
                <Route path="education" element={<EducationProfilePage />} />
                <Route path="family-finance" element={<FamilyFinancePage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
