import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { ProfileImage } from "@/components/profile-image";
import { contactConfig } from "@/lib/site-config";

const SCHOLAR_BENEVENTANO =
  "https://scholar.google.com/citations?user=spL439oAAAAJ&hl=en";
const SCHOLAR_POGGIO =
  "https://scholar.google.com/citations?user=WgAGy7wAAAAJ&hl=en";

export default function AboutPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="reading" className="py-16 md:py-24">
        <div className="space-y-10 md:space-y-12">
          <ProfileImage />

          <div className="about-bio space-y-6 md:space-y-7 text-left font-serif text-sm md:text-[0.95rem] leading-[1.65] text-[#6E6763]">
            <p className="about-bio-greeting">Hi there 😄 I&apos;m Emanuele!</p>

            <p className="text-[#262424]">
              I&apos;m currently a Visiting Researcher at MIT, fortunately advised
              by{" "}
              <a
                href={SCHOLAR_BENEVENTANO}
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-link"
              >
                Pierfrancesco Beneventano
              </a>{" "}
              and{" "}
              <a
                href={SCHOLAR_POGGIO}
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-link"
              >
                Tomaso Poggio
              </a>
              . I work on agentic systems, fundamental limits of AI, and theorems
              about training neural networks.
            </p>

            <p>
              At Logitech&apos;s CTO office I researched foundation models with
              Jonathan Dan; at Idiap with Phil Garner I worked on bio-inspired TTS
              and spiking neural networks.
            </p>

            <div>
              <p className="about-bio-section-label">Education</p>
              <p>
                Polimi (BSc, engineering physics) → ETH Zurich / EPFL / PSI (MSc,
                nuclear engineering) → EPFL (MSc Neuro-X, Data Science &amp;
                Computational Neuroscience). Still the same person; the questions
                just got nosier 🐇
              </p>
            </div>

            <p>
              If you want to collaborate or swap ideas (coffee optional), say hi —{" "}
              I&apos;m always happy to learn from other people&apos;s notebooks 🤝
            </p>

            <div className="pt-6 mt-2 border-t border-[#DDD4CE]/60">
              <p className="about-bio-section-label mb-3">Where to find me</p>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-2 text-[#262424]">
                <li>
                  <a
                    href={contactConfig.email.href}
                    className="about-contact-link"
                  >
                    {contactConfig.email.value}
                  </a>
                </li>
                <li>
                  <a
                    href={contactConfig.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-link"
                  >
                    GitHub ({contactConfig.github.value})
                  </a>
                </li>
                <li>
                  <a
                    href={contactConfig.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={contactConfig.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-link"
                  >
                    Instagram ({contactConfig.instagram.value})
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
