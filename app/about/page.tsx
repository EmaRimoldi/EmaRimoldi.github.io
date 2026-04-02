import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { ProfileImage } from "@/components/profile-image";

export default function AboutPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="reading" className="py-16 md:py-24">
        <div className="space-y-8 md:space-y-10">
          <ProfileImage />

          <div className="space-y-6 md:space-y-7 text-justify font-serif">
          <p className="text-[10px] md:text-xs leading-relaxed text-[#6E6763]">
            I am a Master's student in Data Science at EPFL and a visiting
            researcher at MIT. My work explores agentic systems and the broader
            questions that animate them: what intelligence is, what computation
            is, and how intelligence may be understood through the lens of
            computation. These questions resonate with the philosophical concerns
            that drive thinkers like Blaise Agüera y Arcas, who asks fundamental
            questions about the nature of mind and machine.
          </p>

          <p className="text-[10px] md:text-xs leading-relaxed text-[#6E6763]">
            I am drawn to problems at the intersection of theory and practice—where
            abstract principles about learning, adaptation, and reasoning meet the
            challenge of building systems that actually work. This is why I think
            carefully about architecture, about the role of structure in enabling
            intelligence, and about how iteration refines understanding. I believe
            that how we build systems shapes what kinds of intelligence emerge from them.
          </p>

          <p className="text-[10px] md:text-xs leading-relaxed text-[#6E6763]">
            Photography is how I see the world—an attentiveness to light, moment,
            and attention itself. Music is how I think in time. Landscapes and outdoor
            life ground me in physicality and movement, reminding me that understanding
            is not only intellectual but embodied.
          </p>
          </div>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
