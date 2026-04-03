export interface ResearchItem {
  id: string;
  title: string;
  /** Short one line subtitle */
  descriptor: string;
  /** Optional extra paragraph (omit for tag-first cards) */
  summary?: string;
  year?: number;
  tags?: string[];
  links?: {
    paper?: string;
    notes?: string;
    code?: string;
  };
}

export const projectsItems: ResearchItem[] = [
  {
    id: "claude-scholar-extended",
    title: "ALETHEIA",
    descriptor:
      "Semi-automated assistant from a research question to experiments, analysis, and a manuscript, with literature synthesis and human checkpoints.",
    year: 2026,
    tags: ["Research automation", "Claude Code", "Literature"],
    links: {
      code: "https://github.com/EmaRimoldi/Claude-scholar-extended",
      notes:
        "https://github.com/EmaRimoldi/Claude-scholar-extended/blob/main/docs/QUICKSTART.md",
    },
  },
  {
    id: "agent-parallelization",
    title: "Agent parallelization",
    descriptor:
      "Parallel Claude Code subagents with isolated git worktrees and SLURM workers for NanoGPT hyperparameter search.",
    year: 2026,
    tags: ["Claude Code", "SLURM", "NanoGPT"],
    links: {
      code: "https://github.com/EmaRimoldi/agent_parallelization",
      notes: "https://github.com/EmaRimoldi/agent_parallelization/tree/master/docs",
    },
  },
  {
    id: "hatelens",
    title: "HateLens",
    descriptor:
      "Compact decoder-only models with LoRA for hate speech detection and LIME explanations.",
    year: 2024,
    tags: ["PyTorch", "NLP", "Interpretability"],
    links: {
      code: "https://github.com/EmaRimoldi/HateLens",
    },
  },
];
