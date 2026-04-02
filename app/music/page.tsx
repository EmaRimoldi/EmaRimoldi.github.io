import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { AlbumCard } from "@/components/album-card";
import { musicItems } from "@/content/music-items";

export default function MusicPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <p className="text-base md:text-lg text-[#262424] leading-relaxed mb-12 max-w-2xl font-serif">
          A curated collection of albums and artists that resonate with my
          creative practice and intellectual interests. Artwork is loaded from
          Spotify via the public oEmbed API at build time (no account required).
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {musicItems.map((album) => (
            <AlbumCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              image={album.image}
              spotifyUrl={album.spotifyUrl}
            />
          ))}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
