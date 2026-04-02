"use client";

import { useState } from "react";

export function ProfileImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex justify-center mb-8">
      {!imageError ? (
        <img
          src="/images/about/profile.jpg"
          alt="Emanuele Rimoldi portrait"
          className={`w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-sm transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      ) : null}
      {!imageLoaded && imageError && (
        <div className="w-48 h-48 md:w-56 md:h-56 bg-[#DDD4CE] rounded-lg shadow-sm flex items-center justify-center">
          <p className="text-[#6E6763] text-sm text-center px-4">
            Profile image coming soon
          </p>
        </div>
      )}
    </div>
  );
}
