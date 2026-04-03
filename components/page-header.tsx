import type { ReactNode } from "react";

/** Minimal chapter-style divider — fine bronze hairlines and small center mark */
export function DecorativeRule({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-32 shrink-0 text-[#C9B5A0] ${className}`}
      viewBox="0 0 128 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line
        x1="0"
        y1="7"
        x2="50"
        y2="7"
        stroke="currentColor"
        strokeWidth="0.45"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity={0.65}
      />
      <line
        x1="78"
        y1="7"
        x2="128"
        y2="7"
        stroke="currentColor"
        strokeWidth="0.45"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity={0.65}
      />
      <path
        d="M64 4.8l2.2 2L64 8.8l-2.2-2L64 4.8z"
        fill="currentColor"
        fillOpacity={0.55}
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
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: PageHeaderProps) {
  const center = align === "center";
  const showTitle = title != null && title !== "";

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
    </header>
  );
}
