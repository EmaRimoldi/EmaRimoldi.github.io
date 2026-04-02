export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt?: string;
}

export const articles: Article[] = [
  {
    slug: "learning-through-structure",
    title: "On Learning Through Structure",
    description:
      "A reflection on how structure shapes the way we build and understand intelligent systems.",
    content: `Learning is not a shapeless accumulation of facts. It is the gradual internalization of structure. When we learn, we are not passively receiving information—we are actively discovering and absorbing the patterns, hierarchies, and regularities that underlie the domains we study.

Consider the difference between memorizing a list of historical dates and understanding the narrative arcs of history. The dates alone are fragments. But when embedded in stories, causality, and thematic patterns, they become nodes in a rich conceptual network. The structure transforms disconnected facts into knowledge.

This principle extends to intelligence itself. A system that learns must have access to structure. Without structure, there is only noise. With structure, there is signal—the possibility of compression, prediction, and generalization.

The brain discovers structure through embodied experience. We learn physics through movement, mathematics through manipulation of concrete objects before abstracting to symbols. Each modality reveals structure at its own scale. The structures discovered through different paths are often similar, which suggests something deep: structure is not invented by the observer but inherent in the domains we explore.

Artificial systems, too, must be given the opportunity to discover structure. A neural network trained on unstructured noise learns nothing of value. But one given access to regularities—whether through careful data curation, inductive biases in its architecture, or appropriate training objectives—can learn with remarkable efficiency.

The deepest learning happens when a system internalizes not just surface patterns but the underlying principles that generate them. A musician learns not just the notes of a composition, but the harmonic logic, the voice-leading, the emotional architecture that gives meaning to the notes. Similarly, an intelligence that truly understands a domain grasps the deep structure—the invariances, the principles, the generative rules.

This has profound implications for how we design learning systems, whether natural or artificial. The goal is not to accumulate data but to help the system discover the structures that data contains. The goal is not passive learning but active structuring—the progressive refinement of the mental models through which we interpret the world.

In this view, the capacity for learning is fundamentally a capacity for finding structure. And the quality of learning is measured not by the quantity of information absorbed, but by the depth and coherence of the structural understanding achieved.`,
  },
  {
    slug: "iteration-matters",
    title: "Why Iteration Matters in Intelligence",
    description:
      "Exploring the role of iterative refinement in developing robust and adaptive intelligence.",
    content: `Intelligence is not a state but a process. More precisely, intelligence is the capacity to refine, correct, and improve through repeated cycles of thought and action.

This is not a metaphor. At every level of nature, from the evolution of species to the development of individual minds, intelligence emerges through iteration. A system that can only act once, that cannot revisit and revise its own outputs, cannot truly be intelligent. Intelligence requires the ability to notice mistakes, to update beliefs, to try again.

Consider how a scientist works. The first hypothesis is rarely correct. But through experimentation, observation, and revision, successive hypotheses converge toward truth. The power of science is not in the initial insight but in the iterative process of testing, falsifying, and refining. This same structure appears in learning. We read, we misunderstand, we read again, and gradually understanding deepens. We solve a problem, recognize a flaw in our solution, and improve it. Intelligence is this cycle repeated.

Evolution itself is an iterative process. Each generation inherits the "solutions" of the previous one and refines them. Variation and selection create a feedback loop that gradually shapes organisms toward fitness. The complexity of life—the breathtaking engineering of an eye, the intricate logic of a brain—emerges not through a single act of creation but through millions of iterations, each building incrementally on the past.

In the brain, iteration appears at multiple scales. A thought occurs, it is evaluated against memory and logic, it is refined or rejected. We consider a course of action, imagine its consequences, revise our plan. In learning, the same principle holds: repeated exposure to a problem gradually reshapes the neural representations that solve it. Practice works because it allows iteration.

This has been underemphasized in some modern approaches to artificial intelligence. We have focused on scale—on training ever-larger models on ever-larger datasets in single forward passes. But a system that can only produce one output, that cannot revisit and refine its own work, is fundamentally limited. The most powerful intelligences in nature—humans, for instance—spend much of their time iterating, refining, and revising.

True adaptive intelligence requires systems that can:
1. Reflect on their own outputs
2. Compare outcomes to intentions
3. Generate alternatives
4. Refine and improve through successive attempts

This is why learning from mistakes is so powerful. A system that makes an error but lacks a mechanism to identify and correct it is stuck. But a system that can notice failure and revise its approach can eventually succeed. The iteration transforms error into information.

Even in mathematics and logic, where we might expect exact solutions on the first try, iteration is central. Numerical methods that solve equations do so through successive approximation. Proofs are often revised multiple times before finding the cleanest form. The refinement is as important as the initial insight.

The implication is clear: if we want to build systems that are truly intelligent, we must build them to be iterative. Not just in training, but in deployment. Systems that can reflect on their own reasoning, that can generate alternatives, that can refine their outputs through successive passes—these are the systems that will prove most robust and adaptive to changing conditions.

Intelligence, at its deepest, is not about producing perfect outputs on the first attempt. It is about the capacity to keep trying, keep learning, keep improving. It is iteration all the way down.`,
  },
  {
    slug: "biological-computation",
    title: "Notes on Biological Computation",
    description:
      "Exploring how biological systems compute differently from engineered abstractions.",
    content: `We tend to think of computation as a clean, abstract process: input, algorithm, output. This view comes from logic and mathematics, from Turing machines and formal systems. But biological computation—the way brains and bodies solve problems—is profoundly different.

Biological systems do not compute in isolation. They are embedded in continuous environments, continuously coupled with the world. A brain does not process discrete inputs in a pipeline; it samples from a complex, dynamic environment and simultaneously generates motor output that shapes what it encounters next. This is a loop, not a pipeline.

Consider vision. Engineering approaches to computer vision often treat images as static inputs to be processed. But biological vision is active. An animal does not passively receive the visual field; it moves its eyes, its head, its body to sample information relevant to its current goals. The structure of the visual world depends on where the animal looks. Computation and embodiment are inseparable.

This has profound implications. In engineered systems, we can separate the representation of knowledge from the system that uses it. A weight matrix in a neural network encodes information independent of the current input or task. But in biological systems, meaning is contextual. The same neural activity in a different context means something different. Information is not just in the structure but in the state, the history, the ongoing interaction.

Biological systems also compute with inherent uncertainty and noise. A single neuron's firing is probabilistic. There is no perfect precision. Yet, through population coding and distributed representations, biological systems achieve remarkable reliability despite this noise. Engineering systems have often assumed that precision is necessary for computation. But biology suggests otherwise: robustness can emerge from approximate, distributed, noisy processes.

Furthermore, biological computation is fundamentally analog and continuous. While we think in terms of digital bits, neurons operate in continuous time with continuous variables. There is no clock ticking at a fixed rate. Events have varied timing. Information is encoded in rates of firing, in temporal patterns, in the ongoing state of neural circuits. This continuous nature allows biological systems to exploit temporal correlations in their environment in ways that discrete, clocked systems cannot.

Another crucial difference: biological systems learn and compute simultaneously. There is no clean separation between the learning phase and the inference phase. A brain is always adjusting its internal structure based on experience, even during ongoing behavior. This stands in stark contrast to typical machine learning, where systems learn during training, then their parameters are fixed for deployment.

Also, biological systems are massively parallel and distributed. There is no central processor. Every neuron is simultaneously receiving input from thousands of others and sending output to thousands more. Computation is distributed across vast networks, with no single point of control. This distributed architecture provides robustness—local damage does not necessarily degrade the whole system—and scalability.

The energy efficiency of biological systems is also worth noting. A brain uses roughly 20 watts of power. Our largest artificial neural networks use megawatts. The efficiency comes not from having fewer neurons, but from a fundamentally different computational approach: sparse activation, analog rather than digital representations, and continual recycling of neural activity rather than reading it out to discrete outputs.

What does this mean for understanding intelligence? It suggests that some of our assumptions about computation are parochial. Computation doesn't require discreteness, central processing, perfect precision, or a clean separation between learning and inference. Intelligence can emerge from continuous, distributed, embodied, probabilistic processes deeply coupled with their environment.

This doesn't mean biological systems are "better" at computation in all respects. Digital systems can perform some tasks with greater precision and speed. But it does mean that if we want to understand the kind of intelligence that biology produces—adaptive, generalizable, efficient, robust—we may need to rethink some of our core assumptions about how computation works.

The future of AI may lie not in simulating biology directly, but in learning from the principles that biology has discovered through millions of years of evolution. Structure and learning through iteration. Distributed and probabilistic processing. Tight coupling between perception and action. These principles point toward a different architecture for intelligence than what we have been building.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}
