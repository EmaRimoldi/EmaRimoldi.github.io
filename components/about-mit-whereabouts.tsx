"use client";

import { useEffect, useState } from "react";

const MIT_TIMEZONE = "America/New_York";

const COORDS = "(42.3601° N, 71.0942° W)";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: MIT_TIMEZONE,
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

/** MIT-local calendar day + fixed coordinates: “what day it is” and “where I am”. */
export function AboutMitWhereabouts() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  return (
    <p className="about-bio-section-label max-w-2xl">
      {now ? (
        <>
          {dateFmt.format(now)} @ {COORDS}
        </>
      ) : (
        "—"
      )}
    </p>
  );
}
