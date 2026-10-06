# Portfolio

Personal portfolio of Suphanat Saradee, built with Angular 22 (standalone components, signals, built-in control flow).

## Run locally

```bash
npm install
npm start          # http://localhost:4200
```

## Adding work images

1. Put two copies of the image in `public/work/<category>/`: `name.jpg` (about 1600 px on the long edge) for the lightbox and `name-sm.jpg` (about 720 px) for the grid.
2. Add an entry to `src/app/data/gallery.ts` with the file name, category, title, caption and the full-size width and height.

Categories: `product`, `field`, `talks`, `schematic`. Tabs only appear for categories that have images.

## Structure

- `src/app/data/profile.ts` holds the profile content (experience, projects, skills).
- `src/app/data/gallery.ts` lists the Work gallery images and their captions.
- `src/app/app.*` is the page layout, top bar, hero and the light/dark theme toggle.
- `src/app/projects/` is the project grid with tag filtering (`signal` + `computed`).
- `src/app/gallery/` is the Work gallery: category tabs, masonry grid and lightbox (`<dialog>`, arrow keys).
- `src/app/radar/` is the animated Remote ID radar in the Now section (canvas, simulated contacts).
- `src/app/reveal.ts` is a directive that fades sections in on scroll.
- `src/styles.css` defines the color tokens for both themes.

## Deploy

**Vercel:** import the repository; it detects Angular. Output directory: `dist/portfolio/browser`.

**GitHub Pages** (repository named `portfolio`):

```bash
npm run build:gh-pages
```

Then publish `dist/portfolio/browser` to the `gh-pages` branch.
