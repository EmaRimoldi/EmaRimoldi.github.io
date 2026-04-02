import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { ProfileImage } from "@/components/profile-image";

export default function AboutPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="reading" className="py-16 md:py-24">
        <div className="space-y-8 md:space-y-10">
          <ProfileImage />

          <div className="space-y-6 md:space-y-8 text-left font-serif">
            <p className="text-sm md:text-base leading-relaxed text-[#262424]">
              I am a Visiting Researcher at MIT, advised by Pierfrancesco
              Beneventano and Tomaso Poggio, and a Master&apos;s student in Data
              Science at EPFL. My work explores{" "}
              <span className="text-[#262424]">agentic systems</span>, the
              fundamental limits of AI, and the theoretical questions that surround
              them: what intelligence is, what computation is, and how intelligence
              may be understood through the lens of computation. 🧠
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#6E6763]">
              Previously, at Logitech&apos;s CTO Office, I worked with Jonathan Dan
              on foundation models; at Idiap, with Phil Garner, I worked on
              bio-inspired text-to-speech and spiking neural networks.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#6E6763]">
              My academic path has moved across disciplines without ever really
              changing its direction: Politecnico di Milano (BSc in Engineering
              Physics), ETH Zurich / EPFL / PSI (MSc in Nuclear Engineering), and
              EPFL (MSc Neuro-X in Data Science and Computational Neuroscience).
              Still the same person; the questions just got nosier. 🐇
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#6E6763]">
              Alongside research,{" "}
              <span className="text-[#262424]">photography</span> 📷 and{" "}
              <span className="text-[#262424]">music</span> 🎵 are part of how I pay
              attention to the world. I included them on this site because they say
              something that a CV cannot: how I notice, frame, and stay with things.
              These pages are a way to know me not only professionally, but also a
              little more personally.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#262424] pt-2 border-t border-[#DDD4CE]/50">
              If you&apos;d like to collaborate or exchange ideas, say hi — coffee
              optional. ☕
            </p>
          </div>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
