# Vue Portfolio Redesign — Design Specification

Date: 2026-10-26
Status: Approved

## Objective

Rebuild the existing React portfolio as a modern Vue 3 portfolio that presents Manuel Rizzo as a hybrid developer: a creative game developer with credible, practical software engineering experience. The result must feel dynamic, work reliably on GitHub Pages, and remain easy for Manuel to update without assistance.

## Audience and primary tasks

The primary audience is recruiters, potential collaborators, and clients. They must be able to:

1. Understand Manuel's positioning and strengths within the first screen.
2. Review a curated selection of substantial projects.
3. Open a project detail page to understand the problem, contribution, stack, and outcome.
4. Reach Manuel through a reliable contact action.
5. Switch between Italian and English without losing their current page.

## Information architecture

The application will provide these routes:

- `/`: editorial landing page with positioning, selected work, core capabilities, and contact call to action.
- `/projects`: overview of the five curated projects.
- `/projects/:slug`: data-driven project detail page.
- `/about`: background, goals, working approach, and skills.
- `/contact`: direct email, copy-email action, GitHub, and LinkedIn.
- Catch-all route: branded not-found page with a route back home.

The standalone Skills route will be retired. Skills will appear where they have useful context: a concise capabilities section on the home page and a fuller, maintainable section on the About page.

## Curated projects

The portfolio will feature:

1. Runalys
2. Ticketing Mobile App
3. SkylineProjects
4. TaxiXpress
5. EverySync

EverySync is the public product name; its source repository is `https://github.com/Maniots/OneDriveSync`. Its public description and technical claims will be derived from the repository's maintained documentation.

Each project record will support:

- Stable slug
- Localized title, summary, challenge, solution, contribution, and outcome
- Project type, status, year, role, and technology list
- Cover image and optional gallery
- Repository, live demo, product site, and download links when genuinely available
- Featured ordering and optional display metadata

Missing links or media will be omitted rather than replaced with fake destinations or placeholders presented as real work.

## Visual direction

The visual language is “tech editorial”:

- Near-black graphite background and warm off-white text.
- Amethyst purple as the primary accent, using restrained tonal variations.
- Large editorial headings paired with highly readable body text and a monospace face for technical metadata.
- Deliberate grid lines, section numbering, and restrained software-interface references.
- Wide, asymmetric project compositions with visible hierarchy for role, status, and stack.
- Minimal reliance on decorative gradients; character comes from typography, spacing, composition, and interaction.
- Mobile layouts are designed intentionally rather than produced by compressing desktop layouts.

The established identity is evolved rather than discarded: the existing purple direction remains recognizable, while generic component-library styling is removed.

## Interaction and motion

The experience will include:

- Lightweight route transitions.
- Restrained kinetic treatment in the hero.
- Staggered content reveals when they improve hierarchy.
- Project cards with coordinated hover and keyboard-focus feedback.
- An animated mobile navigation panel and clear active-route state.
- Immediate success or recovery feedback for the copy-email action.
- Persistent language selection.

Motion must not block input, cause layout shift, or run continuously without purpose. All non-essential motion will respect `prefers-reduced-motion`.

## Contact behavior

The site will not depend on a backend or third-party form provider. The contact page will expose:

- A direct email link to `manuelrizzo2006@gmail.com`.
- A copy-email button with accessible success and failure feedback.
- GitHub and LinkedIn links.

This replaces the current form that pretends to submit before opening a local email client.

## Technical architecture

- Vue 3 with the Composition API and TypeScript.
- Vite for development and production builds.
- Vue Router for all navigation.
- Clean browser-history URLs with a GitHub Pages SPA fallback so direct visits and refreshes resolve correctly beneath `/maniotsportfolio-v2/`.
- Purpose-built CSS with design tokens; no general-purpose UI component library.
- Minimal dependencies, added only when they provide clear value.
- Semantic HTML and native browser behavior before custom JavaScript.

The deployment workflow will continue to publish the production build to GitHub Pages and will be updated to current compatible actions where appropriate.

## Maintainability

Content will be separated from presentation:

- `src/data/projects.ts` owns project records.
- `src/data/profile.ts` owns biography, capabilities, contact data, and social links.
- `src/locales/it.ts` and `src/locales/en.ts` own interface and narrative translations.
- `public/projects/` owns project media.

Views and components consume these sources rather than duplicating content. Runtime validation or strong TypeScript types will make incomplete project entries obvious during development.

The README will contain concise, task-oriented instructions for:

- Adding, reordering, or removing a project.
- Editing profile and contact details.
- Updating translations.
- Replacing project media.
- Running, testing, building, and deploying the site.

## Responsive and inclusive behavior

- Keyboard navigation must cover the header, mobile menu, project cards, language switcher, copy-email action, and all links.
- Focus indicators must remain clearly visible.
- Normal text targets WCAG 2.2 AA contrast (4.5:1); large text targets 3:1.
- The document language changes with the selected locale.
- Content remains usable at 320 CSS pixels without horizontal scrolling.
- Tap targets are sized for touch input.
- Images have meaningful alternative text or are explicitly decorative.
- Route changes move focus to the new page heading and update the document title.

## SEO and metadata

The obsolete injected script in the existing HTML will be removed. The rebuilt site will provide accurate default metadata and route-aware titles/descriptions for the home page, project listing, project details, About, Contact, and Not Found views. Social preview metadata will use real portfolio assets when available.

## Verification and acceptance criteria

The implementation is accepted when:

1. The application is Vue-based and contains no remaining React runtime or obsolete React-only UI library.
2. All declared routes render correctly through in-app navigation, direct navigation, and refresh on GitHub Pages-compatible output.
3. Italian and English switching works on every route and persists across reloads.
4. The five approved projects render from one typed data source, including EverySync linked to `Maniots/OneDriveSync`.
5. Contact actions expose the real email and social destinations; copy-email reports success or a recoverable failure.
6. Responsive checks cover phone, tablet, and desktop widths without overflow or inaccessible navigation.
7. Reduced-motion mode removes non-essential transitions and animations.
8. Automated tests cover routing, locale persistence, project-data integrity, and copy-email behavior.
9. Lint, type checking, tests, and production build pass from a clean install.
10. A rendered review confirms visual hierarchy, focus behavior, legibility, interaction states, and the absence of obvious layout defects on representative mobile and desktop viewports.
11. The README lets a maintainer complete common content updates without editing Vue components.

## Out of scope

- A CMS or admin dashboard.
- A contact backend or third-party submission service.
- Authentication, analytics, comments, or a blog.
- Heavy 3D, particle systems, custom cursors, or continuous decorative animation.
- Invented project metrics, testimonials, screenshots, or links.

