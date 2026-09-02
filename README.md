This is the **theoo** marketing site, built with [Astro](https://astro.build) (static output) and React islands for interactive parts (search, the virtual lip try-on).

## Brand / Design System — theoo

**Tagline:** "Effortless, like you!"

### Fonts

| Use  | Font           |
| ---- | -------------- |
| Body | Poppins        |
| Logo / Headings | League Spartan |

### Color Palette

| Swatch | Hex       | Role                        |
| ------ | --------- | ---------------------------- |
| ⬜     | `#A6A195` | Primary (warm taupe/greige) |
| ⬜     | `#C7CBC8` | Secondary (sage grey)       |
| ⬜     | `#F6F4F0` | Background (off-white/cream) |
| ⬜     | `#E4E4E4` | Muted / borders (light grey) |
| ⬛     | `#5F5143` | Dark accent / text (deep brown) |

### Moodboard

Soft, glowing skin; glossy lips; minimal skincare & makeup product photography; warm neutral tones; marble textures. Overall feel: clean, effortless, understated beauty.

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The homepage is `src/pages/index.astro`; the shared HTML shell (fonts, meta tags, global scroll behavior) is `src/layouts/Layout.astro`. Interactive pieces (search, the virtual try-on) are React components in `src/components/` mounted as Astro islands.

## Build

```bash
bun run build   # outputs to dist/
bun run start   # preview the production build locally
```

## Deploy on Vercel

Vercel auto-detects Astro projects — connect the GitHub repo and push to deploy, no extra adapter needed since this site builds to static output.
