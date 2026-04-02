"use client";

import { SocialLinks } from "@/components/social-links";

/** Delay between each text block (seconds). */
const STEP_S = 0.5;

export function HomeHero() {
  const delay = (step: number) => ({ animationDelay: `${step * STEP_S}s` });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center pt-6 md:pt-12">
      <div className="space-y-8 md:space-y-12">
        <h1
          className="home-soft-reveal text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#262424] leading-[1.12]"
          style={delay(0)}
        >
          Emanuele Rimoldi
        </h1>

        <p
          className="home-soft-reveal text-lg md:text-xl text-[#6E6763] max-w-xl mx-auto leading-relaxed"
          style={delay(1)}
        >
          AI researcher exploring intelligence, learning, and biological computation.
        </p>

        <blockquote className="max-w-2xl mx-auto py-6 md:py-8">
          <p
            className="home-soft-reveal italic text-xl md:text-2xl lg:text-3xl text-[#262424] leading-[1.55]"
            style={delay(2)}
          >
            A temporary placeholder for future editorial text or a guiding statement.
          </p>
        </blockquote>
      </div>

      <div
        className="home-soft-reveal mt-16 md:mt-20 mb-16 md:mb-20"
        style={delay(3)}
      >
        <SocialLinks />
      </div>
    </main>
  );
}
