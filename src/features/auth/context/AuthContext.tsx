// imports
import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getCurrentUser, logoutUser } from "../services/auth.service";
import type { AuthUser } from "@/types/auth.type";

// types
interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  fetchCurrentUser: () => Promise<void>;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

/**
 * Manages the global authentication state of the application.
 * Stores the logged-in user, authentication status, and exposes
 * methods for fetching user information and managing auth state.
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const lastLogin = localStorage.getItem("pendingLogin") || "";
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Gets the current user, @getCurrentUser
   */
  const fetchCurrentUser = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getCurrentUser();
      setUser(data);
      localStorage.setItem("lastLogin", lastLogin);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
      localStorage.removeItem("pendingLogin");
    }
  }, []);

  /**
   * Hits logout endpoint then clears user backend cookie.
   */
  const logout = useCallback(async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    } finally {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        fetchCurrentUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
