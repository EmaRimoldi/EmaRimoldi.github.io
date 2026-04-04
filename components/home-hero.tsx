"use client";

import { HeroCornerFrame } from "@/components/decorative-elements";
import { DecorativeRule } from "@/components/page-header";
import { SocialLinks } from "@/components/social-links";

/** Delay between each text block (seconds). */
const STEP_S = 0.5;

export function HomeHero() {
  const delay = (step: number) => ({ animationDelay: `${step * STEP_S}s` });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center pt-6 md:pt-12">
      <HeroCornerFrame />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-7 md:gap-9 self-stretch">
        <p
          className="home-soft-reveal text-lg font-normal leading-snug tracking-[-0.02em] text-[#262424] md:text-xl lg:text-2xl"
          style={delay(0)}
        >
          AI researcher exploring intelligence, learning, and useful models:
          theory, agents, and the mathematical foundations of computation.
        </p>

        <blockquote
          className="home-soft-reveal mx-auto w-full max-w-xl space-y-2.5 px-4 md:px-6"
          style={delay(1)}
        >
          <p className="text-base font-normal italic leading-[1.55] text-[#4A4540] md:text-lg lg:text-xl">
            All models are wrong, but some are useful.
          </p>
          <footer className="text-[11px] font-normal not-italic text-[#6E6763] md:text-xs">
            <cite className="not-italic">George E. P. Box</cite>,{" "}
            <cite className="not-italic">
              Empirical Model-Building and Response Surfaces
            </cite>{" "}
            (1987)
          </footer>
        </blockquote>

        <h1
          className="home-soft-reveal text-base font-medium leading-tight tracking-[-0.02em] text-[#8A8278] md:text-lg"
          style={delay(2)}
        >
          Emanuele Rimoldi
        </h1>

        <div
          className="home-soft-reveal flex justify-center py-1 md:py-2"
          style={delay(3)}
          aria-hidden
        >
          <DecorativeRule className="opacity-85" />
        </div>
      </div>

      <div
        className="home-soft-reveal relative z-10 mt-14 mb-16 md:mt-20 md:mb-20"
        style={delay(4)}
      >
        <SocialLinks />
      </div>
    </main>
  );
}
