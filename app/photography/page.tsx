import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";

export default function PhotographyPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <div className="max-w-2xl mb-12 md:mb-14 space-y-4">
          <p className="font-serif text-base md:text-lg text-[#262424] leading-relaxed">
            This section is under development. A curated gallery will be added in a
            future version of the site.
          </p>
          <p className="font-serif text-sm md:text-base text-[#6E6763] leading-relaxed">
            Thank you for your patience — check back soon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-lg border border-dashed border-[#CCC4BC] bg-[#EDE8E2]/50 flex flex-col items-center justify-center gap-2 text-[#9A928A] font-serif text-sm md:text-base px-4 text-center"
            >
              <span className="text-xs tracking-[0.14em] uppercase text-[#B5ADA5]">
                Placeholder
              </span>
              <span>Image {i}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
