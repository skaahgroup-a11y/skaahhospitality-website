import type { ReactNode } from "react";

// Section paddings per docs/04: 96-128 px desktop, 56-72 px mobile.
const surfaces = {
  light: "bg-white",
  ice: "bg-ice-100",
  dark: "bg-navy-950 text-ice-100",
} as const;

export function Section({
  surface = "light",
  className = "",
  id,
  children,
  wide = false,
}: {
  surface?: keyof typeof surfaces;
  className?: string;
  id?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      data-surface={surface === "dark" ? "dark" : undefined}
      className={`py-14 md:py-28 ${surfaces[surface]} ${className}`}
    >
      <div className={wide ? "container-wide" : "container-site"}>
        {children}
      </div>
    </section>
  );
}
