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
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
