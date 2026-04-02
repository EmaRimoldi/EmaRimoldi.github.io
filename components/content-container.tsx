interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "site" | "content" | "reading";
}

export function ContentContainer({
  children,
  className = "",
  maxWidth = "content",
}: ContentContainerProps) {
  const widthClasses = {
    site: "max-w-[1280px]",
    content: "max-w-[1180px]",
    reading: "max-w-[760px]",
  };

  return (
    <div
      className={`site-container ${widthClasses[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
}
