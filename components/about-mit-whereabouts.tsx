"use client";

import { useEffect, useState } from "react";

const MIT_TIMEZONE = "America/New_York";

const COORDINATES = "Cambridge, MA — 42.3601° N, 71.0942° W";

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
  }, []);

  return (
    <div className="about-bio-titoletto space-y-1.5">
      <p className="about-bio-titoletto-coords">{COORDINATES}</p>
      <p className="about-bio-titoletto-time">
        {now ? (
          <>
            {dateFmt.format(now)}
            <span className="about-bio-titoletto-tz"> — MIT local</span>
          </>
        ) : (
          <span className="text-[#9A928A]">—</span>
        )}
      </p>
    </div>
  );
}
