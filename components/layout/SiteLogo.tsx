import Image from "next/image";

// DECISION: the SKAAH Group emblem stands in for the SKAAH Hospitality logo at
// the client's request until the Hospitality identity is finalised. The
// delivered Hospitality lockups live in /brand/logo and /public/brand; swap
// them in here (mono-white horizontal lockup per docs/03 section 4) when
// instructed. Keeping the logo in one component makes that a one-file change.
export function SiteLogo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/brand/skaah-group-logo-square.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 rounded-full object-cover"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-[0.08em] ${
            variant === "light" ? "text-gold-500" : "text-gold-600"
          }`}
        >
          SKAAH
        </span>
        <span
          className={`text-[0.6rem] font-medium tracking-[0.32em] ${
            variant === "light" ? "text-ice-100" : "text-navy-900"
          }`}
        >
          HOSPITALITY
        </span>
      </span>
    </span>
  );
}
