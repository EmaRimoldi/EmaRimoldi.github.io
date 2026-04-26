import type { ResearchItem } from "@/content/projects-items";

/** Matches `body` / site background — flat, no gradient fills */
const PAGE_BG = "bg-[#ebe3db]";

export function ProjectCard({ item, index }: { item: ResearchItem; index: number }) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.6rem] border border-[#c4b6a8]/90 ${PAGE_BG} p-6 md:p-8 shadow-[0_1px_2px_rgba(37,31,29,0.04)] transition-[transform,border-color,box-shadow,background-color] duration-500 ease-out before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(154,107,82,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.38),transparent_44%)] before:opacity-90 after:pointer-events-none after:absolute after:right-5 after:top-5 after:h-12 after:w-12 after:rounded-full after:border after:border-[#c4b6a8]/55 after:opacity-50 after:transition-transform after:duration-500 hover:border-[#bbaea0] hover:bg-[#efe8e0] hover:shadow-[0_14px_40px_rgba(37,31,29,0.08)] hover:-translate-y-1 hover:after:translate-x-1 hover:after:-translate-y-1`}
    >
      <div className="relative z-10 flex flex-col gap-5 md:gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#c4b6a8]/60 pb-4">
          <div className="flex items-start gap-4 md:gap-5">
            <span
              className="shrink-0 rounded-full border border-[#c4b6a8]/80 bg-[#f4ede6]/80 px-3 py-1 font-serif text-[0.65rem] tabular-nums tracking-[0.22em] text-[#7d7268] select-none"
              aria-hidden
            >
              {n}
            </span>

            <div className="min-w-0">
              <h2 className="font-serif text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] text-[#251f1d] md:text-[1.45rem]">
                {item.title}
              </h2>
              <p className="mt-2 max-w-2xl font-serif text-[0.9rem] leading-relaxed text-[#5e564e] md:text-[0.98rem]">
                {item.descriptor}
              </p>
            </div>
          </div>

          {item.year ? (
            <span
              className="inline-flex items-center rounded-full border border-[#bcae9e]/80 bg-[#f1e8df]/80 px-3.5 py-1.5 font-serif text-[0.65rem] uppercase tracking-[0.2em] text-[#524c48]"
            >
              {item.year}
            </span>
          ) : null}
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="space-y-4">
            {item.summary ? (
              <p className="max-w-2xl font-serif text-[0.88rem] leading-[1.72] text-[#5e564e] md:text-[0.94rem]">
                {item.summary}
              </p>
            ) : null}

            <div className="flex flex-wrap gap-2">
              {item.tags?.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border border-[#c4bcb3]/90 ${PAGE_BG} px-3 py-1.5 font-serif text-[0.65rem] uppercase tracking-[0.14em] text-[#524c48] transition-colors duration-300 group-hover:bg-[#f5eee7]`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {item.links && (
            <div className="flex flex-wrap gap-2.5 md:justify-end">
              {item.links.paper && (
                <a
                  href={item.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c4b6a8]/90 bg-[#f4ede6]/75 px-4 py-2 font-serif text-[0.72rem] uppercase tracking-[0.18em] text-[#251f1d] transition-all duration-300 hover:border-[#9a6b52]/55 hover:bg-[#f7f1eb] hover:shadow-[0_8px_22px_rgba(37,31,29,0.06)]"
                >
                  Paper
                  <span
                    className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    ↗
                  </span>
                </a>
              )}
              {item.links.notes && (
                <a
                  href={item.links.notes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c4b6a8]/90 bg-[#f4ede6]/75 px-4 py-2 font-serif text-[0.72rem] uppercase tracking-[0.18em] text-[#251f1d] transition-all duration-300 hover:border-[#9a6b52]/55 hover:bg-[#f7f1eb] hover:shadow-[0_8px_22px_rgba(37,31,29,0.06)]"
                >
                  Notes
                  <span
                    className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    ↗
                  </span>
                </a>
              )}
              {item.links.code && (
                <a
                  href={item.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#c4b6a8]/90 bg-[#f4ede6]/75 px-4 py-2 font-serif text-[0.72rem] uppercase tracking-[0.18em] text-[#251f1d] transition-all duration-300 hover:border-[#9a6b52]/55 hover:bg-[#f7f1eb] hover:shadow-[0_8px_22px_rgba(37,31,29,0.06)]"
                >
                  Code
                  <span
                    className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    ↗
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
