import clsx from "clsx";
import { Icon } from "@shared/ui";

type BadgeVariant = "postgraduate" | "undergraduate";

interface BadgeProps {
  tag: BadgeVariant | string;
  iconName?: string;
}

function Badge({ tag, iconName = "mdi:graduation-cap-outline" }: BadgeProps) {
  const colors: Record<BadgeVariant | string, string> = {
    postgraduate: "bg-form-focus",
    undergraduate: "bg-soft-coral",
  };
  return (
    <span
      className={clsx(
        "inline-flex gap-1.25 items-center caption rounded-full px-2.25 py-1 text-white",
        colors[tag],
      )}
    >
      <Icon name={iconName} size={18} />
      <span className="capitalize mt-0">{tag}</span>
    </span>
  );
}

export default Badge;
