"use client";

import { useState } from "react";

interface AlbumCardProps {
  title: string;
  artist?: string;
  image?: string;
  spotifyUrl: string;
}

export function AlbumCard({ title, artist, image, spotifyUrl }: AlbumCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-transform duration-200 hover:scale-105"
    >
      <div className="aspect-square bg-[#d5cdc4] rounded-lg overflow-hidden flex items-center justify-center text-[#5e564e] text-xs mb-3">
        {image && !imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span>Album</span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-[#251f1d] line-clamp-2 group-hover:text-[#5e564e] transition-colors duration-200 md:text-sm">
          {title}
        </p>
        {artist && (
          <p className="text-xs text-[#5e564e] line-clamp-1">
            {artist}
          </p>
        )}
      </div>
    </a>
  );
}
