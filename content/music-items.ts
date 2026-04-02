import spotifyCoverUrls from "./spotify-cover-urls.json";

export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  image: string;
  spotifyUrl: string;
}

const COVERS: Record<string, string> = spotifyCoverUrls;

function coverForAlbumUrl(spotifyUrl: string): string {
  const id = spotifyUrl.match(/album\/([a-zA-Z0-9]+)/)?.[1];
  if (id && COVERS[id]) return COVERS[id];
  return "/images/music/placeholder.svg";
}

const seeds: Omit<MusicItem, "image">[] = [
  {
    id: "album-1",
    title: "People in Cars",
    artist: "Curse of Lono",
    spotifyUrl: "https://open.spotify.com/album/3dtjKtkS6DnwT82RlyzXk8",
  },
  {
    id: "album-2",
    title: "Highway 61 Revisited",
    artist: "Bob Dylan",
    spotifyUrl: "https://open.spotify.com/album/6YabPKtZAjxwyWbuO9p4ZD",
  },
  {
    id: "album-3",
    title: "Heart Shaped World",
    artist: "Chris Isaak",
    spotifyUrl: "https://open.spotify.com/album/5Das42Qx4AoU9iT4M7PW3U",
  },
  {
    id: "album-4",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    spotifyUrl: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv",
  },
  {
    id: "album-5",
    title: "Nevermind",
    artist: "Nirvana",
    spotifyUrl: "https://open.spotify.com/album/2UJcKiJxNryhL050F5Z1Fk",
  },
  {
    id: "album-6",
    title: "Californication",
    artist: "Red Hot Chili Peppers",
    spotifyUrl: "https://open.spotify.com/album/0fLhefnjlIV3pGNF9Wo8CD",
  },
  {
    id: "album-7",
    title: "Ray of Light",
    artist: "Madonna",
    spotifyUrl: "https://open.spotify.com/album/6cuNyrSmRjBeekioLdLkvI",
  },
  {
    id: "album-8",
    title: "Live at the Regal",
    artist: "B.B. King",
    spotifyUrl: "https://open.spotify.com/album/7njGz7ZeDXL6cH3VnflcQ2",
  },
  {
    id: "album-9",
    title: "Pink Moon",
    artist: "Nick Drake",
    spotifyUrl: "https://open.spotify.com/album/5mwOo1zikswhmfHvtqVSXg",
  },
];

/** Covers resolved from Spotify oEmbed at build time (`npm run fetch-covers`). */
export const musicItems: MusicItem[] = seeds.map((item) => ({
  ...item,
  image: coverForAlbumUrl(item.spotifyUrl),
}));
