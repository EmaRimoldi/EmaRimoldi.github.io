import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

export function BlogCard({ title, description, href, index }: BlogCardProps) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={href}
      className="group block border-b border-[#DDD4CE]/70 py-9 md:py-11 first:pt-0 transition-[background-color] duration-300 ease-out hover:bg-[#F3EDE6]/60 -mx-1 px-4 sm:px-5 rounded-sm"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-10 md:gap-14">
        <span
          className="shrink-0 font-serif text-sm tabular-nums text-[#9A928A] tracking-[0.12em] pt-1 select-none"
          aria-hidden
        >
          {n}
        </span>
        <div className="min-w-0 flex-1 text-left space-y-2 md:space-y-3">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#262424] leading-snug tracking-tight group-hover:text-[#1a1818] transition-colors duration-300">
            {title}
          </h3>
          <p className="font-serif text-base md:text-[1.05rem] text-[#6E6763] leading-relaxed max-w-2xl">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 pt-2 text-sm text-[#9A928A] group-hover:text-[#262424] transition-colors duration-300 font-serif">
            Read
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
