import { HeroCornerFrame } from "@/components/decorative-elements";
import { DecorativeRule } from "@/components/page-header";
import { SocialLinks } from "@/components/social-links";

export function HomeHero() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center pt-6 md:pt-12">
      <HeroCornerFrame />

      <div className="relative z-10 w-full self-stretch space-y-6 md:space-y-10">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium tracking-[-0.02em] text-[#262424] leading-[1.1]">
          Emanuele Rimoldi
        </h1>

        <p className="text-xs md:text-sm text-[#6E6763] max-w-xl mx-auto leading-relaxed">
          AI researcher exploring intelligence, learning, and useful models:
          theory, agents, and the mathematical foundations of computation.
        </p>

        <div className="flex justify-center py-2 md:py-3" aria-hidden>
          <DecorativeRule className="opacity-85" />
        </div>

        <blockquote className="mx-auto max-w-2xl space-y-3 px-5 py-2 md:px-8 md:py-4">
          <p className="italic text-sm md:text-base lg:text-lg text-[#262424] leading-[1.5]">
            All models are wrong, but some are useful.
          </p>
          <footer className="text-[10px] md:text-[11px] not-italic text-[#6E6763]">
            <cite className="not-italic">George E. P. Box</cite>,{" "}
            <cite className="not-italic">
              Empirical Model-Building and Response Surfaces
            </cite>{" "}
            (1987)
          </footer>
        </blockquote>
      </div>

      <div className="relative z-10 mt-16 md:mt-20 mb-16 md:mb-20">
        <SocialLinks />
      </div>
    </main>
  );
}
