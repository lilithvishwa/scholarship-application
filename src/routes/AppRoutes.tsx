import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts";

// auth pages imports
import LoginPage from "../features/auth/pages/LoginPage";
import SignUp from "../features/auth/pages/SignUp";

// Dashboard pages imports
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

// scholarship pages imports
import BuilderPage from "@/features/scholarship/pages/BuilderPage";
import PreviewPage from "@/features/scholarship/pages/PreviewPage";
import BuildMethodPage from "@/features/scholarship/pages/BuildMethodPage";
import CreateScholarshipPage from "@/features/scholarship/pages/CreateScholarshipPage";
import TemplateSelectionPage from "@/features/scholarship/pages/TemplateSelectionPage";
import TablePage from "@/features/scholarship/components/TablePage";
import VerifyEmail from "@/features/auth/pages/VerifyEmail";
import AboutYouPage from "@/features/auth/pages/AboutYouPage";
import EducationProfilePage from "@/features/auth/pages/EducationProfilePage";
import FamilyFinancePage from "@/features/auth/pages/FamilyFinancePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forms/builder" element={<BuilderPage />} />
          <Route path="/scholarship/choose" element={<BuildMethodPage />} />
          <Route
            path="/scholarship/create"
            element={<CreateScholarshipPage />}
          />
          <Route path="/forms/builder/preview" element={<PreviewPage />} />
          <Route path="/forms/templates" element={<TemplateSelectionPage />} />
          <Route path="/forms/table" element={<TablePage />} />
        </Route>
        <Route path="/profile/complete" element={<AppLayout />}>
          <Route path="about" element={<AboutYouPage />} />
          <Route path="education" element={<EducationProfilePage />} />
          <Route path="family-finance" element={<FamilyFinancePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
