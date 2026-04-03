import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
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
      className="about-contact-link"
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="reading" className="py-16 md:py-24">
        <div className="space-y-10 md:space-y-12">
          <header className="about-page-intro">
            <p className="about-page-eyebrow">About</p>
            <h1 className="about-page-heading">
              Hi there — I&apos;m Emanuele.
            </h1>
          </header>

          <div className="about-bio space-y-6 md:space-y-7 text-left font-serif text-sm md:text-[0.95rem] leading-[1.72] text-[#6E6763]">
            <p className="text-[#262424]">
              I&apos;m a Visiting Researcher at MIT, where I&apos;m advised by{" "}
              <SupervisorLink href={SCHOLAR.beneventano}>
                Pierfrancesco Beneventano
              </SupervisorLink>{" "}
              and{" "}
              <SupervisorLink href={SCHOLAR.poggio}>Tomaso Poggio</SupervisorLink>
              . I work on agentic systems, fundamental limits of AI, and theorems
              about training neural networks.
            </p>

            <p>
              Before that, at Logitech&apos;s CTO office I worked on foundation
              models with{" "}
              <SupervisorLink href={SCHOLAR.dan}>Jonathan Dan</SupervisorLink>.
              At Idiap Research Institute,{" "}
              <SupervisorLink href={SCHOLAR.garner}>Phil Garner</SupervisorLink>{" "}
              supervised my research on bio-inspired text-to-speech and spiking
              neural networks.
            </p>

            <div className="about-education-block">
              <p className="about-bio-section-label">Education</p>
              <p>
                I started in{" "}
                <span className="text-[#262424]">Engineering Physics</span> at
                Politecnico di Milano. That degree trained me to treat messy
                systems as equations first: approximations, scaling laws, and
                the habit of asking which simplifications still carry physical
                meaning. I still reach for that toolkit when I read papers on
                learning theory.
              </p>
              <p>
                For my first master&apos;s I studied{" "}
                <span className="text-[#262424]">Nuclear Engineering</span> in
                the joint program across ETH Zurich, EPFL, and PSI. Splitting
                time between institutions meant learning to translate notation
                and priorities across groups — a useful rehearsal for
                interdisciplinary research — while the coursework pushed
                probability, transport, and numerical methods in directions that
                complement the more abstract side of ML.
              </p>
              <p>
                I then completed a second MSc at EPFL in{" "}
                <span className="text-[#262424]">
                  Neuro-X (Data Science &amp; Computational Neuroscience)
                </span>
                , where I could finally aim the same mathematical habits at
                questions about brains, behavior, and data at scale. The thread
                from Polimi to nuclear engineering to neuroscience is less a
                pivot than a long arc: same curiosity about how complex systems
                behave under constraints, with the questions growing more
                insistently computational along the way.
              </p>
            </div>

            <p>
              If you want to collaborate or swap ideas (coffee optional), say hi
              — I&apos;m always happy to learn from other people&apos;s notebooks
              🤝
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
