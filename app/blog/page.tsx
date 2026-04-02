"use client";

import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/content/blog-posts";

type BlogTab = "posts" | "recommendations";

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<BlogTab>("posts");

  return (
    <PageShell>
      <ContentContainer maxWidth="content" className="py-16 md:py-24">
        {/* Tab Navigation */}
        <div className="mb-14 md:mb-16">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <button
              type="button"
              onClick={() => setActiveTab("posts")}
              className={`px-5 md:px-6 py-2.5 rounded-full font-serif text-sm md:text-base tracking-wide transition-all duration-300 ${
                activeTab === "posts"
                  ? "bg-[#E4DDD4] text-[#262424] shadow-sm"
                  : "text-[#6E6763] hover:text-[#262424] hover:bg-[#EDE8E2]/50"
              }`}
            >
              Posts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("recommendations")}
              className={`px-5 md:px-6 py-2.5 rounded-full font-serif text-sm md:text-base tracking-wide transition-all duration-300 ${
                activeTab === "recommendations"
                  ? "bg-[#E4DDD4] text-[#262424] shadow-sm"
                  : "text-[#6E6763] hover:text-[#262424] hover:bg-[#EDE8E2]/50"
              }`}
            >
              Personal Recommendations
            </button>
          </div>
        </div>

        {/* Posts Tab Content */}
        {activeTab === "posts" && (
          <section className="max-w-3xl mx-auto border-t border-[#DDD4CE]/80">
            {blogPosts.map((post, i) => (
              <BlogCard
                key={post.slug}
                index={i}
                title={post.title}
                description={post.description}
                href={post.href}
              />
            ))}
          </section>
        )}

        {/* Personal Recommendations Tab Content */}
        {activeTab === "recommendations" && (
          <section className="max-w-2xl mx-auto">
            <ul className="space-y-5 list-disc list-inside text-sm md:text-base leading-relaxed font-serif text-[#262424] text-left pl-1">
              <li className="text-[#262424]">
                <a href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-60 transition-opacity duration-200">Gödel, Escher, Bach</a>: A spiraling exploration of patterns, self-reference, and consciousness; how meaning emerges from the interplay of formal systems.
              </li>
              <li className="text-[#262424]">
                <a href="https://www.semanticscholar.org/paper/The-Architecture-of-Complexity-Simon/03511041271257b85e6d9058e51f02cf5f4e3937" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-60 transition-opacity duration-200">The Architecture of Complexity</a>: Herbert Simon on why the universe builds hierarchies; what this reveals about intelligence, constraint, and emergent order.
              </li>
              <li className="text-[#262424]">
                <a href="https://www.penguinrandomhouse.com/books/324430/ways-of-seeing-by-john-berger/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-60 transition-opacity duration-200">Ways of Seeing</a>: John Berger on perception and visual culture; how embodied experience shapes understanding.
              </li>
              <li className="text-[#262424]">
                <a href="https://en.wikipedia.org/wiki/A_Mathematician%27s_Apology" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-60 transition-opacity duration-200">A Mathematician's Apology</a>: G.H. Hardy on the beauty and necessity of rigorous thought; why elegance and truth are inseparable.
              </li>
              <li className="text-[#262424]">
                <a href="https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-60 transition-opacity duration-200">The Structure of Scientific Revolutions</a>: Thomas Kuhn on paradigms and how frameworks shape what we can perceive and understand.
              </li>
            </ul>
          </section>
        )}
      </ContentContainer>
    </PageShell>
  );
}
