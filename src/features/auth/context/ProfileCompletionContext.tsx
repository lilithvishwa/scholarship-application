import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { getProfileCompletionStatus } from "../services/profile-completion.service";

import type { CompletionStatusResponse } from "../components/CompleteYourProfile/types/profile.types";

interface ProfileCompletionContextValue {
  completionStatus: CompletionStatusResponse;
  fetchingStatus: boolean;
  fetchProfileCompletionStatus: () => Promise<void>;
}

const ProfileCompletionContext =
  createContext<ProfileCompletionContextValue | null>(null);

const INITIAL_COMPLETION_STATUS: CompletionStatusResponse = {
  personalDetails: false,
  academicDetails: false,
  parentalDetails: false,
  idUploaded: false,
};

interface ProfileCompletionProviderProps {
  children: ReactNode;
}

export function ProfileCompletionProvider({
  children,
}: ProfileCompletionProviderProps) {
  const [completionStatus, setCompletionStatus] =
    useState<CompletionStatusResponse>(INITIAL_COMPLETION_STATUS);

  const [fetchingStatus, setFetchingStatus] = useState(true);

  const fetchProfileCompletionStatus = useCallback(async () => {
    try {
      setFetchingStatus(true);

      const response = await getProfileCompletionStatus();

      setCompletionStatus(response);
    } catch (error: unknown) {
      console.error("Failed to fetch profile completion status:", error);
    } finally {
      setFetchingStatus(false);
    }
  }, []);

  return (
    <ProfileCompletionContext.Provider
      value={{
        completionStatus,
        fetchingStatus,
        fetchProfileCompletionStatus,
      }}
    >
      {children}
    </ProfileCompletionContext.Provider>
  );
}

export function useProfileCompletionContext() {
  const context = useContext(ProfileCompletionContext);

  if (!context) {
    throw new Error(
      "useProfileCompletionContext must be used within ProfileCompletionProvider",
    );
  }

  return context;
}
