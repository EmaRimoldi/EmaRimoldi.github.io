interface RecommendationCardProps {
  title: string;
  author?: string;
  category: string;
  note: string;
}

export function RecommendationCard({
  title,
  author,
  category,
  note,
}: RecommendationCardProps) {
  return (
    <div className="p-6 md:p-7 bg-[#F9F5F1] rounded-lg border border-[#E8E1DA]">
      <div className="mb-3">
        <span className="inline-block text-xs md:text-sm font-medium text-[#6E6763] uppercase tracking-wide mb-2 px-2 py-1 bg-[#EFE9E3] rounded">
          {category}
        </span>
      </div>
      <h3 className="text-base md:text-lg font-semibold leading-snug mb-1 text-[#262424]">
        {title}
      </h3>
      {author && (
        <p className="text-xs text-[#6E6763] mb-3 italic md:text-sm">by {author}</p>
      )}
      <p className="text-xs md:text-sm text-[#6E6763] leading-relaxed">
        {note}
      </p>
    </div>
  );
}
