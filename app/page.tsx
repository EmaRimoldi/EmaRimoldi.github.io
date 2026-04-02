import { PageShell } from "@/components/page-shell";
import { SocialLinks } from "@/components/social-links";

export default function HomePage() {
  return (
    <PageShell>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center pt-6 md:pt-12">
        <div className="space-y-8 md:space-y-12">
          {/* Name */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="font-mono text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight text-[#262424] leading-[1.1]">
              Emanuele Rimoldi
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#6E6763] max-w-xl mx-auto leading-relaxed">
              AI researcher exploring intelligence, learning, and biological computation.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="max-w-2xl mx-auto py-6 md:py-8">
            <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[#262424] leading-[1.5]">
              A temporary placeholder for future editorial text or a guiding statement.
            </p>
          </blockquote>
        </div>

        {/* Social Links */}
        <div className="mt-16 md:mt-20 mb-16 md:mb-20">
          <SocialLinks />
        </div>
      </main>
    </PageShell>
  );
}
