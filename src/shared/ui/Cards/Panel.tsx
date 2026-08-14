import type { ReactNode } from "react";
import clsx from "clsx";

interface PanelCardProps {
  children: ReactNode;
  variant?: "panel" | "outlined";
  className?: string;
  widthClass?: string;
  paddingClass?: string;
}

function PanelCard({
  children,
  variant = "panel",
  widthClass = "w-130",
  className,
  paddingClass = "px-10 py-8",
}: PanelCardProps) {
  return (
    <div
      className={clsx(
        "space-y-6 border bg-on-dark ",
        widthClass,
        className,
        paddingClass,
        variant === "panel"
          ? "rounded-lg border-card-border shadow-[2px_4px_10px_0px_#00000040]"
          : "rounded-sm border-hairline",
      )}
    >
      {children}
    </div>
  );
}

export default PanelCard;
