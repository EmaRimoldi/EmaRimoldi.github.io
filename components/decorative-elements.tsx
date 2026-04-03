/** Exhibition-style corner brackets around the landing hero */
export function HeroCornerFrame() {
  const arm = 20;
  const sw = 0.85;
  return (
    <div
      className="pointer-events-none absolute inset-3 sm:inset-5 md:inset-8"
      aria-hidden
    >
      <svg
        className="h-full w-full text-[#C9B5A0]"
        viewBox="0 0 100 100"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M ${arm} 0 L 0 0 L 0 ${arm}`}
          stroke="currentColor"
          strokeWidth={sw}
          vectorEffect="non-scaling-stroke"
          opacity={0.55}
        />
        <path
          d={`M ${100 - arm} 0 L 100 0 L 100 ${arm}`}
          stroke="currentColor"
          strokeWidth={sw}
          vectorEffect="non-scaling-stroke"
          opacity={0.55}
        />
        <path
          d={`M 0 ${100 - arm} L 0 100 L ${arm} 100`}
          stroke="currentColor"
          strokeWidth={sw}
          vectorEffect="non-scaling-stroke"
          opacity={0.55}
        />
        <path
          d={`M 100 ${100 - arm} L 100 100 L ${100 - arm} 100`}
          stroke="currentColor"
          strokeWidth={sw}
          vectorEffect="non-scaling-stroke"
          opacity={0.55}
        />
      </svg>
    </div>
  );
}

/** Centered ornament for footer: rule · diamond · rule */
export function FooterOrnament() {
  return (
    <div
      className="pointer-events-none flex items-center justify-center gap-2 text-[#C9B5A0]"
      aria-hidden
    >
      <span className="h-px w-10 bg-current opacity-50 sm:w-14" />
      <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 opacity-65">
        <path d="M5 0.8L9.2 5L5 9.2L0.8 5z" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-current opacity-50 sm:w-14" />
    </div>
  );
}

/** Hairline under page intro subtitle — same tone as `page-header-editorial` bottom rule */
export function PageIntroFlourish() {
  return (
    <div
      className="mt-6 h-px w-full bg-[#DDD4CE]/80 md:mt-7"
      aria-hidden
    />
  );
}
