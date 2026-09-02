# Stack: Astro (migrated from Next.js)

This project was migrated from Next.js (App Router) to **Astro** with static output. Key points for working in this codebase:

- Pages live in `src/pages/*.astro` (currently just `index.astro`, a single-page site). Shared HTML shell/head/fonts/meta tags are in `src/layouts/Layout.astro`.
- Interactive UI is built with **React islands** (`src/components/*.tsx`, no `"use client"` directive needed — that's a Next.js-ism). Mount them in `.astro` files with a `client:*` directive (`client:load`, `client:visible`, etc.) or they render as static, zero-JS markup.
- `src/components/*.astro` are Astro-only components (e.g. `ShadeSwatch.astro`) — no client JS unless they contain a `<script>` tag or embed a React island.
- Non-interactive, page-wide behavior (scroll-reveal, nav hide/show, scroll-spy) lives as a plain vanilla-JS `<script>` in `Layout.astro` — no React needed for that.
- Tailwind v4 is wired in via the `@tailwindcss/vite` plugin (see `astro.config.mjs`), not PostCSS. Theme tokens live in `src/styles/global.css`.
- Images referenced from `public/images/` are plain `<img>` tags (no `next/image`); there's no built-in image-optimization pipeline here.
- `favicon`/OG image are **pre-generated static PNGs** in `public/` (`icon.png`, `apple-icon.png`, `og-image.png`) built once via `scripts/generate-brand-images.mjs` (uses `sharp`) — Astro has no equivalent to Next's `next/og` dynamic `ImageResponse` routes, so these are static, not regenerated per request. Re-run that script and commit the output if the source hero photo or wordmark design changes.
- `robots.txt` and `sitemap.xml` are static files in `public/`, not generated routes.

# Brand identity — theoo

This site is for the beauty/skincare brand **theoo**. Tagline: "Effortless, like you!". When building or styling UI, follow this CI unless told otherwise.

- **Fonts:** body text uses **Poppins**; the logo and headings use **League Spartan**.
- **Color palette** (use these as the shadcn/Tailwind theme tokens, not arbitrary colors):
  - `#A6A195` — primary (warm taupe/greige)
  - `#C7CBC8` — secondary (sage grey)
  - `#F6F4F0` — background (off-white/cream)
  - `#E4E4E4` — muted / borders (light grey)
  - `#5F5143` — dark accent / text (deep brown)
- **Visual tone:** clean, minimal, warm-neutral. Moodboard reference: soft glowing skin, glossy lips, minimal skincare/makeup product photography, marble textures. Avoid loud/saturated colors — stay within the palette above.
- Source images live in `public/images/` (numbered `1.jpg`, `2.png`, …).
