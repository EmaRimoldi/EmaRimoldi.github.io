import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PageHeader } from "@/components/page-header";

export default function PhotographyPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <PageHeader
          eyebrow="Visual"
          subtitle="A curated gallery is in progress. Thank you for your patience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="photo-placeholder-tile aspect-[3/2] rounded-xl border border-[#c4b6a8]/80 flex flex-col items-center justify-center gap-2 text-[#7d7268] font-serif text-xs md:text-sm px-4 text-center"
            >
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-[#958c84]">
                Placeholder
              </span>
              <span className="text-[#5e564e]">Image {i}</span>
            </div>
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
