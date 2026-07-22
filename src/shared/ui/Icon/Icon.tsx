import { Icon as IconifyIcon } from "@iconify/react";
import clsx from "clsx";

interface IconProps {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

function Icon({ name, size, width, height, className }: IconProps) {
  return (
    <IconifyIcon
      icon={name}
      width={size || width}
      height={size || height}
      className={clsx("inline-block shrink-0", className)}
    />
  );
}

export default Icon;
