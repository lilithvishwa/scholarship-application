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

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}

        <Route element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/" element={<p>Landing Page....</p>} />
          <Route
            path="/different-signin-method"
            element={<SignInMethodPage />}
          />
          <Route path="/set-up-password" element={<SetPasswordPage />} />
        </Route>

        {/* ================= PROTECTED ROUTES ================= */}

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/scholarship" element={<p>Scholarship Page...</p>} />
            <Route path="/profile">
              <Route index element={<Navigate to="about" replace />} />
              <Route path="about" element={<AboutYouPage />} />
              <Route path="education" element={<EducationProfilePage />} />
              <Route path="family-finance" element={<FamilyFinancePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
