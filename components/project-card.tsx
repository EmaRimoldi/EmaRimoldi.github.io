import type { ResearchItem } from "@/content/projects-items";

/** Matches `body` / site background — flat, no gradient fills */
const PAGE_BG = "bg-[#ebe3db]";

export function ProjectCard({ item, index }: { item: ResearchItem; index: number }) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`project-card-surface group relative overflow-hidden rounded-2xl border border-[#c4b6a8] ${PAGE_BG} p-6 md:p-8 shadow-[0_1px_2px_rgba(37, 31, 29,0.04)] transition-[border-color,box-shadow] duration-500 ease-out before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#9a6b52]/35 before:to-transparent hover:border-[#C9BFB5] hover:shadow-[0_4px_24px_rgba(37, 31, 29,0.06)]`}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <span
          className="font-serif text-xs tabular-nums tracking-[0.14em] text-[#7d7268] pt-1 select-none shrink-0"
          aria-hidden
        >
          {n}
        </span>

        <div className="min-w-0 flex-1 space-y-4">
          <div>
            <h2 className="font-serif text-lg md:text-xl font-semibold text-[#251f1d] tracking-[-0.02em]">
              {item.title}
            </h2>
            <p className="mt-2 font-serif text-xs md:text-sm text-[#5e564e] leading-relaxed">
              {item.descriptor}
            </p>
          </div>

          {item.summary ? (
            <p className="font-serif text-xs md:text-[0.875rem] text-[#5e564e] leading-relaxed">
              {item.summary}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-2 pt-1">
            {item.year ? (
              <span
                className={`rounded-md border border-[#C9BFB5]/80 ${PAGE_BG} px-2.5 py-1 font-serif text-[10px] uppercase tracking-[0.14em] text-[#524c48]`}
              >
                {item.year}
              </span>
            ) : null}
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className={`rounded-md border border-[#c4bcb3]/90 ${PAGE_BG} px-2.5 py-1 font-serif text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-[#524c48]`}
              >
                {tag}
              </span>
            ))}
          </div>

          {item.links && (
            <div className="flex flex-wrap gap-5 border-t border-[#c4b6a8]/50 pt-4 font-serif text-xs md:text-sm">
              {item.links.paper && (
                <a
                  href={item.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-[#251f1d] underline decoration-[#CCC4BC] underline-offset-4 transition hover:decoration-[#251f1d]"
                >
                  Paper
                  <span
                    className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              )}
              {item.links.notes && (
                <a
                  href={item.links.notes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-[#251f1d] underline decoration-[#CCC4BC] underline-offset-4 transition hover:decoration-[#251f1d]"
                >
                  Notes
                  <span
                    className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              )}
              {item.links.code && (
                <a
                  href={item.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-[#251f1d] underline decoration-[#CCC4BC] underline-offset-4 transition hover:decoration-[#251f1d]"
                >
                  Code
                  <span
                    className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
