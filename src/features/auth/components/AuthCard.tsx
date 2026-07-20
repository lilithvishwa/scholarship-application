import type { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="space-y-6 w-130 rounded-lg border border-card-border bg-on-dark px-10 py-8 shadow-[2px_4px_10px_0px_#00000040]">
      {children}
    </div>
  );
}

export default AuthCard;
