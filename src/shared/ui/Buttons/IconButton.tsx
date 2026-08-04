import clsx from "clsx";
import Icon from "../Icon/Icon";

interface IconButtonProps {
  icon: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: number;
  disabled?: boolean;
  title?: string;
  className?: string;
  buttonName?: string;
}

export default function IconButton({
  title,
  icon,
  size = 24,
  disabled,
  onClick,
  className,
  buttonName,
}: IconButtonProps) {
  return (
    <button
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex p-0.5 items-center justify-center rounded-xs text-body-muted hover:bg-gray-100 transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className,
      )}
    >
      <Icon name={icon} size={size} />
      <p className="action-button">{buttonName}</p>
    </button>
  );
}
