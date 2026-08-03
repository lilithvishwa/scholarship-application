import type { ReactNode } from "react";

interface PanelCardProps {
  children: ReactNode;
  className?: string;
  widthClass?: string;
}

function PanelCard({
  children,
  widthClass = "w-130",
  className,
}: PanelCardProps) {
  return (
    <div
      className={`space-y-6  rounded-lg border border-card-border bg-on-dark px-10 py-8 shadow-[2px_4px_10px_0px_#00000040] ${widthClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default PanelCard;
