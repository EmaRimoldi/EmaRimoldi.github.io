"use client";

import { useEffect, useState } from "react";

const MIT_LINE = "Cambridge, MA — 42.3601° N, 71.0942° W";

export function AboutLocationClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const dateStr =
    now?.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) ?? null;
  const timeStr =
    now?.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }) ?? null;

  return (
    <div className="about-now-block space-y-2 pt-2">
      <p className="about-bio-section-label">Here &amp; now</p>
      <p className="about-body-text text-[#6E6763]">{MIT_LINE}</p>
      <p className="about-body-text tabular-nums text-[#6E6763]">
        {dateStr && timeStr ? (
          <>
            {dateStr} — {timeStr}
          </>
        ) : (
          <span className="text-[#9A928A]">—</span>
        )}
      </p>
    </div>
  );
}
