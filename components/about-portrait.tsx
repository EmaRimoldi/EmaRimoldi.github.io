"use client";

import Image from "next/image";
import { useState } from "react";

const SRC = "/images/about/id.png";

export function AboutPortrait() {
  const [error, setError] = useState(false);

  return (
    <figure className="m-0 w-full max-w-[118px] shrink-0 sm:max-w-[128px] md:max-w-[136px]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-[#c4b6a8]/90 bg-[#e2dad2]/50 shadow-[0_1px_6px_rgba(37, 31, 29,0.05)]">
        {!error ? (
          <Image
            src={SRC}
            alt="Emanuele Rimoldi"
            width={560}
            height={747}
            className="h-full w-full object-cover object-[center_18%]"
            sizes="(max-width: 768px) 128px, 136px"
            priority
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex h-full min-h-[72px] items-center justify-center px-2 text-center font-serif text-[10px] text-[#7d7268]">
            Photo unavailable
          </div>
        )}
      </div>
    </figure>
  );
}
