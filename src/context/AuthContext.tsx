/**
 * Manages the global authentication state of the application.
 * Stores the logged-in user, authentication status, and exposes
 * methods for fetching user information and managing auth state.
 */

import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { getCurrentUser } from "../features/auth/services/auth.service";
import type { AuthUser } from "@/types/auth.type";

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  fetchCurrentUser: () => Promise<void>;
  logout?: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getCurrentUser();
      setUser(data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // const logout = () => {
  //   setUser(null);
  // };

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  // console.log(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        fetchCurrentUser,
        // logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
