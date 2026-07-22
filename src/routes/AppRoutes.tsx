import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts";

// auth pages imports
import LoginPage from "../features/auth/pages/LoginPage";
import SignUp from "../features/auth/pages/SignUp";

// Dashboard pages imports
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

// Form builder pages imports
import BuilderPage from "@/features/form-builder/pages/BuilderPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forms/builder" element={<BuilderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
