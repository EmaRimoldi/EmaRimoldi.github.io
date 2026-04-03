import type { ResearchItem } from "@/content/projects-items";

/** Matches `body` / site background — flat, no gradient fills */
const PAGE_BG = "bg-[#F5EEE9]";

export function ProjectCard({ item, index }: { item: ResearchItem; index: number }) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`project-card-surface group relative overflow-hidden rounded-2xl border border-[#DDD4CE] ${PAGE_BG} p-6 md:p-8 shadow-[0_1px_2px_rgba(38,36,36,0.04)] transition-[border-color,box-shadow] duration-500 ease-out before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#C9B5A0]/35 before:to-transparent hover:border-[#C9BFB5] hover:shadow-[0_4px_24px_rgba(38,36,36,0.06)]`}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <span
          className="font-serif text-xs tabular-nums tracking-[0.14em] text-[#9A928A] pt-1 select-none shrink-0"
          aria-hidden
        >
          {n}
        </span>

        <div className="min-w-0 flex-1 space-y-4">
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#262424] tracking-[-0.02em]">
              {item.title}
            </h2>
            <p className="mt-2 font-serif text-sm md:text-base text-[#6E6763] leading-relaxed">
              {item.descriptor}
            </p>
          </div>

          {item.summary ? (
            <p className="font-serif text-sm md:text-[0.9375rem] text-[#6E6763] leading-relaxed">
              {item.summary}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-2 pt-1">
            {item.year ? (
              <span
                className={`rounded-md border border-[#C9BFB5]/80 ${PAGE_BG} px-2.5 py-1 font-serif text-[10px] uppercase tracking-[0.14em] text-[#5C5652]`}
              >
                {item.year}
              </span>
            ) : null}
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className={`rounded-md border border-[#D8D0C6]/90 ${PAGE_BG} px-2.5 py-1 font-serif text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-[#5C5652]`}
              >
                {tag}
              </span>
            ))}
          </div>

          {item.links && (
            <div className="flex flex-wrap gap-5 border-t border-[#DDD4CE]/50 pt-5 font-serif text-sm">
              {item.links.paper && (
                <a
                  href={item.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1 text-[#262424] underline decoration-[#CCC4BC] underline-offset-4 transition hover:decoration-[#262424]"
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
                  className="group/link inline-flex items-center gap-1 text-[#262424] underline decoration-[#CCC4BC] underline-offset-4 transition hover:decoration-[#262424]"
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
                  className="group/link inline-flex items-center gap-1 text-[#262424] underline decoration-[#CCC4BC] underline-offset-4 transition hover:decoration-[#262424]"
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
