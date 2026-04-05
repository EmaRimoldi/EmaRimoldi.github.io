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
    <div className="p-6 md:p-7 bg-[#f0ebe5] rounded-lg border border-[#d5cdc4]">
      <div className="mb-3">
        <span className="inline-block text-xs md:text-sm font-medium text-[#5e564e] uppercase tracking-wide mb-2 px-2 py-1 bg-[#e0d8d0] rounded">
          {category}
        </span>
      </div>
      <h3 className="text-base md:text-lg font-semibold leading-snug mb-1 text-[#251f1d]">
        {title}
      </h3>
      {author && (
        <p className="text-xs text-[#5e564e] mb-3 italic md:text-sm">by {author}</p>
      )}
      <p className="text-xs md:text-sm text-[#5e564e] leading-relaxed">
        {note}
      </p>
    </div>
  );
}
