import { HeroCornerFrame } from "@/components/decorative-elements";

export function HomeHero() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-16 text-center pt-6 md:pt-12">
      <HeroCornerFrame />

      <div className="relative z-10 w-full self-stretch space-y-5 md:space-y-7">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-medium tracking-[-0.02em] text-[#251f1d] leading-[1.1]">
          Emanuele Rimoldi
        </h1>

        <p className="home-hero-tagline">
          AI researcher exploring intelligence, learning, and useful models:
          theory, agents, and the mathematical foundations of computation.
        </p>

        <blockquote className="home-hero-quote-block">
          <p className="home-hero-quote">
            &#8216;All models are wrong, but some are useful.&#8217;
          </p>
        </blockquote>
      </div>
    </main>
  );
}
