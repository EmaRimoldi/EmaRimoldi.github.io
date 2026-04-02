import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PhotoCard } from "@/components/photo-card";
import { photoItems } from "@/content/photo-items";

export default function PhotographyPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photoItems.map((photo) => (
            <PhotoCard
              key={photo.id}
              image={photo.image}
              alt={photo.alt}
              aspectRatio={photo.aspectRatio}
            />
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
