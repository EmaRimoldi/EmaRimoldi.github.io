export interface ResearchItem {
  id: string;
  title: string;
  /** Short one line subtitle */
  descriptor: string;
  /** Optional extra paragraph (omit for tag-first cards) */
  summary?: string;
  year?: number;
  tags?: string[];
  image: string;
  imagePosition?: string;
  links?: {
    demo?: string;
    paper?: string;
    notes?: string;
    code?: string;
  };
}

export const projectsItems: ResearchItem[] = [
  {
    id: "poggio-ai",
    title: "pAI",
    descriptor:
      "Principal (Agentic) Investigator: a Poggio Lab multi-agent system for turning research hypotheses into literature-grounded, experiment-backed manuscripts.",
    year: 2026,
    tags: ["Multi-agent systems", "Research automation", "MIT Poggio Lab"],
    image: "/images/projects/pai-card.webp",
    imagePosition: "center right",
    links: {
      demo: "https://poggioai.github.io",
    },
  },
  {
    id: "reddit-brain",
    title: "The Reddit Brain",
    descriptor:
      "Interactive, brain-inspired map of Reddit's social dynamics across hyperlink structure, linguistic co-activation, sentiment circuits, and network lesions.",
    year: 2025,
    tags: ["Network science", "NLP", "Data visualization"],
    image: "/images/projects/reddit-brain-card.webp",
    imagePosition: "center right",
    links: {
      demo: "https://www.emanuelerimoldi.com/AppliedDataAnalysis25/",
      code: "https://github.com/EmaRimoldi/AppliedDataAnalysis25",
    },
  },
  {
    id: "claude-scholar-extended",
    title: "ALETHEIA",
    descriptor:
      "Semi-automated assistant from a research question to experiments, analysis, and a manuscript, with literature synthesis and human checkpoints.",
    year: 2026,
    tags: ["Research automation", "Claude Code", "Literature"],
    image: "/images/projects/aletheia-card.webp",
    imagePosition: "center right",
    links: {
      code: "https://github.com/EmaRimoldi/Claude-scholar-extended",
      notes:
        "https://github.com/EmaRimoldi/Claude-scholar-extended/blob/main/docs/QUICKSTART.md",
    },
  },
  {
    id: "hatelens",
    title: "HateLens",
    descriptor:
      "Compact decoder-only models with LoRA for hate speech detection and LIME explanations.",
    year: 2024,
    tags: ["PyTorch", "NLP", "Interpretability"],
    image: "/images/projects/hatelens-card.webp",
    imagePosition: "center right",
    links: {
      code: "https://github.com/EmaRimoldi/HateLens",
    },
  },
];
