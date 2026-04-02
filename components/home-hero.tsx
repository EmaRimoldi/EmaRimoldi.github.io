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
          className="home-soft-reveal text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#262424] leading-[1.12]"
          style={delay(0)}
        >
          Emanuele Rimoldi
        </h1>

        <p
          className="home-soft-reveal text-base md:text-lg text-[#6E6763] max-w-xl mx-auto leading-relaxed"
          style={delay(1)}
        >
          AI researcher exploring intelligence, learning, and the mathematical
          foundations of theory and computation.
        </p>

        <blockquote className="max-w-2xl mx-auto py-6 md:py-8 space-y-4">
          <p
            className="home-soft-reveal italic text-lg md:text-xl lg:text-2xl text-[#262424] leading-[1.55]"
            style={delay(2)}
          >
            We can only see a short distance ahead, but we can see plenty there
            that needs to be done.
          </p>
          <footer
            className="home-soft-reveal text-xs md:text-sm not-italic text-[#6E6763]"
            style={delay(3)}
          >
            — Alan Turing,{" "}
            <cite className="not-italic">Computing Machinery and Intelligence</cite>{" "}
            (1950)
          </footer>
        </blockquote>
      </div>

      <div
        className="home-soft-reveal mt-16 md:mt-20 mb-16 md:mb-20"
        style={delay(4)}
      >
        <SocialLinks />
      </div>
    </main>
  );
}
