import type { ResearchItem } from "@/content/projects-items";

const buttonClassName =
  "inline-flex items-center gap-2 rounded-full border border-[#c4b6a8]/90 bg-[#f4ede6]/85 px-4 py-2 font-serif text-[0.72rem] uppercase tracking-[0.18em] text-[#251f1d] transition-all duration-300 hover:border-[#9a6b52]/55 hover:bg-[#f8f1ea] hover:shadow-[0_8px_22px_rgba(37,31,29,0.08)]";

export function ProjectCard({ item, index }: { item: ResearchItem; index: number }) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      className="group relative overflow-hidden rounded-[1.6rem] border border-[#c4b6a8]/90 bg-[#ebe3db] p-6 shadow-[0_1px_2px_rgba(37,31,29,0.04)] transition-[transform,border-color,box-shadow,background-color] duration-500 ease-out after:pointer-events-none after:absolute after:right-5 after:top-5 after:h-12 after:w-12 after:rounded-full after:border after:border-[#c4b6a8]/55 after:bg-[#f4ede6]/30 after:opacity-60 after:transition-transform after:duration-500 hover:-translate-y-1 hover:border-[#bbaea0] hover:shadow-[0_16px_44px_rgba(37,31,29,0.1)] hover:after:translate-x-1 hover:after:-translate-y-1 md:p-8"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.46] saturate-[0.9] transition-[opacity,transform,filter] duration-700 group-hover:scale-[1.015] group-hover:opacity-[0.54]"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundPosition: item.imagePosition ?? "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(235,227,219,0.96)_0%,rgba(235,227,219,0.91)_42%,rgba(235,227,219,0.74)_100%),radial-gradient(circle_at_top_right,rgba(154,107,82,0.13),transparent_36%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9a6b52]/35 to-transparent"
      />
      <div className="relative z-10 flex flex-col gap-5 md:gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#c4b6a8]/60 pb-4">
          <div className="flex items-start gap-4 md:gap-5">
            <span
              className="shrink-0 rounded-full border border-[#c4b6a8]/80 bg-[#f4ede6]/85 px-3 py-1 font-serif text-[0.65rem] tabular-nums tracking-[0.22em] text-[#7d7268] select-none"
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
                  className="rounded-full border border-[#c4bcb3]/90 bg-[#f4ede6]/80 px-3 py-1.5 font-serif text-[0.65rem] uppercase tracking-[0.14em] text-[#524c48] transition-colors duration-300 group-hover:bg-[#f8f1ea]/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {item.links && (
            <div className="flex flex-wrap gap-2.5 md:justify-end">
              {item.links.demo && (
                <a
                  href={item.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName}
                >
                  Demo
                  <span
                    className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    ↗
                  </span>
                </a>
              )}
              {item.links.paper && (
                <a
                  href={item.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName}
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
                  className={buttonClassName}
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
                  className={buttonClassName}
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
