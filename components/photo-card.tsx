interface PhotoCardProps {
  image: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export function PhotoCard({
  image,
  alt,
  aspectRatio = "portrait",
}: PhotoCardProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[2/3]",
    landscape: "aspect-[3/2]",
  };

  return (
    <div
      className={`${aspectClasses[aspectRatio]} bg-[#E8E1DA] rounded-lg overflow-hidden`}
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
