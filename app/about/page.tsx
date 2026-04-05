import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PageHeader } from "@/components/page-header";
import { AboutLetterHead } from "@/components/about-letter-head";

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
        <PageHeader
          align="center"
          className="!mb-7 md:!mb-9 items-center text-center"
          eyebrow="About"
          title=""
        />

        <article
          className="about-letter mx-auto max-w-[38rem]"
          lang="en"
        >
          <AboutLetterHead />

          <p className="about-letter-salutation">Dear reader,</p>

          <div className="about-letter-body">
            <p>
              I am a Visiting Researcher at MIT, advised by{" "}
              <SupervisorLink href={SCHOLAR.beneventano}>
                Pierfrancesco Beneventano
              </SupervisorLink>{" "}
              and{" "}
              <SupervisorLink href={SCHOLAR.poggio}>Tomaso Poggio</SupervisorLink>
              , working on agentic systems, fundamental limits of AI, and theorems
              about training neural networks.
            </p>

            <p>
              I am writing this after years of building and questioning models:
              before MIT, I worked on foundation models at Logitech&apos;s CTO
              office with{" "}
              <SupervisorLink href={SCHOLAR.dan}>Jonathan Dan</SupervisorLink>
              ; at Idiap Research Institute,{" "}
              <SupervisorLink href={SCHOLAR.garner}>Philip N. Garner</SupervisorLink>{" "}
              supervised my research on bio inspired text to speech and spiking
              neural networks.
            </p>

            <p>
              I am still shaped by a winding education: engineering physics at
              Politecnico di Milano, then nuclear engineering through a joint
              master&apos;s across ETH Zurich, EPFL, and PSI. I did not complete
              that degree; when my interests pulled elsewhere, I moved into data
              science and computational neuroscience at EPFL, where the
              questions finally lined up with the work I wanted to pursue.
            </p>

            <p>
              I am always glad to hear from others. If you want to collaborate or
              trade ideas, coffee optional, say hi; I learn best from other
              people&apos;s notebooks.
            </p>
          </div>

          <footer className="about-letter-signoff">
            <p className="about-letter-valediction">Best,</p>
            <p className="about-letter-signature">Emanuele</p>
          </footer>
        </article>
      </ContentContainer>
    </PageShell>
  );
}
