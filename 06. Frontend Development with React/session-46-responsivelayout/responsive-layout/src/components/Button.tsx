import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
};

function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {

  const baseStyles =
    "px-5 py-2 rounded-lg font-semibold transition duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300",

    success:
      "bg-green-600 text-white hover:bg-green-700",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;