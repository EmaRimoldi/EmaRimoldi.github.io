import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PageHeader } from "@/components/page-header";
import { AboutMitWhereabouts } from "@/components/about-mit-whereabouts";
import { AboutPortrait } from "@/components/about-portrait";

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
      <ContentContainer maxWidth="content" className="py-12 md:py-16 lg:py-20">
        {/* Intro full width; below, marginalia photo + measured prose column */}
        <PageHeader
          className="page-header-editorial !mb-8 md:!mb-10"
          eyebrow="About"
          title="Hi there, I'm Emanuele!"
        />

        {/* Editorial spread: narrow photo as marginalia + measured text column (not a heavy two-column wall) */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-[auto_minmax(0,min(40rem,100%))] md:gap-x-10 lg:gap-x-14 md:items-start">
          <aside className="flex justify-center md:justify-start md:pt-[0.35rem]">
            <AboutPortrait />
          </aside>

          <div className="about-prose min-w-0">
            <header className="about-prose-lead mb-5 md:mb-6">
              <AboutMitWhereabouts />
            </header>

            <div className="space-y-5 md:space-y-6">
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
            </div>

            <section className="about-education-block" aria-labelledby="about-education-heading">
              <h2 id="about-education-heading" className="about-bio-section-label">
                Education
              </h2>
              <p className="mt-2">
                BSc, Engineering Physics (Politecnico di Milano). MSc, Nuclear
                Engineering, joint program at ETH Zurich, EPFL, and PSI. MSc,
                Neuro-X: Data Science &amp; Computational Neuroscience (EPFL).
              </p>
            </section>

            <p className="about-closing mt-6 md:mt-7">
              If you want to collaborate or swap ideas (coffee optional), say
              hi—I&apos;m always glad to learn from other people&apos;s notebooks.
            </p>
          </div>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
