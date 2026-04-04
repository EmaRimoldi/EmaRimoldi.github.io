"use client";

import { useEffect, useState } from "react";

/** Eastern Time — Cambridge, MA / MIT */
const MIT_TIMEZONE = "America/New_York";

const COORDINATES = "Cambridge, MA — 42.3601° N, 71.0942° W";

const timeFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: MIT_TIMEZONE,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const dateFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: MIT_TIMEZONE,
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function AboutMitWhereabouts() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="about-bio-titoletto space-y-1.5">
      <p className="about-bio-titoletto-coords">{COORDINATES}</p>
      <p
        className="about-bio-titoletto-time tabular-nums"
        aria-live="polite"
        aria-atomic="true"
      >
        {now ? (
          <>
            {dateFmt.format(now)} — {timeFmt.format(now)}
            <span className="about-bio-titoletto-tz"> MIT local</span>
          </>
        ) : (
          <span className="text-[#9A928A]">—</span>
        )}
      </p>
    </div>
  );
}
