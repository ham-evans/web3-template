import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  href?: string;
  textColor?: "dark" | "light";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium";
  variant?: "solid" | "outline";
  onClick?: any;
  disabled?: boolean;
  responsive?: boolean;
}

export default function Button({
  text,
  href,
  textColor = "light",
  fullWidth = false,
  type = "submit",
  size = "medium",
  variant = "solid",
  onClick,
  disabled = false,
  responsive = false,
}: ButtonProps) {
  const classes = clsx(
    "inline-block border border-turquoise hover:border-white rounded-md font-medium text-center",
    // Sizing
    { "block w-full": fullWidth },
    // Text color
    [
      textColor === "light" && "text-black hover:text-blue",
      textColor === "dark" && "text-blue hover:text-black",
    ],
    // Variants
    [
      variant === "solid" && {
        "bg-turquoise": true,
        "bg-turquoise/50": disabled,
      },
      variant === "outline" && "text-black hover:bg-turquoise",
    ],
    // Sizes and responsive sizes
    [
      responsive && "py-1 px-2 text-base sm:py-2 sm:px-4 sm:text-lg",
      !responsive && {
        "py-1 px-2 text-base": size === "small",
        "py-2 px-4 text-lg": size === "medium",
      },
    ]
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={classes}>{text}</a>
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
