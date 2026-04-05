"use client";

import { useEffect, useState } from "react";

const TZ = "America/New_York";

function formatLetterDate(d: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).formatToParts(d);
  const month = parts.find((p) => p.type === "month")?.value ?? "";
  const dayRaw = parts.find((p) => p.type === "day")?.value ?? "1";
  const year = parts.find((p) => p.type === "year")?.value ?? "";
  const day = dayRaw.padStart(2, "0");
  return `${month} ${day}, ${year}`;
}

/** Parallel From / To block (letterhead). */
export function AboutLetterHead() {
  const [dateLine, setDateLine] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setDateLine(formatLetterDate(new Date()));
    tick();
    const id = setInterval(tick, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header
      className="about-letter-head mb-8 border-b border-[#c4b6a8]/55 pb-7 md:mb-9 md:pb-8"
      aria-label="Letter routing"
    >
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
        <div className="text-left">
          <p className="about-letter-kicker">From</p>
          <p className="about-letter-line">Emanuele Rimoldi</p>
          <p className="about-letter-line">Cambridge, MA, USA</p>
          <p className="about-letter-line about-letter-meta">
            {dateLine ?? "\u00A0"}
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="about-letter-kicker md:ml-0">To</p>
          <p className="about-letter-line">You</p>
          <p className="about-letter-line about-letter-to-place">
            wherever you happen to be
          </p>
          <p className="about-letter-line about-letter-to-place">
            reading this, on whatever screen
          </p>
        </div>
      </div>
    </header>
  );
}
