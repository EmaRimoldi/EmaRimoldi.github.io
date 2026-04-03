export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  href: string;
  /** Where the piece was written (city, lab, or "Remote") */
  location: string;
  /** Display language, e.g. "English" */
  language: string;
  /** ISO 8601 date (published or last substantively updated) */
  publishedAt: string;
  /** Estimated reading time in minutes */
  readingTimeMinutes: number;
  /** Optional topical labels */
  tags?: string[];
  /** Numbered bibliography entries (APA-style lines) */
  references?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "learning-through-structure",
    title: "On Learning Through Structure",
    description:
      "A reflection on how structure shapes the way we build and understand intelligent systems.",
    href: "/blog/learning-through-structure",
    location: "Cambridge, MA",
    language: "English",
    publishedAt: "2025-03-12",
    readingTimeMinutes: 6,
    tags: ["Learning", "Structure", "AI"],
    references: [
      "Chomsky, N. (1957). Syntactic structures. Mouton.",
      "Simon, H. A. (1969). The sciences of the artificial. MIT Press.",
      "Minsky, M. (1986). The society of mind. Simon & Schuster.",
      "Kuhn, T. S. (1962). The structure of scientific revolutions. University of Chicago Press.",
      "Schmidhuber, J. (2015). Deep learning in neural networks: An overview. Neural Networks, 61, 85-117.",
    ],
  },
  {
    slug: "iteration-matters",
    title: "Why Iteration Matters in Intelligence",
    description:
      "Exploring the role of iterative refinement in developing robust and adaptive intelligence.",
    href: "/blog/iteration-matters",
    location: "Cambridge, MA",
    language: "English",
    publishedAt: "2025-06-01",
    readingTimeMinutes: 11,
    tags: ["Intelligence", "Iteration", "AI"],
    references: [
      "Newell, A., & Simon, H. A. (1972). Human problem solving. Prentice-Hall.",
      "Sutton, R. S., & Barto, A. G. (2018). Reinforcement learning: An introduction (2nd ed.). MIT Press.",
      "Dewey, J. (1910). How we think. D. C. Heath and Co.",
      "Lakatos, I. (1978). The methodology of scientific research programmes. Cambridge University Press.",
      "Holland, J. H. (1992). Adaptation in natural and artificial systems. MIT Press.",
    ],
  },
  {
    slug: "biological-computation",
    title: "Notes on Biological Computation",
    description:
      "Exploring how biological systems compute differently from engineered abstractions.",
    href: "/blog/biological-computation",
    location: "Cambridge, MA",
    language: "English",
    publishedAt: "2025-08-20",
    readingTimeMinutes: 9,
    tags: ["Neuroscience", "Computation", "Embodiment"],
    references: [
      "Brooks, R. A. (1991). Intelligence without representation. Artificial Intelligence, 47(1-3), 139-159.",
      "Clark, A. (1997). Being there: Putting brain, body, and world together again. MIT Press.",
      "Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11(2), 127-138.",
      "Maass, W., Natschläger, T., & Markram, H. (2002). Real-time computing without stable states: A new framework for neural computation based on perturbations. Neural Computation, 14(11), 2531-2560.",
      "Churchland, P. S., & Sejnowski, T. J. (1992). The computational brain. MIT Press.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
