import type { BlogPost } from "@/content/blog-posts";

function formatDate(iso: string): string {
  try {
    const d = new Date(iso + (iso.length === 10 ? "T12:00:00" : ""));
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(d);
  } catch {
    return iso;
  }
}

type MetaFields = Pick<
  BlogPost,
  "location" | "language" | "publishedAt" | "readingTimeMinutes" | "tags"
>;

export function BlogPostMetaLine({
  meta,
  variant = "card",
}: {
  meta: MetaFields;
  variant?: "card" | "article";
}) {
  const base =
    variant === "card"
      ? "font-serif text-[11px] md:text-xs text-[#9A928A] tracking-[0.02em]"
      : "font-serif text-[11px] md:text-xs text-[#9A928A] tracking-[0.02em]";

  const core = [
    meta.location,
    meta.language,
    `${meta.readingTimeMinutes} min read`,
    formatDate(meta.publishedAt),
  ].join(" · ");

  const showTagPills = variant === "article" && meta.tags && meta.tags.length > 0;

  return (
    <div className={variant === "article" ? "space-y-3" : ""}>
      <p className={base}>{core}</p>
      {showTagPills ? (
        <ul className="flex flex-wrap gap-2 pt-0.5">
          {meta.tags!.map((tag) => (
            <li key={tag}>
              <span className="inline-block rounded-full border border-[#DDD4CE]/90 bg-[#F3EDE6]/50 px-2.5 py-0.5 font-serif text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-[#6E6763]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
