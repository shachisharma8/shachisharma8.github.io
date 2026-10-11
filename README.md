# Shachi Sharma — Personal Website

A personal website built as two connected worlds:

- **The Person** — travel, a cozy home library, cooking, and everyday life.
- **The Profession** — backend software engineering for payments at scale, performance work, and practical AI workflows.

> _“There is a person behind the code, and there is a story behind the person.”_

Warm, editorial art direction in **pastel blue + warm brown**, built with React, TypeScript, Vite, and Tailwind.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

Sample photos are already downloaded into `public/images/`. To re-fetch them (or after deleting some):

```bash
npm run fetch:images # downloads ~33 sample stock photos (Unsplash) into public/images/
```

Other commands:

```bash
npm run build        # typecheck (tsc) + production build to dist/
npm run preview      # serve the production build locally
npm test             # run the Vitest suite once
npm run test:watch   # watch mode
```

Requires Node 18+ (developed on Node 24).

---

## What’s built in this pass

This was scoped as **core first, then iterate**. Fully built and working:

| Area | Route | Status |
| --- | --- | --- |
| Home | `/` | ✅ Hero, two worlds, previews, selected work, “Now” |
| Person landing | `/person` | ✅ Editorial overview (Library, Cooking, Everyday) |
| **The Library** | `/person/library` | ✅ Illustrated bookshelf, search, status/shelf filters, title/author sort, shelf⇄list toggle |
| Book detail | `/person/library/:bookId` | ✅ Cover + **empty editable fields**, related books |
| Profession overview | `/profession` | ✅ Hero, stats, featured projects, skills, AI workflow, career, contact |
| Projects | `/profession/projects` | ✅ Filterable case-study grid |
| Project detail | `/profession/projects/:projectId` | ✅ Problem / contribution / approach / metrics |
| Experience | `/profession/experience` | ✅ Career timeline + education |
| 404 | any unknown route | ✅ Custom page |

**Slated for the next pass** (currently honest “in progress” placeholder pages, so routes and refresh still work):

- Cooking journal `/person/cooking`.
- Everyday life `/person/everyday` with the memory shuffle.

---

## Project structure

```
src/
  components/      # Navbar, Footer, PlaceholderImage, Section, ScrollToTop
  layouts/         # RootLayout (nav + page transition + footer)
  pages/           # One file per route (+ co-located tests)
  features/
    library/       # BookSpine (the shelf)
    projects/      # ProjectCard, AIWorkflow diagram
  data/            # ⭐ All content lives here — edit these, not the components
    profile.ts     # Name, role, city, favourites, philosophy, "Now", contact links
    navigation.ts  # Nav structure
    books.ts       # The Library catalogue (25 seed titles)
    projects.ts    # Project case studies
    skills.ts      # Grouped technical skills
    career.ts      # Career timeline + education
    destinations.ts# Travel destinations
  hooks/           # useDocumentMeta, useShelfColumns
  utils/           # seed.ts (deterministic PRNG for placeholder art)
  styles/          # index.css (Tailwind + design tokens)
public/
  images/          # Drop real photos here (folders per section)
  resume/          # Drop your résumé PDF here
  favicon.svg, og-image.svg
```

---

## How to make it yours

Everything editable lives in **`src/data/`**. No need to touch components.

### Profile, links & “Now” — `src/data/profile.ts`
- Name, role, city, tagline, intro.
- `favorites`, `philosophy`, and the `now[]` snapshot are **clearly-marked sample placeholders** — edit the text and set `sample: false` once it’s really yours.
- **GitHub** is a placeholder: set `contact.github` to your real URL and `contact.githubPlaceholder: false`.
- Email and LinkedIn are already wired from your résumé.

### Résumé — `public/resume/`
Drop `Shachi_Sharma_2026.pdf` into `public/resume/`, then set `contact.resumeAvailable: true` in `profile.ts`. The **Download résumé** button activates automatically. (See `public/resume/README.md`.)

### The Library — `src/data/books.ts`
25 seed titles, each starting as **“To read”** with empty notes/rating/review.
To record a real status, edit a book’s `status`, `rating`, `notes`, `review`, `favoritePassage`, or `readingDates`. (`The Housekeeper` author is intentionally left blank to configure.)

### Projects, skills, career — `src/data/{projects,skills,career}.ts`
Metrics shown are drawn from your résumé. Conceptual/agentic items are tagged `kind: 'concept'` and labelled as exploratory — change wording there as needed.

### Images
The site ships with **real sample stock photos** (Unsplash, free licence) downloaded locally into `public/images/` — nothing is hotlinked. Each is tagged “Sample” in the UI and mapped in `src/data/assets.ts` with alt text. If a file is ever missing, the `SampleImage` component falls back automatically to generated SVG art so the layout never breaks.

To use **your own** photos: replace the file at the same path under `public/images/` (keep the name), or edit the `src`/`alt` in `src/data/assets.ts`. The downloader manifest lives in `scripts/fetch-images.mjs`.

---

## Design system

- **Palette (2026 pastel blue–brown):** pastel blue (`#AEC6D8`), powder (`#DCE7EF`), sky (`#EAF1F6`), deep blue (`#3F6076`), walnut/mocha (`#7C5A46`), caramel (`#B08968`), mocha-light (`#C8B2A0`), cream (`#F5F0E7`), paper (`#FCFAF6`), sage (`#A7B5A0`). Defined as Tailwind tokens in `tailwind.config.js`.
- **Reference motifs** (adapted, not copied, from mijobello.com): a top status/clock strip, a large name wordmark, numbered sections (01–04), a “selected works” carousel with ←/→ arrows, and an “elsewhere” footer.
- **Type:** Cormorant Garamond / DM Serif Display (headings), DM Sans (UI/body), Caveat (handwritten accents). Loaded from Google Fonts in `index.html`.
- **Details:** subtle paper grain, film-frame image borders, editorial eyebrows, restrained Framer Motion transitions.

## Accessibility & performance

- Semantic HTML, skip-to-content link, visible focus rings, keyboard-navigable controls.
- `prefers-reduced-motion` fully respected (animations collapse to instant).
- Descriptive alt text; placeholder art is announced as “sample illustration”.
- Lazy font loading, no horizontal overflow on mobile, OG tags + favicon + custom 404.

## Content & privacy notes

- Sample photos and sample entries are **illustrative placeholders**, never presented as the owner’s real photos or memories.
- Book titles/authors are **catalogue seeds only** — no reading history, opinions, ratings, or progress are imported or implied; everything defaults to “To read” with empty fields.
- Professional claims and metrics come from the attached résumé; nothing is invented. Agentic-workflow items are marked conceptual.

---

## Deployment

Static SPA — build and serve `dist/`. Client-side routing fallbacks are included for **Netlify** (`public/_redirects`) and **Vercel** (`vercel.json`). For other hosts, route all paths to `index.html`.

```bash
npm run build && npm run preview
```

## What was tested

- `npm run build` — TypeScript typecheck + production build: **passing**.
- `npm test` — **15 tests passing** across 3 files:
  - Library privacy defaults (all books “To read”, empty fields, `The Housekeeper` author blank, unique ids).
  - Library UI (search filtering, list-view toggle, empty state, counts).
  - Smoke render of every page (Home, Person, Projects, Experience, Project detail, Book detail, 404).
- Dev server boots clean; `/` and `/person/library` return HTTP 200.

Not yet done (next pass): the travel/cooking/everyday sub-pages and their gallery lightbox; cross-browser and Lighthouse audits.
