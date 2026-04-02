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
        <div className="mb-12 md:mb-16">
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-6 md:px-7 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === "posts"
                  ? "bg-[#E8E1DA] text-[#262424]"
                  : "text-[#6E6763] hover:text-[#262424]"
              }`}
            >
              Posts
            </button>
            <button
              onClick={() => setActiveTab("recommendations")}
              className={`px-6 md:px-7 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === "recommendations"
                  ? "bg-[#E8E1DA] text-[#262424]"
                  : "text-[#6E6763] hover:text-[#262424]"
              }`}
            >
              Personal Recommendations
            </button>
          </div>
        </div>

        {/* Posts Tab Content */}
        {activeTab === "posts" && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  href={post.href}
                />
              ))}
            </div>
          </section>
        )}

        {/* Personal Recommendations Tab Content */}
        {activeTab === "recommendations" && (
          <section className="max-w-2xl mx-auto">
            <ul className="space-y-2 list-disc list-inside text-xs md:text-sm leading-relaxed font-sans text-justify">
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
