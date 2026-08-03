import { Panel } from "@shared/ui";
import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

function AuthCard({ children }: AuthCardProps) {
  return <Panel>{children}</Panel>;
}

export default AuthCard;
