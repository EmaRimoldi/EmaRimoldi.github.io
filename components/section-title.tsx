interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h1
      className={`text-3xl md:text-4xl font-serif font-semibold text-[#262424] mb-8 md:mb-12 ${className}`}
    >
      {children}
    </h1>
  );
}
