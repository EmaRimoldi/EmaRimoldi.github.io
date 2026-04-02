export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  image: string;
  spotifyUrl: string;
}

/** Cover art uses local placeholders — external CDNs (e.g. Cover Art Archive) often break on static hosting. */
export const musicItems: MusicItem[] = [
  {
    id: "album-1",
    title: "People in Cars",
    artist: "Curse of Lono",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/3dtjKtkS6DnwT82RlyzXk8",
  },
  {
    id: "album-2",
    title: "Highway 61 Revisited",
    artist: "Bob Dylan",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/6YabPKtZAjxwyWbuO9p4ZD",
  },
  {
    id: "album-3",
    title: "Heart Shaped World",
    artist: "Chris Isaak",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/5Das42Qx4AoU9iT4M7PW3U",
  },
  {
    id: "album-4",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv",
  },
  {
    id: "album-5",
    title: "Nevermind",
    artist: "Nirvana",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/2guNUzAm232A0twj81rk75",
  },
  {
    id: "album-6",
    title: "Californication",
    artist: "Red Hot Chili Peppers",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/0fLhefnjlIV3pGNF9Wo8CD",
  },
  {
    id: "album-7",
    title: "Ray of Light",
    artist: "Madonna",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/6cuNyrSmRjBeekioLdLkvI",
  },
  {
    id: "album-8",
    title: "Live at the Regal",
    artist: "B.B. King",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/7njGz7ZeDXL6cH3VnflcQ2",
  },
  {
    id: "album-9",
    title: "Pink Moon",
    artist: "Nick Drake",
    image: "/images/music/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/5mwOo1zikswhmfHvtqVSXg",
  },
];
