import { Icon } from "@shared/ui";

interface ButtonProps {
  iconName: string;
  buttonName: string;
  iconSize: number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

function OAuthButton({
  iconName,
  iconSize,
  buttonName,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={buttonName}
      className={`flex items-center justify-center space-x-6 shrink-0 border border-hairline reference-id bg-on-primary text-ink h-10.5 px-4 rounded-xs transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <Icon name={iconName} size={iconSize} aria-hidden="true" />
      <span>{buttonName}</span>
    </button>
  );
}

export default OAuthButton;
