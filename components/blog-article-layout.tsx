import type { ReactNode } from "react";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { DecorativeRule } from "@/components/page-header";
import { BlogPostMetaLine } from "@/components/blog-post-meta";
import { BlogReferences } from "@/components/blog-references";
import type { BlogPost } from "@/content/blog-posts";

export function BlogArticleLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <ContentContainer maxWidth="reading" className="py-16 md:py-24">
        <Link
          href="/blog"
          className="blog-nav-back mb-8 md:mb-10 inline-flex items-center rounded-full border border-[#c4b6a8]/80 bg-[#f0e9e2]/75 px-4 py-2 text-xs text-[#5e564e] transition-all hover:border-[#9a6b52]/40 hover:bg-[#f5eee7] hover:text-[#251f1d] hover:shadow-[0_8px_20px_rgba(37,31,29,0.05)] md:text-sm"
        >
          Back to Blog
        </Link>

        <article className="blog-article rounded-[1.9rem] border border-[#c4b6a8]/80 bg-[#efe8e0]/55 p-6 shadow-[0_1px_3px_rgba(37,31,29,0.04)] md:p-8 lg:p-10">
          <header className="blog-article-header">
            <p className="mb-4 font-serif text-[0.62rem] uppercase tracking-[0.24em] text-[#7d7268]">
              Essay
            </p>
            <h1 className="blog-article-title">{post.title}</h1>
            <p className="blog-article-deck">{post.description}</p>
            <div className="blog-article-meta-panel">
              <BlogPostMetaLine meta={post} variant="article" />
            </div>
            <DecorativeRule className="blog-article-rule opacity-90" />
          </header>

          <div className="blog-article-body">{children}</div>
          {post.references && post.references.length > 0 ? (
            <BlogReferences items={post.references} />
          ) : null}
        </article>

        <div className="blog-article-footer-nav mt-14 border-t border-[#c4b6a8]/50 pt-8 md:mt-16 md:pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-[#c4b6a8]/80 bg-[#f0e9e2]/75 px-4 py-2 text-xs text-[#251f1d] transition-all hover:border-[#9a6b52]/40 hover:bg-[#f5eee7] hover:shadow-[0_8px_20px_rgba(37,31,29,0.05)] md:text-sm"
          >
            Back to all articles
          </Link>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
