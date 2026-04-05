"use client";

import { useEffect, useState } from "react";

const TZ = "America/New_York";

function formatHeadingDate(d: Date): string {
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

function buildLine(): string {
  return `${formatHeadingDate(new Date())}, Cambridge, MA, USA`;
}

/** Current calendar date (Eastern US) + place; updates on load and hourly for long sessions. */
export function AboutWhereaboutsHeading() {
  const [line, setLine] = useState<string | null>(null);

  useEffect(() => {
    setLine(buildLine());
    const id = setInterval(() => setLine(buildLine()), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="about-where-heading mx-auto block max-w-2xl text-center text-balance">
      {line ?? "\u00A0"}
    </span>
  );
}
