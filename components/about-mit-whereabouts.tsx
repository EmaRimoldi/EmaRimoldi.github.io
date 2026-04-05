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
    <div className="about-bio-titoletto">
      <p className="about-bio-whoami-line font-serif text-[0.8125rem] leading-relaxed tracking-wide md:text-[0.9rem]">
        {now ? (
          <>
            <span className="font-medium text-[#262424]">
              {dateFmt.format(now)}
            </span>
            <span className="text-[#6E6763]"> @ {COORDS}</span>
          </>
        ) : (
          <span className="text-[#9A928A]">—</span>
        )}
      </p>
    </div>
  );
}
