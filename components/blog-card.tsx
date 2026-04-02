interface BlogCardProps {
  title: string;
  description: string;
  href: string;
}

export function BlogCard({ title, description, href }: BlogCardProps) {
  return (
    <a
      href={href}
      className="block p-6 md:p-7 bg-[#F9F5F1] rounded-lg border border-[#E8E1DA] transition-colors duration-200 hover:bg-[#F5F1ED] hover:border-[#DDD4CE]"
    >
      <h3 className="text-lg md:text-xl font-semibold leading-snug mb-3 text-[#262424]">
        {title}
      </h3>
      <p className="text-sm md:text-base text-[#6E6763] leading-relaxed">
        {description}
      </p>
    </a>
  );
}
