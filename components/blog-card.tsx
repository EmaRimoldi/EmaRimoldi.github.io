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
      className="group relative block border-b border-[#DDD4CE]/70 py-9 md:py-11 first:pt-0 transition-[background-color] duration-300 ease-out before:pointer-events-none before:absolute before:left-0 before:top-12 before:bottom-12 before:w-px before:bg-gradient-to-b before:from-transparent before:via-[#C9B5A0]/45 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:bg-[#F3EDE6]/60 hover:before:opacity-100 -mx-1 px-4 sm:px-5 rounded-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-10 md:gap-14">
        <span
          className="shrink-0 font-serif text-xs tabular-nums text-[#9A928A] tracking-[0.12em] pt-1 select-none md:text-[0.8125rem]"
          aria-hidden
        >
          {n}
        </span>
        <div className="min-w-0 flex-1 text-left space-y-2 md:space-y-3">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-[#262424] leading-snug tracking-tight group-hover:text-[#1a1818] transition-colors duration-300">
            {post.title}
          </h3>
          <BlogPostMetaLine meta={post} variant="card" />
          <p className="font-serif text-sm md:text-[0.95rem] text-[#6E6763] leading-relaxed max-w-2xl">
            {post.description}
          </p>
          <span className="inline-flex items-center gap-1.5 pt-2 text-xs text-[#9A928A] group-hover:text-[#262424] transition-colors duration-300 font-serif md:text-sm">
            Read
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
