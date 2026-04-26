"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/content/blog-posts";

type BlogTab = "posts" | "recommendations";

const recommendations = [
  {
    title: "Gödel, Escher, Bach",
    href: "https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach",
    description:
      "A spiraling exploration of patterns, self-reference, and consciousness; how meaning emerges from the interplay of formal systems.",
  },
  {
    title: "The Architecture of Complexity",
    href: "https://www.semanticscholar.org/paper/The-Architecture-of-Complexity-Simon/03511041271257b85e6d9058e51f02cf5f4e3937",
    description:
      "Herbert Simon on why the universe builds hierarchies; what this reveals about intelligence, constraint, and emergent order.",
  },
  {
    title: "Ways of Seeing",
    href: "https://www.penguinrandomhouse.com/books/324430/ways-of-seeing-by-john-berger/",
    description:
      "John Berger on perception and visual culture; how embodied experience shapes understanding.",
  },
  {
    title: "A Mathematician's Apology",
    href: "https://en.wikipedia.org/wiki/A_Mathematician%27s_Apology",
    description:
      "G.H. Hardy on the beauty and necessity of rigorous thought; why elegance and truth are inseparable.",
  },
  {
    title: "The Structure of Scientific Revolutions",
    href: "https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions",
    description:
      "Thomas Kuhn on paradigms and how frameworks shape what we can perceive and understand.",
  },
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<BlogTab>("posts");

  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        <PageHeader
          align="center"
          eyebrow="Writing"
          subtitle="Notes on intelligence, structure, and reading."
        />

        <div className="mb-12 flex justify-center md:mb-14">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#c4b6a8]/85 bg-[#efe8e0]/65 p-2 shadow-[0_1px_2px_rgba(37,31,29,0.03)]">
          <button
            type="button"
            onClick={() => setActiveTab("posts")}
            className={`px-5 md:px-6 py-2.5 rounded-full font-serif text-xs md:text-sm tracking-[0.16em] uppercase transition-all duration-300 border ${
              activeTab === "posts"
                ? "bg-[#f5eee7] text-[#251f1d] shadow-[0_8px_22px_rgba(37,31,29,0.06)] border-[#c4bcb3]"
                : "border-transparent text-[#5e564e] hover:text-[#251f1d] hover:bg-[#e8e0d8]/70"
            }`}
          >
            Posts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("recommendations")}
            className={`px-5 md:px-6 py-2.5 rounded-full font-serif text-xs md:text-sm tracking-[0.16em] uppercase transition-all duration-300 border ${
              activeTab === "recommendations"
                ? "bg-[#f5eee7] text-[#251f1d] shadow-[0_8px_22px_rgba(37,31,29,0.06)] border-[#c4bcb3]"
                : "border-transparent text-[#5e564e] hover:text-[#251f1d] hover:bg-[#e8e0d8]/70"
            }`}
          >
            Personal Recommendations
          </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          {activeTab === "posts" && (
            <section className="w-full space-y-4 border-t border-[#c4b6a8]/70 pt-8 md:space-y-5 md:pt-10">
              {blogPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </section>
          )}

          {activeTab === "recommendations" && (
            <section className="w-full border-t border-[#c4b6a8]/70 pt-8 md:pt-10">
              <div className="space-y-4">
                {recommendations.map((item, index) => (
                  <article
                    key={item.title}
                    className="group rounded-[1.45rem] border border-[#c4b6a8]/80 bg-[#efe8e0]/55 p-5 transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:border-[#bbaea0] hover:bg-[#f3ede6] hover:shadow-[0_12px_30px_rgba(37,31,29,0.06)] md:p-6"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex rounded-full border border-[#c4b6a8]/80 bg-[#f4ede6]/75 px-3 py-1 font-serif text-[0.65rem] tracking-[0.2em] text-[#7d7268]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[0.62rem] uppercase tracking-[0.2em] text-[#7d7268]">
                        Recommendation
                      </span>
                    </div>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-serif text-[1.02rem] font-semibold leading-tight text-[#3e534d] transition-colors hover:text-[#2d3d38] md:text-[1.12rem]"
                    >
                      {item.title}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </a>

                    <p className="mt-3 max-w-2xl font-serif text-[0.9rem] leading-[1.72] text-[#5e564e] md:text-[0.96rem]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
