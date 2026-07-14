import { BlogArticleLayout } from "@/components/blog-article-layout";
import { getBlogPost } from "@/content/blog-posts";

const slug = "the-reddit-brain" as const;
const post = getBlogPost(slug)!;

const demoUrl = "https://www.emanuelerimoldi.com/AppliedDataAnalysis25/";

const articleBody = `The Reddit Brain is an interactive data story about online communities seen through a neuroscience-inspired lens. Instead of treating Reddit as a flat collection of forums, the project models subreddits as functional units in a large social nervous system: communities link to each other, synchronize over time, form hubs, and change after disruption.

The analogy is deliberately careful. Subreddits are not neurons, and Reddit is not a biological brain. The point is to borrow a useful vocabulary from network science and neuroscience: structure, function, excitation, inhibition, lesions, resilience, and reorganization. That vocabulary makes it easier to ask whether different views of the same social system reveal complementary properties.

The project combines SNAP Reddit hyperlink data, topic categories, LIWC-style linguistic time series, sentiment layers, embedding distances, NetworkX analysis, Plotly visualizations, and a static Next.js interface. The result is both a reproducible analysis pipeline and a visual research prototype.

One part of the work compares structural connectivity with functional connectivity. A subreddit can be directly connected through hyperlinks, but it can also move in parallel with another community over time without a direct link. That gap between wiring and co-activation is where the project becomes interesting.

Another part studies what happens when important hubs are removed. In that setting, moderation events and targeted removals become network lesions: not biological damage, but perturbations that expose how robust or fragile a social network layer is.

The live demo is the best way to read the project. It lets the analysis behave like a map rather than a static report: you can move between structure, sentiment, resilience, and brain-space projections while keeping the central question in view. What does collective online behavior look like when we study it as a connected, adaptive system?`;

export const metadata = {
  title: post.title,
  description: post.description,
};

export default function ArticlePage() {
  const paragraphs = articleBody.split("\n\n").map((p) => p.trim());

  return (
    <BlogArticleLayout post={post}>
      <div
        aria-hidden
        className="mb-8 min-h-[15rem] overflow-hidden rounded-[1.45rem] border border-[#c4b6a8]/75 bg-cover bg-center shadow-[inset_0_1px_0_rgba(255,255,255,0.32)] md:min-h-[20rem]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(37,31,29,0.2), rgba(37,31,29,0.02)), url('/images/projects/reddit-brain-card.webp')",
        }}
      />

      <div className="mb-8 rounded-[1.35rem] border border-[#c4b6a8]/80 bg-[#f2ebe4]/85 p-5 shadow-[0_1px_2px_rgba(37,31,29,0.04)] md:p-6">
        <p className="!m-0 max-w-2xl">
          Open the interactive project, then come back to the short article for
          the framing.
        </p>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#c4b6a8]/90 bg-[#f7f1ea] px-4 py-2 font-serif text-[0.72rem] uppercase tracking-[0.18em] text-[#251f1d] transition-all duration-300 hover:border-[#9a6b52]/55 hover:bg-[#fff8f1] hover:shadow-[0_8px_22px_rgba(37,31,29,0.08)]"
        >
          Open live demo
          <span aria-hidden>↗</span>
        </a>
      </div>

      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={index === 0 ? "blog-article-lead" : undefined}
        >
          {paragraph}
        </p>
      ))}
    </BlogArticleLayout>
  );
}
