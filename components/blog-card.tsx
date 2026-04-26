import Link from "next/link";
import type { BlogPost } from "@/content/blog-posts";
import { BlogPostMetaLine } from "@/components/blog-post-meta";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={post.href}
      className="group relative block overflow-hidden rounded-[1.6rem] border border-[#c4b6a8]/85 bg-[#efe8e0]/55 px-5 py-6 transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out before:pointer-events-none before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#9a6b52]/45 before:to-transparent after:pointer-events-none after:absolute after:right-5 after:top-5 after:h-10 after:w-10 after:rounded-full after:border after:border-[#c4b6a8]/55 after:opacity-50 after:transition-transform after:duration-300 hover:-translate-y-1 hover:border-[#bbaea0] hover:bg-[#f3ede6] hover:shadow-[0_14px_36px_rgba(37,31,29,0.07)] hover:after:translate-x-1 hover:after:-translate-y-1 md:px-6 md:py-7"
    >
      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div className="flex items-center gap-3 md:block md:shrink-0">
          <span
            className="inline-flex rounded-full border border-[#c4b6a8]/85 bg-[#f4ede6]/80 px-3 py-1 font-serif text-[0.65rem] tabular-nums tracking-[0.2em] text-[#7d7268] select-none md:mb-4"
            aria-hidden
          >
            {n}
          </span>
          <span className="font-serif text-[0.62rem] uppercase tracking-[0.22em] text-[#7d7268] md:block">
            Essay
          </span>
        </div>

        <div className="min-w-0 flex-1 text-left">
          <div className="space-y-2.5 md:space-y-3">
          <h3 className="blog-card-title">{post.title}</h3>
          <BlogPostMetaLine meta={post} variant="card" />
          <p className="max-w-2xl font-serif text-[0.92rem] leading-[1.72] text-[#5e564e] md:text-[0.97rem]">
            {post.description}
          </p>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#c4b6a8]/55 pt-4">
            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#c4b6a8]/60 to-transparent sm:block" />
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c4b6a8]/85 bg-[#f4ede6]/85 px-3.5 py-1.5 font-serif text-[0.65rem] uppercase tracking-[0.2em] text-[#251f1d] transition-all duration-300 group-hover:border-[#9a6b52]/55 group-hover:bg-[#f8f1ea] group-hover:shadow-[0_8px_22px_rgba(37,31,29,0.06)]">
              Read essay
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
