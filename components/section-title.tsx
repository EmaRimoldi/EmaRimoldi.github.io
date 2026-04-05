interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h1
      className={`text-2xl md:text-3xl font-serif font-semibold text-[#262424] mb-6 md:mb-10 ${className}`}
    >
      {children}
    </h1>
  );
}
