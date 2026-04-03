import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { DecorativeRule } from "@/components/page-header";
import Link from "next/link";

const article = {
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
};

export const metadata = {
  title: article.title,
  description: article.description,
};

export default function ArticlePage() {
  return (
    <PageShell>
      <ContentContainer maxWidth="reading" className="py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-block mb-8 text-sm text-[#6E6763] hover:text-[#262424] transition-colors duration-200"
        >
          ← Back to Blog
        </Link>

        {/* Article header */}
        <article className="space-y-8">
          <div className="space-y-5">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#262424] leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-[#6E6763] italic leading-relaxed">
              {article.description}
            </p>
            <DecorativeRule className="opacity-90" />
          </div>

          {/* Article body */}
          <div className="space-y-6">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed text-[#6E6763]"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </article>

        {/* Footer navigation */}
        <div className="mt-16 pt-8 border-t border-[#DDD4CE]/30">
          <Link
            href="/blog"
            className="inline-block text-sm text-[#262424] hover:opacity-60 transition-opacity duration-200"
          >
            ← Back to all articles
          </Link>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
