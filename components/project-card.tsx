import type { ResearchItem } from "@/content/projects-items";

export function ProjectCard({ item, index }: { item: ResearchItem; index: number }) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      className="group relative rounded-2xl border border-[#D8CFC4]/90 bg-gradient-to-br from-[#FBF9F6] via-[#F7F2EC] to-[#F0E8E0] p-6 md:p-8 shadow-[0_1px_3px_rgba(38,36,36,0.06)] transition-all duration-300 ease-out hover:border-[#BFB3A5] hover:shadow-[0_8px_28px_rgba(38,36,36,0.08)] hover:-translate-y-0.5"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DDD4CE]/80 to-transparent opacity-80" />

      <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div className="flex items-start gap-3 md:gap-4">
          <span
            className="font-serif text-xs tabular-nums tracking-[0.14em] text-[#9A928A] pt-1 select-none"
            aria-hidden
          >
            {n}
          </span>
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#262424] tracking-tight group-hover:text-[#1a1818] transition-colors duration-300">
              {item.title}
            </h2>
            <p className="mt-2 font-serif text-sm md:text-base italic text-[#5C5652] leading-snug">
              {item.descriptor}
            </p>
          </div>
        </div>
      </header>

      <p className="font-serif text-sm md:text-[0.9375rem] text-[#6E6763] leading-relaxed max-w-3xl border-l-2 border-[#DDD4CE]/70 pl-4 md:pl-5">
        {item.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.year && (
          <span className="rounded-full border border-[#DDD4CE]/80 bg-[#F5EEE9]/80 px-3 py-1 font-serif text-xs text-[#4A4542] transition-colors duration-300 group-hover:border-[#C9BFB5] group-hover:bg-[#EDE8E2]">
            {item.year}
          </span>
        )}
        {item.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-transparent bg-[#E8E1DA]/50 px-3 py-1 font-serif text-xs text-[#4A4542] transition-colors duration-300 group-hover:bg-[#DDD4CE]/60"
          >
            {tag}
          </span>
        ))}
      </div>

      {item.links && (
        <div className="mt-6 flex flex-wrap gap-5 border-t border-[#DDD4CE]/40 pt-5 font-serif text-sm">
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
    </article>
  );
}
