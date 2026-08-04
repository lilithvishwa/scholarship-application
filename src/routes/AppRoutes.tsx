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

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forms/builder" element={<BuilderPage />} />
          <Route path="/scholarship/create" element={<BuildMethodPage />} />
          <Route path="/forms/builder/preview" element={<PreviewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
