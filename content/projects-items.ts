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
    id: "research-1",
    title: "On Emergent Behavior in Hierarchical Systems",
    descriptor: "A theoretical study of how organization creates intelligence.",
    summary:
      "This research explores the emergence of complex behavior from hierarchical organization principles, with applications to both biological and artificial systems.",
    year: 2024,
    tags: ["complexity", "emergence", "systems"],
    links: {
      paper: "#",
      notes: "#",
    },
  },
  {
    id: "research-2",
    title: "Learning and Generalization in Sparse Environments",
    descriptor: "How intelligent systems acquire knowledge under data scarcity.",
    summary:
      "Investigation into how inductive biases and structural priors enable learning with limited data, inspired by biological cognition.",
    year: 2024,
    tags: ["learning", "generalization", "inductive bias"],
    links: {
      paper: "#",
      code: "#",
    },
  },
  {
    id: "research-3",
    title: "Biological Principles for Artificial Intelligence",
    descriptor: "A synthesis of neuroscience and machine learning.",
    summary:
      "This work examines principles from neuroscience that could improve the design of artificial intelligence systems, focusing on robustness and adaptability.",
    year: 2023,
    tags: ["neuroscience", "AI", "principles"],
    links: {
      notes: "#",
    },
  },
];
