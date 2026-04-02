export interface ResearchItem {
  id: string;
  title: string;
  descriptor: string;
  summary: string;
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
      "Semi-automated research assistant: from a first research idea to experiments, analysis, and a submission-ready paper—with literature, novelty gates, and human checkpoints along the way.",
    summary:
      "Extends the Claude Scholar ecosystem into a checkpointed v3 pipeline—from research landscape and experiment design through cluster execution, strict analysis, and /verify-paper—with Obsidian/Zotero integration and human-in-the-loop decisions. Installable as a plugin bundle for ~/.claude; state lives in pipeline-state.json and project dirs under projects/<slug>/.",
    year: 2026,
    tags: ["Claude Code", "research pipeline", "literature", "experiments"],
    links: {
      code: "https://github.com/EmaRimoldi/Claude-scholar-extended",
      notes: "https://github.com/EmaRimoldi/Claude-scholar-extended/blob/main/docs/QUICKSTART.md",
    },
  },
  {
    id: "agent-parallelization",
    title: "Agent parallelization",
    descriptor:
      "Parallel Claude Code sub-agents with isolated git worktrees and SLURM workers for NanoGPT hyperparameter search.",
    summary:
      "Spawns N independent agents, each with its own GPU budget and exploration loop (edit train.py, train, keep or reset). After parallel search, a merge phase aggregates trajectories; includes budgeting from GPU allocation time, merge protocol docs, and benchmarks for parallelism capacity on Engaging-style clusters.",
    year: 2026,
    tags: ["Claude Code", "SLURM", "NanoGPT", "hyperparameters"],
    links: {
      code: "https://github.com/EmaRimoldi/agent_parallelization",
      notes: "https://github.com/EmaRimoldi/agent_parallelization/tree/master/docs",
    },
  },
  {
    id: "hatelens",
    title: "HateLens",
    descriptor:
      "Tiny decoder-only LLMs with LoRA for hate speech detection and LIME-based explanations.",
    summary:
      "Course project pipeline on DynaHate and HateCheck: parameter-efficient fine-tuning of compact models, evaluation, and token-level LIME attributions for transparent moderation-oriented classification—balancing accuracy with interpretability and light compute.",
    year: 2024,
    tags: ["PyTorch", "LoRA", "LIME", "NLP"],
    links: {
      code: "https://github.com/EmaRimoldi/HateLens",
    },
  },
];
