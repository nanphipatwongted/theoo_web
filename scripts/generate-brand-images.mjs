// One-off script to pre-render the icon/apple-icon/OG image as static PNGs
// for the Astro migration (Next.js's next/og ImageResponse route convention
// has no direct Astro equivalent, and these images are fully static anyway).
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const BG = "#5F5143";
const FG = "#F6F4F0";

await mkdir("public", { recursive: true });

function wordmarkSvg(size, fontSize, letterSpacing) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
      <rect width="${size}" height="${size}" fill="${BG}"/>
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
        font-family="Arial, sans-serif" font-weight="700" font-size="${fontSize}"
        letter-spacing="${letterSpacing}" fill="${FG}">theoo</text>
    </svg>
  `);
}

await sharp(wordmarkSvg(32, 13, -1)).png().toFile("public/icon.png");
await sharp(wordmarkSvg(180, 62, -4.5)).png().toFile("public/apple-icon.png");
console.log("icon.png + apple-icon.png done");

// --- OG image: hero photo + gradient + wordmark + tagline ---
const W = 1200;
const H = 630;

const hero = await sharp("public/images/19.jpg")
  .resize(W, H, { fit: "cover" })
  .toBuffer();

const overlaySvg = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="g" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="rgba(20,16,12,0.65)"/>
        <stop offset="55%" stop-color="rgba(20,16,12,0.05)"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <text x="64" y="${H - 110}" font-family="Arial, sans-serif" font-weight="700"
      font-size="72" letter-spacing="-3" fill="${FG}">theoo</text>
    <text x="64" y="${H - 60}" font-family="Arial, sans-serif" font-size="34"
      fill="${FG}">The Mood Lip Gloss — Effortless, like you!</text>
  </svg>
`);

await sharp(hero)
  .composite([{ input: overlaySvg }])
  .png()
  .toFile("public/og-image.png");

console.log("og-image.png done");
