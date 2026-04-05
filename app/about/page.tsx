import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PageHeader } from "@/components/page-header";
import { AboutMitWhereabouts } from "@/components/about-mit-whereabouts";

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
          className="page-header-editorial !mb-8 md:!mb-10 items-center text-center"
          eyebrow="About"
          title={<AboutMitWhereabouts asTitle />}
        />

        <p className="about-prose-centered mx-auto max-w-[36rem] font-serif text-[0.8125rem] leading-[1.75] text-[#6E6763] md:text-[0.9rem]">
          I&apos;m a Visiting Researcher at MIT, advised by{" "}
          <SupervisorLink href={SCHOLAR.beneventano}>
            Pierfrancesco Beneventano
          </SupervisorLink>{" "}
          and{" "}
          <SupervisorLink href={SCHOLAR.poggio}>Tomaso Poggio</SupervisorLink>
          , working on agentic systems, fundamental limits of AI, and theorems
          about training neural networks. Before that I worked on foundation
          models at Logitech&apos;s CTO office with{" "}
          <SupervisorLink href={SCHOLAR.dan}>Jonathan Dan</SupervisorLink>
          ; at Idiap Research Institute,{" "}
          <SupervisorLink href={SCHOLAR.garner}>Philip N. Garner</SupervisorLink>{" "}
          supervised my research on bio-inspired text-to-speech and spiking
          neural networks. I studied engineering physics at Politecnico di
          Milano for my bachelor&apos;s, then entered nuclear engineering through
          a joint master&apos;s across ETH Zurich, EPFL, and PSI—I did not
          complete that degree; when my interests pulled elsewhere, I moved into
          data science and computational neuroscience at EPFL, where the
          questions finally lined up with the work I wanted to pursue. If you
          want to collaborate or trade ideas—coffee optional—say hi; I&apos;m
          always glad to learn from other people&apos;s notebooks.
        </p>
      </ContentContainer>
    </PageShell>
  );
}
