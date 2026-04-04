import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { AboutLocationClock } from "@/components/about-location-clock";
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
        <div className="about-two-col grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14 lg:gap-16 md:items-start">
          <aside className="order-2 md:order-1 md:col-span-4">
            <AboutPortrait />
          </aside>

          <div className="order-1 md:order-2 md:col-span-8 space-y-6 md:space-y-7 text-left font-serif text-sm md:text-[0.95rem] leading-[1.72] text-[#6E6763]">
            <header className="space-y-4 border-b border-[#DDD4CE]/80 pb-8 md:pb-9">
              <p className="page-header-eyebrow">About</p>
              <h1 className="font-serif text-2xl md:text-3xl text-[#262424] leading-[1.12] tracking-tight">
                Emanuele Rimoldi
              </h1>
              <p className="about-lead max-w-2xl text-[#262424]">
                <span className="about-brand-emphasis font-semibold">
                  AI researcher
                </span>{" "}
                and Visiting Researcher at MIT. I work on agentic systems,
                fundamental limits of AI, and theorems about training neural
                networks.
              </p>
              <blockquote className="about-quote max-w-xl border-l-2 border-[#455C5A]/25 pl-4 md:pl-5">
                <p>
                  &ldquo;All models are wrong, but some are useful.&rdquo;
                </p>
                <footer className="mt-2 not-italic">
                  — George E. P. Box
                </footer>
              </blockquote>
            </header>

            <p>
              At MIT I&apos;m advised by{" "}
              <SupervisorLink href={SCHOLAR.beneventano}>
                Pierfrancesco Beneventano
              </SupervisorLink>{" "}
              and{" "}
              <SupervisorLink href={SCHOLAR.poggio}>Tomaso Poggio</SupervisorLink>
              .
            </p>

            <p>
              Before that, at Logitech&apos;s CTO office I worked on foundation
              models with{" "}
              <SupervisorLink href={SCHOLAR.dan}>Jonathan Dan</SupervisorLink>.
              At Idiap Research Institute,{" "}
              <SupervisorLink href={SCHOLAR.garner}>
                Philip N. Garner
              </SupervisorLink>{" "}
              supervised my research on bio-inspired text-to-speech and spiking
              neural networks.
            </p>

            <AboutLocationClock />

            <div>
              <p className="about-bio-section-label">Education</p>
              <p>
                BSc, Engineering Physics (Politecnico di Milano). MSc, Nuclear
                Engineering, joint program at ETH Zurich, EPFL, and PSI. MSc,
                Neuro-X: Data Science &amp; Computational Neuroscience (EPFL).
              </p>
            </div>

            <p>
              If you want to collaborate or swap ideas, say hello. I&apos;m
              always glad to learn from how other people work.
            </p>

            <div className="pt-6 mt-1 border-t border-[#DDD4CE]/60">
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
