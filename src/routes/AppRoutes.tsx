import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts";

// auth pages imports
import LoginPage from "../features/auth/pages/LoginPage";
import SignUp from "../features/auth/pages/SignUp";
// import Header from "@/shared/ui/Header/Header";
import Dashboard from "@/features/auth/components/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
