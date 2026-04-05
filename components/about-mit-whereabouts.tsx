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

type AboutMitWhereaboutsProps = {
  /** Renders as inline text inside `<h1>` (no block elements). */
  asTitle?: boolean;
};

/** MIT-local calendar day + fixed coordinates: “what day it is” and “where I am”. */
export function AboutMitWhereabouts({ asTitle }: AboutMitWhereaboutsProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const line =
    now != null ? (
      <>
        {dateFmt.format(now)} @ {COORDS}
      </>
    ) : (
      "—"
    );

  if (asTitle) {
    return (
      <span className="mx-auto block max-w-2xl text-balance font-serif text-base font-medium leading-snug tracking-tight text-[#262424] md:text-lg">
        {line}
      </span>
    );
  }

  return <p className="about-bio-section-label max-w-2xl">{line}</p>;
}
