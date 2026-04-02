export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "learning-through-structure",
    title: "On Learning Through Structure",
    description:
      "A reflection on how structure shapes the way we build and understand intelligent systems.",
    href: "/blog/learning-through-structure",
  },
  {
    slug: "iteration-matters",
    title: "Why Iteration Matters in Intelligence",
    description:
      "Exploring the role of iterative refinement in developing robust and adaptive intelligence.",
    href: "/blog/iteration-matters",
  },
  {
    slug: "biological-computation",
    title: "Notes on Biological Computation",
    description:
      "Exploring how biological systems compute differently from engineered abstractions.",
    href: "/blog/biological-computation",
  },
];
