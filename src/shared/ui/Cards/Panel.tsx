import type { ReactNode } from "react";

interface PanelCardProps {
  children: ReactNode;
}

function PanelCard({ children }: PanelCardProps) {
  return (
    <div className="space-y-6 w-130 rounded-lg border border-card-border bg-on-dark px-10 py-8 shadow-[2px_4px_10px_0px_#00000040]">
      {children}
    </div>
  );
}

export default PanelCard;
