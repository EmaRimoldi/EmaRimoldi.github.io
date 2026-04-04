"use client";

import { useState } from "react";

export function AboutPortrait() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <figure className="about-portrait-figure m-0 md:sticky md:top-28">
      <div className="aspect-[3/4] w-full max-w-[280px] mx-auto md:mx-0 overflow-hidden rounded-md border border-[#E8E2DC] bg-[#F3EFE9] shadow-sm">
        {!error ? (
          <img
            src="/images/about/id.png"
            alt="Emanuele Rimoldi"
            width={560}
            height={747}
            className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        ) : null}
        {error ? (
          <div className="flex h-full min-h-[200px] items-center justify-center px-4 text-center font-serif text-sm text-[#9A928A]">
            Photo unavailable
          </div>
        ) : null}
      </div>
    </figure>
  );
}
