"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/content/blog-posts";

type BlogTab = "posts" | "recommendations";

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

        <div className="mb-12 md:mb-14 flex flex-wrap gap-2 justify-center items-center">
          <button
            type="button"
            onClick={() => setActiveTab("posts")}
            className={`px-5 md:px-6 py-2.5 rounded-full font-serif text-xs md:text-sm tracking-wide transition-all duration-300 border border-transparent ${
              activeTab === "posts"
                ? "bg-[#cec6bd] text-[#251f1d] shadow-sm border-[#c4bcb3]"
                : "text-[#5e564e] hover:text-[#251f1d] hover:bg-[#e2dad2]/60"
            }`}
          >
            Posts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("recommendations")}
            className={`px-5 md:px-6 py-2.5 rounded-full font-serif text-xs md:text-sm tracking-wide transition-all duration-300 border border-transparent ${
              activeTab === "recommendations"
                ? "bg-[#cec6bd] text-[#251f1d] shadow-sm border-[#c4bcb3]"
                : "text-[#5e564e] hover:text-[#251f1d] hover:bg-[#e2dad2]/60"
            }`}
          >
            Personal Recommendations
          </button>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          {activeTab === "posts" && (
            <section className="w-full border-t border-[#c4b6a8]/70 pt-8 md:pt-10">
              {blogPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </section>
          )}

          {activeTab === "recommendations" && (
            <section className="w-full border-t border-[#c4b6a8]/70 pt-8 md:pt-10">
              <ul className="space-y-5 text-xs md:text-sm leading-relaxed font-serif text-[#5e564e] text-left list-none pl-0">
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[#9a6b52] before:content-['']">
                <a
                  href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#3e534d] border-b border-dotted border-[#8fa39d] hover:text-[#2d3d38] transition-colors"
                >
                  Gödel, Escher, Bach
                </a>
                : A spiraling exploration of patterns, self-reference, and consciousness; how meaning emerges from the interplay of formal systems.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[#9a6b52] before:content-['']">
                <a
                  href="https://www.semanticscholar.org/paper/The-Architecture-of-Complexity-Simon/03511041271257b85e6d9058e51f02cf5f4e3937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#3e534d] border-b border-dotted border-[#8fa39d] hover:text-[#2d3d38] transition-colors"
                >
                  The Architecture of Complexity
                </a>
                : Herbert Simon on why the universe builds hierarchies; what this reveals about intelligence, constraint, and emergent order.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[#9a6b52] before:content-['']">
                <a
                  href="https://www.penguinrandomhouse.com/books/324430/ways-of-seeing-by-john-berger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#3e534d] border-b border-dotted border-[#8fa39d] hover:text-[#2d3d38] transition-colors"
                >
                  Ways of Seeing
                </a>
                : John Berger on perception and visual culture; how embodied experience shapes understanding.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[#9a6b52] before:content-['']">
                <a
                  href="https://en.wikipedia.org/wiki/A_Mathematician%27s_Apology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#3e534d] border-b border-dotted border-[#8fa39d] hover:text-[#2d3d38] transition-colors"
                >
                  A Mathematician&apos;s Apology
                </a>
                : G.H. Hardy on the beauty and necessity of rigorous thought; why elegance and truth are inseparable.
              </li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-[#9a6b52] before:content-['']">
                <a
                  href="https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#3e534d] border-b border-dotted border-[#8fa39d] hover:text-[#2d3d38] transition-colors"
                >
                  The Structure of Scientific Revolutions
                </a>
                : Thomas Kuhn on paradigms and how frameworks shape what we can perceive and understand.
              </li>
            </ul>
            </section>
          )}
        </div>
      </ContentContainer>
    </PageShell>
  );
}
