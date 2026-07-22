import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  paddingClass?: string;
}

const variants = {
  primary: "bg-cohere-black text-on-primary hover:opacity-90",

  outline:
    "border border-cohere-black bg-transparent text-cohere-black hover:bg-gray-50",
};

function Button({
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
  fullWidth = true,
  className,
  paddingClass = "px-4 py-3",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "action-button inline-flex items-center justify-center gap-2 rounded-xs transition-colors",
        fullWidth ? "w-full" : "w-auto",
        variants[variant],
        className,
        paddingClass,
      )}
      {...props}
    >
      {leftIcon}

      <span>{children}</span>

      {rightIcon}
    </button>
  );
}

export default Button;
