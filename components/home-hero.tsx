"use client";

import { DecorativeRule } from "@/components/page-header";
import { SocialLinks } from "@/components/social-links";

/** Delay between each text block (seconds). */
const STEP_S = 0.5;

export function HomeHero() {
  const delay = (step: number) => ({ animationDelay: `${step * STEP_S}s` });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center pt-6 md:pt-12">
      <div className="space-y-8 md:space-y-12">
        <h1
          className="home-soft-reveal text-xl md:text-3xl lg:text-4xl font-normal tracking-tight text-[#262424] leading-[1.12]"
          style={delay(0)}
        >
          Emanuele Rimoldi
        </h1>

        <p
          className="home-soft-reveal text-sm md:text-base text-[#6E6763] max-w-xl mx-auto leading-relaxed"
          style={delay(1)}
        >
          AI researcher exploring intelligence, learning, and the mathematical
          foundations of theory and computation.
        </p>

        <div
          className="home-soft-reveal flex justify-center py-2 md:py-3"
          style={delay(2)}
          aria-hidden
        >
          <DecorativeRule className="opacity-85" />
        </div>

        <blockquote className="max-w-2xl mx-auto py-4 md:py-6 space-y-3">
          <p
            className="home-soft-reveal italic text-base md:text-lg lg:text-xl text-[#262424] leading-[1.5]"
            style={delay(3)}
          >
            The purpose of computing is insight, not numbers.
          </p>
          <footer
            className="home-soft-reveal text-[11px] md:text-xs not-italic text-[#6E6763]"
            style={delay(4)}
          >
            — Richard W. Hamming,{" "}
            <cite className="not-italic">
              Numerical Methods for Scientists and Engineers
            </cite>{" "}
            (1962)
          </footer>
        </blockquote>
      </div>

      <div
        className="home-soft-reveal mt-16 md:mt-20 mb-16 md:mb-20"
        style={delay(5)}
      >
        <SocialLinks />
      </div>
    </main>
  );
}
