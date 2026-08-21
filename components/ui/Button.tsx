import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "gold" | "outline-gold" | "outline-navy";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-800",
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-600 hover:text-white",
  "outline-gold":
    "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950",
  "outline-navy":
    "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
