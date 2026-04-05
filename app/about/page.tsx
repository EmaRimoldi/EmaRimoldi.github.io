import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PageHeader } from "@/components/page-header";
import { AboutMitWhereabouts } from "@/components/about-mit-whereabouts";
import { AboutPortrait } from "@/components/about-portrait";
import { contactConfig } from "@/lib/site-config";

const SCHOLAR = {
  beneventano:
    "https://scholar.google.com/citations?user=spL439oAAAAJ&hl=en",
  poggio: "https://scholar.google.com/citations?user=WgAGy7wAAAAJ&hl=en",
  dan: "https://scholar.google.com/citations?user=0uHd7XIAAAAJ&hl=en",
  garner: "https://scholar.google.com/citations?user=c9nAX2AAAAJ&hl=en",
} as const;

function SupervisorLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="about-supervisor-link"
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        {/* Full-width intro; photo + bio share one row below so the portrait aligns with the narrative block */}
        <PageHeader
          className="page-header-editorial !mb-8 md:!mb-10"
          eyebrow="About"
          title={
            <>
              Hi there, I&apos;m Emanuele!{" "}
              <span
                className="about-wave-emoji"
                role="img"
                aria-label="Waving hand"
              >
                👋🏻
              </span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start md:gap-11 lg:gap-14">
          <aside className="order-2 flex justify-center md:order-1 md:col-span-4 md:justify-start md:pt-px">
            <AboutPortrait />
          </aside>

          <div className="order-1 md:order-2 md:col-span-8">
            <div className="about-bio space-y-6 md:space-y-7 text-left font-serif text-sm md:text-[0.95rem] leading-[1.72] text-[#6E6763]">
              <div className="space-y-3 md:space-y-3.5">
                <AboutMitWhereabouts />
                <p>
                  I&apos;m a Visiting Researcher at MIT, where I&apos;m advised by{" "}
                  <SupervisorLink href={SCHOLAR.beneventano}>
                    Pierfrancesco Beneventano
                  </SupervisorLink>{" "}
                  and{" "}
                  <SupervisorLink href={SCHOLAR.poggio}>Tomaso Poggio</SupervisorLink>
                  . I work on agentic systems, fundamental limits of AI, and
                  theorems about training neural networks.
                </p>
              </div>

              <p>
                Before that, at Logitech&apos;s CTO office I worked on foundation
                models with{" "}
                <SupervisorLink href={SCHOLAR.dan}>Jonathan Dan</SupervisorLink>
                . At Idiap Research Institute,{" "}
                <SupervisorLink href={SCHOLAR.garner}>
                  Philip N. Garner
                </SupervisorLink>{" "}
                supervised my research on bio-inspired text-to-speech and spiking
                neural networks.
              </p>

              <div>
                <p className="about-bio-section-label">Education</p>
                <p>
                  BSc, Engineering Physics (Politecnico di Milano). MSc, Nuclear
                  Engineering, joint program at ETH Zurich, EPFL, and PSI. MSc,
                  Neuro-X: Data Science &amp; Computational Neuroscience (EPFL).
                </p>
              </div>

              <p>
                If you want to collaborate or swap ideas (coffee optional), say
                hi. I&apos;m always happy to learn from other people&apos;s
                notebooks 🤝
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
        </div>
      </ContentContainer>
    </PageShell>
  );
}
