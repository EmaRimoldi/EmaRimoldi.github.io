export interface Recommendation {
  id: string;
  title: string;
  author?: string;
  category: string;
  note: string;
}

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas Hofstadter",
    category: "Books",
    note: "A profound exploration of recursion, self-reference, and the nature of consciousness. Foundational for thinking about intelligence and meaning.",
  },
  {
    id: "rec-2",
    title: "The Architecture of Complexity",
    author: "Herbert Simon",
    category: "Essays",
    note: "Essential reading on how complex systems can be hierarchically organized. Shapes thinking about emergent intelligence.",
  },
  {
    id: "rec-3",
    title: "On the Origin of Objects",
    author: "David Chalmers & Andy Clark",
    category: "Research",
    note: "Extended mind thesis and the role of the environment in cognition. Challenges bounded views of intelligence.",
  },
  {
    id: "rec-4",
    title: "The Alignment Problem",
    author: "Brian Christian",
    category: "Books",
    note: "Thoughtful examination of AI safety and alignment. Important context for thinking about agentic systems responsibly.",
  },
  {
    id: "rec-5",
    title: "Life 3.0",
    author: "Max Tegmark",
    category: "Books",
    note: "Broad perspective on artificial and natural intelligence. Useful for understanding different approaches to the study of mind.",
  },
  {
    id: "rec-6",
    title: "A Pattern Language",
    author: "Christopher Alexander",
    category: "Books",
    note: "Foundational for thinking about structure, design, and the language of creation. Applicable far beyond architecture.",
  },
];
