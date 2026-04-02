export interface PhotoItem {
  id: string;
  image: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

export const photoItems: PhotoItem[] = [
  {
    id: "photo-1",
    image: "/images/photography/Morocco_1.JPG",
    alt: "Morocco landscape",
    aspectRatio: "landscape",
  },
  {
    id: "photo-2",
    image: "/images/photography/Morocco_2.JPG",
    alt: "Morocco scene",
    aspectRatio: "portrait",
  },
  {
    id: "photo-3",
    image: "/images/photography/Morocco_3.JPG",
    alt: "Morocco composition",
    aspectRatio: "landscape",
  },
];
