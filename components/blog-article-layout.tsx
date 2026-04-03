import type { ReactNode } from "react";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ContentContainer } from "@/components/content-container";
import { DecorativeRule } from "@/components/page-header";
import { BlogPostMetaLine } from "@/components/blog-post-meta";
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
          className="blog-nav-back mb-10 md:mb-12 inline-block text-sm text-[#6E6763] transition-colors hover:text-[#262424]"
        >
          Back to Blog
        </Link>

        <article className="blog-article">
          <header className="blog-article-header">
            <h1 className="blog-article-title">{post.title}</h1>
            <p className="blog-article-deck">{post.description}</p>
            <div className="blog-article-meta-panel">
              <BlogPostMetaLine meta={post} variant="article" />
            </div>
            <DecorativeRule className="blog-article-rule opacity-90" />
          </header>

          <div className="blog-article-body">{children}</div>
        </article>

        <div className="blog-article-footer-nav mt-20 border-t border-[#DDD4CE]/50 pt-10">
          <Link
            href="/blog"
            className="inline-block text-sm text-[#262424] transition-opacity hover:opacity-65"
          >
            Back to all articles
          </Link>
        </div>
      </ContentContainer>
    </PageShell>
  );
}
