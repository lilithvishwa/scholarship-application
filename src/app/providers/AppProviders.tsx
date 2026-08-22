import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/features/auth/context/AuthContext";
import { ProfileCompletionProvider } from "@/features/auth/context/ProfileCompletionContext";

interface AppProvidersProps {
  children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  return (
    <AuthProvider>
      <ProfileCompletionProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ProfileCompletionProvider>
    </AuthProvider>
  );
}

export default AppProviders;
