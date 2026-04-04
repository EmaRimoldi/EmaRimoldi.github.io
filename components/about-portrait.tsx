"use client";

import Image from "next/image";
import { useState } from "react";

const SRC = "/images/about/id.png";

export function AboutPortrait() {
  const [error, setError] = useState(false);

  return (
    <figure className="about-portrait-figure m-0 md:sticky md:top-28">
      <div className="relative aspect-[3/4] w-full max-w-[280px] min-h-[200px] mx-auto md:mx-0 overflow-hidden rounded-md border border-[#E8E2DC] bg-[#F3EFE9] shadow-sm">
        {!error ? (
          <Image
            src={SRC}
            alt="Emanuele Rimoldi"
            width={560}
            height={747}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 280px, 320px"
            priority
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex h-full min-h-[200px] items-center justify-center px-4 text-center font-serif text-sm text-[#9A928A]">
            Photo unavailable
          </div>
        )}
      </div>
    </figure>
  );
}
