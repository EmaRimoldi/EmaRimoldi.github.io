import type { ReactNode } from "react";
import { PageIntroFlourish } from "@/components/decorative-elements";

/** Minimal chapter-style divider — bronze ink on paper */
export function DecorativeRule({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-36 shrink-0 text-[#C9B5A0] ${className}`}
      viewBox="0 0 144 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line
        x1="0"
        y1="8"
        x2="56"
        y2="8"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity={0.85}
      />
      <line
        x1="88"
        y1="8"
        x2="144"
        y2="8"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity={0.85}
      />
      <path
        d="M72 5.5l2.8 2.5L72 10.5l-2.8-2.5L72 5.5z"
        fill="currentColor"
        fillOpacity={0.75}
      />
    </svg>
  );
}

type PageHeaderProps = {
  eyebrow?: string;
  /** Large heading; omit to keep editorial frame (eyebrow, rule, subtitle) without a display title */
  title?: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Subtle ornament under subtitle (off when editorial bottom rule is enough) */
  showIntroFlourish?: boolean;
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  showIntroFlourish = true,
}: PageHeaderProps) {
  const center = align === "center";
  const showTitle = title != null && title !== "";
  const editorial = className.includes("page-header-editorial");
  const showFlourish =
    showIntroFlourish && subtitle != null && !editorial;

  return (
    <header
      className={`page-header-root mb-12 flex flex-col gap-3 md:mb-16 md:gap-4 ${center ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow ? <p className="page-header-eyebrow">{eyebrow}</p> : null}
      <DecorativeRule className={center ? "mx-auto" : ""} />
      {showTitle ? (
        <h1 className="page-header-title">{title}</h1>
      ) : null}
      {subtitle ? (
        <p
          className={`page-header-subtitle ${center ? "mx-auto max-w-xl" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      ) : null}
      {showFlourish ? <PageIntroFlourish centered={center} /> : null}
    </header>
  );
}
