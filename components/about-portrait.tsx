"use client";

import Image from "next/image";
import { useState } from "react";

const SRC = "/images/about/id.png";

export function AboutPortrait() {
  const [error, setError] = useState(false);

  return (
    <figure className="m-0 w-full max-w-[200px] shrink-0 sm:max-w-[210px] md:max-w-[min(100%,220px)]">
      <div
        className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#DDD4CE]/90 bg-[#EDE8E2]/50 shadow-[0_1px_8px_rgba(38,36,36,0.06)]"
        style={{ maxHeight: "min(52vh, 380px)" }}
      >
        {!error ? (
          <Image
            src={SRC}
            alt="Emanuele Rimoldi"
            width={560}
            height={747}
            className="h-full w-full object-cover object-[center_15%]"
            sizes="(max-width: 768px) 210px, 220px"
            priority
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex h-full min-h-[160px] items-center justify-center px-3 text-center font-serif text-xs text-[#9A928A]">
            Photo unavailable
          </div>
        )}
      </div>
    </figure>
  );
}
