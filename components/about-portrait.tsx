"use client";

import Image from "next/image";
import { useState } from "react";

const SRC = "/images/about/id.png";

export function AboutPortrait() {
  const [error, setError] = useState(false);

  return (
    <figure className="m-0 w-full max-w-[280px] shrink-0 md:max-w-[min(100%,300px)]">
      <div
        className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#DDD4CE]/90 bg-[#EDE8E2]/50 shadow-[0_2px_12px_rgba(38,36,36,0.07)]"
        style={{ maxHeight: "min(72vh, 520px)" }}
      >
        {!error ? (
          <Image
            src={SRC}
            alt="Emanuele Rimoldi"
            width={560}
            height={747}
            className="h-full w-full object-cover object-[center_15%]"
            sizes="(max-width: 768px) 280px, 300px"
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
