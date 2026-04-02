import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { ProfileImage } from "@/components/profile-image";

const SCHOLAR_BENEVENTANO =
  "https://scholar.google.com/citations?user=spL439oAAAAJ&hl=en";
const SCHOLAR_POGGIO =
  "https://scholar.google.com/citations?user=WgAGy7wAAAAJ&hl=en";

export default function AboutPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="reading" className="py-16 md:py-24">
        <div className="space-y-8 md:space-y-10">
          <ProfileImage />

          <div className="space-y-5 md:space-y-6 text-left font-serif text-xs md:text-sm leading-relaxed text-[#6E6763]">
            <p>
              Visiting researcher at MIT, working with{" "}
              <a
                href={SCHOLAR_BENEVENTANO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#262424] underline decoration-[#DDD4CE] underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Pierfrancesco Beneventano
              </a>{" "}
              and{" "}
              <a
                href={SCHOLAR_POGGIO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#262424] underline decoration-[#DDD4CE] underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Tomaso Poggio
              </a>
              ; MSc in Data Science at EPFL. I study agentic systems, the limits
              of AI, and what it means to treat intelligence through the lens of
              computation. 🧠
            </p>

            <p>
              Before that: foundation models at Logitech&apos;s CTO Office (with
              Jonathan Dan); bio-inspired TTS and spiking networks at Idiap (with
              Phil Garner).
            </p>

            <p>
              Path: Polimi (BSc, engineering physics) → ETH / EPFL / PSI (MSc,
              nuclear engineering) → EPFL Neuro-X. Same curiosity, sharper
              questions. 🐇
            </p>

            <p>
              Photography and music here are not decoration—they are how I notice
              light, time, and attention. 📷 🎵
            </p>

            <p className="text-[#262424] pt-2 border-t border-[#DDD4CE]/50">
              Collaborations and ideas welcome — say hi. ☕
            </p>
          </div>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
