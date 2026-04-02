/**
 * Fetches album cover URLs via Spotify's public oEmbed endpoint (no API keys).
 * Run automatically before `next build` (see package.json prebuild).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const musicItemsPath = path.join(root, "content", "music-items.ts");
const outPath = path.join(root, "content", "spotify-cover-urls.json");

function extractAlbumUrls(tsSource) {
  const re = /https:\/\/open\.spotify\.com\/album\/[a-zA-Z0-9]+/g;
  return [...new Set(tsSource.match(re) ?? [])];
}

async function main() {
  if (process.env.SKIP_SPOTIFY_COVERS === "1") {
    console.log("SKIP_SPOTIFY_COVERS=1 — skipping oEmbed fetch.");
    return;
  }

  const tsSource = fs.readFileSync(musicItemsPath, "utf8");
  const urls = extractAlbumUrls(tsSource);

  if (urls.length === 0) {
    console.warn("No Spotify album URLs found in music-items.ts");
    return;
  }

  const map = {};
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const errors = [];

  for (const url of urls) {
    const id = url.split("/").pop();
    try {
      const oembed = `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`;
      const res = await fetch(oembed, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) {
        errors.push(`${url} → HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      if (!data.thumbnail_url) {
        errors.push(`${url} → no thumbnail_url`);
        continue;
      }
      map[id] = data.thumbnail_url;
    } catch (err) {
      errors.push(`${url} → ${err.message}`);
    }
    await delay(200);
  }

  if (Object.keys(map).length === 0) {
    if (fs.existsSync(outPath)) {
      const existing = JSON.parse(fs.readFileSync(outPath, "utf8"));
      if (Object.keys(existing).length > 0) {
        console.warn("oEmbed returned no covers; keeping existing spotify-cover-urls.json");
        if (errors.length) console.warn(errors.join("\n"));
        process.exit(0);
      }
    }
    console.error("No covers fetched:\n", errors.join("\n"));
    process.exit(1);
  }

  fs.writeFileSync(outPath, JSON.stringify(map, null, 2) + "\n");
  console.log(`Wrote ${Object.keys(map).length} cover URLs to content/spotify-cover-urls.json`);
  if (errors.length) {
    console.warn("Some albums skipped (placeholder will be used):\n", errors.join("\n"));
  }
}

main();
