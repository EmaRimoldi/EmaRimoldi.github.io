import Image from "next/image";

import { HeroCornerFrame } from "@/components/decorative-elements";

export function HomeHero() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 text-center pt-6 md:pt-12">
      <HeroCornerFrame />

      <div className="relative z-10 w-full self-stretch space-y-5 md:space-y-8">
        <div className="mx-auto flex size-[clamp(9rem,18vw,13rem)] items-center justify-center rounded-full border border-[#c4b6a8]/90 bg-[#e2dad2]/75 p-1.5 shadow-[0_2px_14px_rgba(37,31,29,0.09)]">
          <Image
            src="/images/about/id.jpeg"
            alt="Emanuele Rimoldi"
            width={1254}
            height={1254}
            priority
            className="h-full w-full rounded-full object-cover"
            sizes="(max-width: 768px) 9rem, 13rem"
          />
        </div>

        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium tracking-[-0.02em] text-[#251f1d] leading-[1.1]">
          Emanuele Rimoldi
        </h1>

        <p className="home-hero-role">
          AI researcher focused on theory, agents, and the mathematical foundations
          of learning and useful models.
        </p>

        <blockquote className="mx-auto max-w-2xl space-y-3 px-5 py-2 md:px-8 md:py-4">
          <p className="home-hero-quote">
            &#8220;All models are wrong, but some are useful.&#8221;
          </p>
          <footer className="home-hero-quote-attribution">
            <cite>George E. P. Box</cite>,{" "}
            <cite>Empirical Model-Building and Response Surfaces</cite> (1987)
          </footer>
        </blockquote>
      </div>
    </main>
  );
}
