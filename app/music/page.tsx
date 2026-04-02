import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { AlbumCard } from "@/components/album-card";
import { musicItems } from "@/content/music-items";

export default function MusicPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <div className="space-y-3 mb-12 max-w-2xl font-serif">
          <p className="text-base md:text-lg text-[#262424] leading-relaxed">
            A curated collection of albums and artists that resonate with my
            creative practice and intellectual interests.
          </p>
          <p className="text-sm md:text-base text-[#6E6763] leading-relaxed">
            Cover art here uses neutral placeholders. Earlier we linked third-party
            cover URLs; those often fail on static sites and are unrelated to
            Spotify login — public album pages do not require your account.
          </p>
        </div>

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
