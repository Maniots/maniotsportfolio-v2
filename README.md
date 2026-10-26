
# Manuel Rizzo — Portfolio

A bilingual portfolio built with Vue 3, TypeScript and Vite. It presents selected game, desktop and web projects through a data-driven editorial interface.

## Local development

Requirements: Node.js 20.19+ or 22.12+ and npm.

```powershell
npm ci
npm run dev
```

The development URL includes the GitHub Pages base path: `http://localhost:5173/maniotsportfolio-v2/`.

### Quality commands

```powershell
npm run lint
npm run typecheck
npm run test -- --run
npm run build
npx playwright install chromium  # first E2E run only
npm run test:e2e
```

## Edit portfolio content

You do not need to edit Vue components for normal content updates.

### Profile and contact details

Edit `src/data/profile.ts` to change:

- Name, alias and email
- GitHub and LinkedIn URLs
- Availability message
- Capability groups and technologies

Every bilingual value has an `en` and `it` entry.

### Projects

All case studies live in `src/data/projects.ts`. Each project needs:

- A unique URL-safe `slug`
- English and Italian narrative fields
- Year, status, role and technologies
- A cover filename from `public/projects/`
- Only links that genuinely exist

To reorder projects, move the complete object in the array. The projects page and home selection update automatically. Set `featured: false` to keep a project out of the home-page selection.

After editing project data, run:

```powershell
npm run test -- --run src/data/projects.spec.ts
npm run typecheck
```

### Interface translations

Edit `src/locales/en.ts` and `src/locales/it.ts`. Both dictionaries must keep the same keys; TypeScript reports a missing Italian translation during `npm run typecheck`.

### Images

Put project media in `public/projects/` and reference only the filename through the `asset(...)` helper in `src/data/projects.ts`.

- Prefer optimized PNG, WebP or SVG assets.
- Use a descriptive `coverAlt` in both languages.
- Keep source images close to a 16:10 ratio to reduce cropping.
- Do not commit private screenshots or credentials.

## Routing and GitHub Pages

Vue Router uses clean browser-history URLs beneath `/maniotsportfolio-v2/`. GitHub Pages serves `public/404.html` for a direct deep link; that file stores the requested path, returns to the application root, and `src/router/pagesFallback.ts` restores the route before Vue mounts.

Test the production shape locally with:

```powershell
npm run build
npm run preview
```

Refreshing `/maniotsportfolio-v2/projects/everysync` must continue to render the EverySync case study.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`. The workflow installs the locked dependencies, checks lint/types/tests, builds the site and publishes `dist` through GitHub Pages. Repository Pages settings must use **GitHub Actions** as the source.

## Structure

```text
src/
  components/   reusable interface pieces
  composables/   locale, clipboard and metadata behavior
  data/          manually maintained portfolio content
  locales/       interface translations
  router/        routes and Pages fallback restoration
  styles/        tokens, layout, components, motion and responsive rules
  views/         route-level composition
tests/           Playwright user journeys
```
