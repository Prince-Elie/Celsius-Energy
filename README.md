# Celsius Energy — Scroll Experience

A cinematic, scroll-driven landing page for the **Celsius Energy** drink brand, built as a front-end showcase of advanced GSAP animation, pinned sections, and clip-path reveals. Every section is choreographed to the scrollbar: titles wipe in, cans slide through a horizontal slider, videos pin and play, and a fluid "drip" mask transitions between sections.

<p align="center">
  <img src="public/celsius-logo.svg" alt="Celsius Energy" width="120" />
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="GSAP" src="https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock&logoColor=white" />
</p>

---

## Demo

> Add your deployment URL here once published, plus a short screen recording or GIF of the scroll experience.

```
Live: https://your-deployment-url.example
```

---

## Highlights

- **Scroll-choreographed storytelling** — each section is timed to scroll progress with GSAP `ScrollTrigger` (`scrub`, pinning, and timeline reveals).
- **Clip-path title reveals** — headlines wipe into view with animated `clip-path` polygons for a premium editorial feel.
- **Horizontal flavor slider** — product cans scroll sideways while the page scrolls vertically, with splash artwork using `mix-blend-mode`.
- **Pinned video sections** — hero and testimonial videos pin to the viewport and play/pause on interaction.
- **Drip mask transitions** — PNG `mask-image` "drip" dividers melt one section into the next.
- **Responsive by design** — `react-responsive` plus Tailwind breakpoints adapt layouts and animation timing from mobile to 2XL.
- **Cohesive design system** — a single brand palette and neutral scale exposed as Tailwind v4 `@theme` tokens, with WCAG-AA contrast on interactive elements.

---

## Tech Stack

| Layer        | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | React 19                                |
| Build tool   | Vite 6                                   |
| Styling      | Tailwind CSS 4 (`@tailwindcss/vite`)     |
| Animation    | GSAP 3 + `@gsap/react` (`useGSAP`)       |
| Scroll engine| GSAP `ScrollTrigger`, `SplitText`        |
| Responsive   | `react-responsive`                       |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# build for production into /dist
npm run build

# preview the production build locally
npm run preview
```

---

## Project Structure

```
.
├── public/
│   ├── celsius-logo.svg
│   ├── images/            # product cans, OTG packets, splash & divider art
│   └── videos/            # hero, footer, and shorts (athlete) videos
├── src/
│   ├── App.jsx            # section composition + ScrollTrigger refresh on load/HMR
│   ├── index.css          # @theme design tokens + all component styles
│   ├── constants/         # flavor list, OTG packets, testimonial cards
│   ├── components/        # NavBar, CategoryBar, sliders, titles, video pin
│   └── sections/          # Hero, Message, Flavor, Nutrition, Benefit, Testimonial, Footer
└── vite.config.js
```

### Section flow

The page is composed top-to-bottom in `src/App.jsx`:

`NavBar → Hero → Message → Flavor → CategoryBar → Nutrition → Benefit → Testimonial → Footer`

Each section owns its own GSAP timeline via the `useGSAP` hook, so animations are scoped and cleaned up automatically on unmount.

---

## Design System

The brand palette and neutral scale are centralized as Tailwind v4 tokens in `src/index.css` (`@theme`), so every color is referenced once and cascades everywhere.

| Token                       | Value     | Usage                          |
| --------------------------- | --------- | ------------------------------ |
| `--color-celsius-orange`    | `#ff9933` | Neon Carrot — primary accent   |
| `--color-celsius-red`       | `#cb3133` | Persian Red — CTAs, highlights |
| `--color-celsius-black`     | `#231f20` | Thunder — all dark surfaces    |
| `--color-celsius-white`     | `#ffffff` | Light surfaces, text on dark   |
| `--color-celsius-cloud`     | `#f4f3f2` | Subtle light surfaces          |
| `--color-celsius-line`      | `#e4e2e1` | Hairline borders               |
| `--color-celsius-muted`     | `#9a9594` | Muted text / placeholders      |

Interactive elements use darker hover variants (`--color-celsius-orange-dark`, `--color-celsius-red-dark`), and text-on-orange uses the dark brand color to stay above the WCAG-AA contrast threshold.

---

## Deployment

This is a static Vite build — `npm run build` outputs to `/dist`, deployable to Vercel, Netlify, GitHub Pages, or any static host. If hosting under a sub-path, set the `base` option in `vite.config.js` (asset paths already resolve through `import.meta.env.BASE_URL`).

---

## Disclaimer

This is an **unofficial, non-commercial fan project** created for educational and portfolio purposes. *Celsius* and all related names, logos, and product imagery are trademarks of their respective owners and are used here purely to demonstrate front-end and animation craft. Not affiliated with or endorsed by Celsius Holdings, Inc.
