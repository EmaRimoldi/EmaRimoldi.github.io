import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";

export default function PhotographyPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <div className="max-w-2xl mb-12 md:mb-14 space-y-3 font-serif text-sm md:text-base text-[#6E6763] leading-relaxed">
          <p className="text-[#262424]">
            This section will host selected prints and series. For now, placeholders
            below mark the grid layout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="photo-placeholder-tile aspect-[3/2] rounded-xl border border-[#DDD4CE]/80 flex flex-col items-center justify-center gap-2 text-[#9A928A] font-serif text-sm md:text-base px-4 text-center"
            >
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#B5ADA5]">
                Placeholder
              </span>
              <span className="text-[#6E6763]">Image {i}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
