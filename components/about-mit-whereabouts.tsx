"use client";

import { useEffect, useState } from "react";

const MIT_TIMEZONE = "America/New_York";

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
    <div className="about-bio-titoletto">
      <p className="about-bio-whoami-line font-serif text-[0.8125rem] leading-relaxed tracking-wide text-[#6E6763] md:text-[0.9rem]">
        <span className="font-medium text-[#262424]">Who am I?</span>{" "}
        42.3601° N, 71.0942° W
        {now ? `, ${dateFmt.format(now)}` : ", —"}
      </p>
    </div>
  );
}
