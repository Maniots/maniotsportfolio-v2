# Implementation Plan: Vue Portfolio Redesign

## Overview

Replace the current React/Vite portfolio with a Vue 3 and TypeScript application that implements the approved tech-editorial design, five-project content model, bilingual experience, and GitHub Pages-compatible routing. Work proceeds in independently testable phases, with test-first changes, phase-level commits, and rendered verification before delivery.

## Source specification

- `docs/specs/2026-10-26-vue-portfolio-redesign-design.md`

## Requirements

- Present Manuel Rizzo as a hybrid game and software developer.
- Use Vue 3, TypeScript, Vite, Vue Router, and purpose-built CSS.
- Provide Home, Projects, Project Detail, About, Contact, and Not Found views.
- Feature Runalys, Ticketing Mobile App, SkylineProjects, TaxiXpress, and EverySync.
- Keep project, profile, and locale content outside Vue components.
- Support Italian and English with persistence and route-preserving switching.
- Use clean URLs and make direct route visits work on GitHub Pages.
- Provide direct email, copy-email, GitHub, and LinkedIn contact actions.
- Meet the responsive, keyboard, contrast, reduced-motion, and focus requirements in the specification.
- Document manual content maintenance.

## Architecture changes

- `package.json`: replace the React toolchain and UI dependencies with the Vue toolchain and test dependencies.
- `vite.config.ts`: use the Vue plugin, retain the repository base path, and configure test aliases/environment.
- `tsconfig.app.json`: switch JSX-oriented settings to Vue-compatible application settings.
- `index.html`: remove injected legacy scripts and establish accurate portfolio metadata.
- `src/main.ts`: replace the React entry point with the Vue bootstrap.
- `src/App.vue`: own the persistent shell and route transition outlet.
- `src/router/index.ts`: declare routes, focus restoration, metadata, and title updates.
- `src/data/projects.ts`: become the typed source of truth for the five approved projects.
- `src/data/profile.ts`: become the typed source of truth for profile, capabilities, email, and social links.
- `src/locales/it.ts`, `src/locales/en.ts`, `src/composables/useLocale.ts`: own translation data and locale behavior.
- `src/components/`: contain reusable shell, navigation, editorial, project, and contact components.
- `src/views/`: contain route-level composition only.
- `src/styles/`: contain tokens, reset, global layout, utilities, motion, and responsive rules.
- `public/projects/`: contain stable local project assets.
- `public/404.html`: redirect GitHub Pages deep links back into the SPA.
- `.github/workflows/deploy.yml`: build and deploy the tested Vue application.
- `README.md`: document setup, content editing, media, testing, and deployment.

## Implementation steps

### Phase 1: Vue foundation — minimum viable

1. **Create an isolated feature worktree** (File: `.git/worktrees/vue-portfolio-redesign`)
   - Action: Create branch `feat/vue-portfolio-redesign` in a sibling worktree, verify a clean baseline, install locked dependencies, and record the existing build result.
   - Why: Keep the main checkout clean while the framework migration spans many files.
   - Dependencies: None.
   - Risk: Low.
   - Change size target: no source changes.

2. **Define the new package scripts and runtime dependencies** (File: `package.json`)
   - Action: Replace React and shadcn-era dependencies with Vue 3, Vue Router, the Vue Vite plugin, Vitest, Vue Test Utils, jsdom, ESLint Vue support, and Playwright; add `typecheck`, `test`, and `test:e2e` scripts.
   - Why: Establish one minimal, supportable Vue toolchain.
   - Dependencies: Step 1.
   - Risk: Medium.
   - Change size target: at most 50 changed lines.

3. **Regenerate the dependency lock** (File: `package-lock.json`)
   - Action: Run `npm install` after the manifest change and inspect the resulting dependency tree for React remnants and install errors.
   - Why: Make clean installs deterministic.
   - Dependencies: Step 2.
   - Risk: Medium.
   - Change size target: generated file only.

4. **Configure Vue and test resolution** (File: `vite.config.ts`)
   - Action: Replace the React plugin with the Vue plugin, keep `/maniotsportfolio-v2/` as the production base, preserve the `@` alias, and add jsdom/test setup configuration.
   - Why: Make Vue SFCs, aliases, tests, and Pages assets resolve consistently.
   - Dependencies: Step 3.
   - Risk: Medium.
   - Change size target: at most 40 changed lines.

5. **Align TypeScript with Vue** (File: `tsconfig.app.json`)
   - Action: Remove React JSX settings, include `.vue` source files, and retain strict checking.
   - Why: Prevent stale React compiler assumptions.
   - Dependencies: Step 4.
   - Risk: Low.
   - Change size target: at most 20 changed lines.

6. **Add Vue module typing** (File: `src/env.d.ts`)
   - Action: Declare Vite client types and Vue single-file modules if the selected tooling still requires an explicit declaration.
   - Why: Keep editor and build type resolution correct.
   - Dependencies: Step 5.
   - Risk: Low.
   - Change size target: at most 15 lines.

7. **Write the router smoke test first** (File: `src/router/router.spec.ts`)
   - Action: Add failing assertions for the six route families, the project-detail parameter, and the catch-all route.
   - Why: Prove that the migration preserves intentional navigation rather than only rendering a home screen.
   - Dependencies: Step 6.
   - Risk: Low.
   - Change size target: at most 45 lines.

8. **Implement route definitions** (File: `src/router/index.ts`)
   - Action: Add lazy route records for Home, Projects, Project Detail, About, Contact, and Not Found with typed metadata.
   - Why: Make the router test pass and establish route-level code splitting.
   - Dependencies: Step 7.
   - Risk: Medium.
   - Change size target: at most 50 lines.

9. **Create placeholder route views** (Files: `src/views/HomeView.vue`, `src/views/ProjectsView.vue`, `src/views/ProjectDetailView.vue`, `src/views/AboutView.vue`, `src/views/ContactView.vue`, `src/views/NotFoundView.vue`)
   - Action: Add one semantic heading and route-identifying content to each view, keeping every file below 20 lines.
   - Why: Provide a runnable, navigable Vue slice before visual implementation.
   - Dependencies: Step 8.
   - Risk: Low.
   - Change size target: at most 20 lines per file.

10. **Bootstrap Vue** (File: `src/main.ts`)
    - Action: Create the Vue application, install the router, import global styles, and mount to `#app`.
    - Why: Replace the React runtime entry point.
    - Dependencies: Steps 8–9.
    - Risk: Low.
    - Change size target: at most 15 lines.

11. **Create the application shell** (File: `src/App.vue`)
    - Action: Add skip navigation, a temporary semantic header, router outlet, and route transition wrapper.
    - Why: Establish accessible persistent structure without coupling it to final visuals.
    - Dependencies: Step 10.
    - Risk: Low.
    - Change size target: at most 45 lines.

12. **Replace the HTML host document** (File: `index.html`)
    - Action: Change the root element to `#app`, point to `src/main.ts`, add accurate baseline metadata, and remove the obsolete injected script.
    - Why: Complete the Vue bootstrap and remove third-party legacy behavior.
    - Dependencies: Step 10.
    - Risk: Low.
    - Change size target: at most 35 changed lines.

13. **Add foundation styles** (Files: `src/styles/tokens.css`, `src/styles/reset.css`, `src/styles/global.css`)
    - Action: Define graphite, warm-white, amethyst, typography, spacing, focus, container, and reset primitives in three changes of at most 50 lines each.
    - Why: Make the minimum Vue slice readable and establish the design contract.
    - Dependencies: Steps 10–12.
    - Risk: Medium.
    - Change size target: at most 50 lines per file/change.

14. **Remove the obsolete React source tree** (Files: `src/**/*.tsx`, `src/App.css`, `src/index.css`, `src/vite-env.d.ts`)
    - Action: Delete React-only pages, components, hooks, context, and shadcn UI files after the Vue shell builds.
    - Why: Avoid duplicate owners and eliminate unused vulnerable dependencies.
    - Dependencies: Steps 2–13 and a passing Vue build.
    - Risk: High.
    - Change size target: deletion-only operation.

15. **Verify and commit the Vue foundation** (Files: all Phase 1 files)
    - Action: Run install verification, lint, typecheck, router test, and production build; commit the independently runnable Vue shell.
    - Why: Produce a rollback-safe minimum viable migration.
    - Dependencies: Steps 1–14.
    - Risk: Low.
    - Change size target: no source changes beyond fixes isolated to failing checks.

### Phase 2: Content model and core experience

16. **Define shared content types** (File: `src/types/content.ts`)
    - Action: Add localized-text, project, project-link, capability, and profile interfaces.
    - Why: Make manual content mistakes visible during type checking.
    - Dependencies: Phase 1.
    - Risk: Low.
    - Change size target: at most 50 lines.

17. **Write project-data integrity tests first** (File: `src/data/projects.spec.ts`)
    - Action: Add failing tests for exactly five unique slugs, required bilingual fields, valid URLs, EverySync repository mapping, and featured ordering.
    - Why: Protect the central maintainable content source.
    - Dependencies: Step 16.
    - Risk: Low.
    - Change size target: at most 50 lines.

18. **Add the first project records** (File: `src/data/projects.ts`)
    - Action: Add typed records for Runalys and Ticketing Mobile App with only verified links and available media.
    - Why: Keep each content change reviewable and under the plan size limit.
    - Dependencies: Step 17.
    - Risk: Medium.
    - Change size target: at most 50 lines.

19. **Complete the project records** (File: `src/data/projects.ts`)
    - Action: Add SkylineProjects, TaxiXpress, and EverySync in separate sub-50-line edits, linking EverySync to `Maniots/OneDriveSync` and its public product site/download where appropriate.
    - Why: Complete the approved portfolio set without invented claims.
    - Dependencies: Step 18.
    - Risk: Medium.
    - Change size target: at most 50 lines per edit.

20. **Add maintainable profile data** (File: `src/data/profile.ts`)
    - Action: Define email, social links, bilingual biography, positioning, availability, and grouped capabilities.
    - Why: Remove identity and contact details from presentation components.
    - Dependencies: Step 16.
    - Risk: Low.
    - Change size target: at most 50 lines per edit.

21. **Write locale behavior tests first** (File: `src/composables/useLocale.spec.ts`)
    - Action: Add failing tests for default locale, stored locale, switching, persistence, document language, and fallback behavior.
    - Why: Verify bilingual behavior independently from individual views.
    - Dependencies: Phase 1.
    - Risk: Low.
    - Change size target: at most 50 lines.

22. **Add interface locale dictionaries** (Files: `src/locales/en.ts`, `src/locales/it.ts`)
    - Action: Add matching typed navigation, action, status, metadata, and error strings in sub-50-line groups.
    - Why: Keep interface translation complete and manually editable.
    - Dependencies: Step 21.
    - Risk: Medium.
    - Change size target: at most 50 lines per file/change.

23. **Implement locale state** (File: `src/composables/useLocale.ts`)
    - Action: Expose reactive locale state, typed translation lookup, switching, localStorage persistence, and `<html lang>` synchronization.
    - Why: Make the locale tests pass through one shared owner.
    - Dependencies: Steps 21–22.
    - Risk: Medium.
    - Change size target: at most 50 lines.

24. **Build the site header** (File: `src/components/SiteHeader.vue`)
    - Action: Compose brand link, desktop navigation, active-route state, locale control, and mobile-menu trigger using semantic controls.
    - Why: Provide consistent, route-aware navigation.
    - Dependencies: Steps 20, 22–23.
    - Risk: Medium.
    - Change size target: split template, logic, and scoped styling into sub-50-line edits.

25. **Build the mobile navigation dialog** (File: `src/components/MobileNavigation.vue`)
    - Action: Implement open/close state, focus return, Escape handling, route-close behavior, and translated links.
    - Why: Make navigation usable and recoverable on small screens and keyboards.
    - Dependencies: Step 24.
    - Risk: Medium.
    - Change size target: split behavior, template, and styling into sub-50-line edits.

26. **Build the footer** (File: `src/components/SiteFooter.vue`)
    - Action: Render maintainable email/social data, current year, and a concise bilingual closing line.
    - Why: Provide consistent contact and identity closure.
    - Dependencies: Steps 20, 22–23.
    - Risk: Low.
    - Change size target: at most 50 lines per edit.

27. **Integrate the persistent shell** (File: `src/App.vue`)
    - Action: Replace temporary shell elements with `SiteHeader`, main route outlet, route announcement target, and `SiteFooter`.
    - Why: Connect the reusable navigation and footer to every route.
    - Dependencies: Steps 24–26.
    - Risk: Low.
    - Change size target: at most 35 changed lines.

28. **Build the editorial hero** (File: `src/components/HeroSection.vue`)
    - Action: Render bilingual positioning, restrained kinetic label treatment, primary Work CTA, and secondary Contact CTA from data.
    - Why: Communicate the hybrid positioning in the first screen.
    - Dependencies: Steps 20, 22–23.
    - Risk: Medium.
    - Change size target: split content, template, and styling into sub-50-line edits.

29. **Build the project card** (File: `src/components/ProjectCard.vue`)
    - Action: Render cover, sequence, type, localized summary, stack, status, and accessible internal detail link.
    - Why: Provide one reusable, content-driven project presentation.
    - Dependencies: Steps 16–19, 22–23.
    - Risk: Medium.
    - Change size target: split logic, template, and styling into sub-50-line edits.

30. **Build the featured-work section** (File: `src/components/FeaturedProjects.vue`)
    - Action: Select featured projects from data and compose the asymmetric card layout with an all-projects CTA.
    - Why: Avoid duplicated project content on the home page.
    - Dependencies: Step 29.
    - Risk: Low.
    - Change size target: at most 50 lines per edit.

31. **Build the capability strip** (File: `src/components/CapabilityGrid.vue`)
    - Action: Render grouped capabilities from profile data without percentage ratings.
    - Why: Show credible breadth without subjective progress bars.
    - Dependencies: Step 20.
    - Risk: Low.
    - Change size target: at most 50 lines per edit.

32. **Compose the Home view** (File: `src/views/HomeView.vue`)
    - Action: Compose hero, featured work, capability preview, About teaser, and contact CTA with numbered sections.
    - Why: Complete the core recruiter journey.
    - Dependencies: Steps 28–31.
    - Risk: Medium.
    - Change size target: split composition and view styling into sub-50-line edits.

33. **Compose the Projects view** (File: `src/views/ProjectsView.vue`)
    - Action: Render the five project records with an editorial heading and no unnecessary filter controls.
    - Why: Present the curated portfolio without adding YAGNI interaction.
    - Dependencies: Step 29.
    - Risk: Low.
    - Change size target: at most 50 lines per edit.

34. **Test project-detail resolution first** (File: `src/views/ProjectDetailView.spec.ts`)
    - Action: Add failing tests for a valid slug, localized fields, external links, and an unknown slug resolving to Not Found.
    - Why: Protect the most important dynamic route behavior.
    - Dependencies: Steps 17–19, 23.
    - Risk: Low.
    - Change size target: at most 50 lines.

35. **Implement the Project Detail view** (File: `src/views/ProjectDetailView.vue`)
    - Action: Resolve the slug from project data and render overview, challenge, solution, contribution, outcome, stack, media, and verified links.
    - Why: Turn portfolio cards into substantive case studies.
    - Dependencies: Step 34.
    - Risk: High.
    - Change size target: split resolution, sections, and styling into sub-50-line edits.

36. **Compose the About view** (File: `src/views/AboutView.vue`)
    - Action: Render bilingual biography, working approach, goals, and full capability groups from profile data.
    - Why: Consolidate identity and skills without a fragmented Skills route.
    - Dependencies: Steps 20, 23, 31.
    - Risk: Low.
    - Change size target: split sections and styling into sub-50-line edits.

37. **Verify and commit the core experience** (Files: all Phase 2 files)
    - Action: Run unit tests, lint, typecheck, production build, and manual navigation smoke checks; commit the complete happy path.
    - Why: Produce an independently reviewable, content-complete milestone.
    - Dependencies: Steps 16–36.
    - Risk: Low.
    - Change size target: no source changes beyond isolated test-driven fixes.

### Phase 3: Contact, states, accessibility, and visual finish

38. **Write clipboard behavior tests first** (File: `src/composables/useClipboard.spec.ts`)
    - Action: Add failing tests for clipboard success, unavailable API, rejected writes, status reset, and repeated use.
    - Why: Make the recommended contact action reliable and recoverable.
    - Dependencies: Phase 2.
    - Risk: Low.
    - Change size target: at most 50 lines.

39. **Implement clipboard state** (File: `src/composables/useClipboard.ts`)
    - Action: Expose copy action and idle/success/error state with a bounded reset timer and no false success.
    - Why: Make clipboard tests pass behind one reusable boundary.
    - Dependencies: Step 38.
    - Risk: Medium.
    - Change size target: at most 45 lines.

40. **Build the contact panel** (File: `src/components/ContactPanel.vue`)
    - Action: Render mailto, copy-email, GitHub, and LinkedIn actions with an accessible live status message.
    - Why: Deliver contact without a backend or misleading form behavior.
    - Dependencies: Steps 20, 23, 39.
    - Risk: Medium.
    - Change size target: split logic, template, and styling into sub-50-line edits.

41. **Compose the Contact view** (File: `src/views/ContactView.vue`)
    - Action: Combine availability message, response expectations without invented promises, and `ContactPanel`.
    - Why: Complete the final primary user task.
    - Dependencies: Step 40.
    - Risk: Low.
    - Change size target: at most 50 lines per edit.

42. **Build the Not Found view** (File: `src/views/NotFoundView.vue`)
    - Action: Add a branded error code, concise explanation, and localized return-home action.
    - Why: Provide recovery from invalid routes and project slugs.
    - Dependencies: Step 23.
    - Risk: Low.
    - Change size target: at most 50 lines per edit.

43. **Add route metadata and focus behavior tests first** (File: `src/router/navigation.spec.ts`)
    - Action: Add failing tests for localized document titles, descriptions, scroll reset, and focus movement to the page heading.
    - Why: Verify route changes are understandable to keyboard and assistive-technology users.
    - Dependencies: Phase 2.
    - Risk: Medium.
    - Change size target: at most 50 lines per edit.

44. **Implement navigation side effects** (Files: `src/router/index.ts`, `src/composables/usePageMeta.ts`)
    - Action: Update title/description after navigation, reset scroll, and focus the route heading after render.
    - Why: Make navigation tests pass and improve SPA accessibility/SEO.
    - Dependencies: Step 43.
    - Risk: Medium.
    - Change size target: at most 50 lines per file/change.

45. **Add reveal behavior** (File: `src/composables/useReveal.ts`)
    - Action: Wrap IntersectionObserver with immediate visibility fallback and reduced-motion bypass.
    - Why: Support dynamic presentation without hiding content when APIs are unavailable.
    - Dependencies: Phase 2.
    - Risk: Medium.
    - Change size target: at most 50 lines.

46. **Add editorial layout utilities** (File: `src/styles/layout.css`)
    - Action: Define section grid, asymmetric columns, dividers, project rhythm, and responsive container behavior.
    - Why: Apply one coherent composition system across views.
    - Dependencies: Phase 2.
    - Risk: Medium.
    - Change size target: multiple sub-50-line edits grouped by concern.

47. **Add interaction and motion rules** (File: `src/styles/motion.css`)
    - Action: Define route, reveal, menu, link, card, and feedback transitions plus a complete reduced-motion override.
    - Why: Deliver approved dynamism while respecting user preferences.
    - Dependencies: Steps 24–45.
    - Risk: Medium.
    - Change size target: multiple sub-50-line edits grouped by interaction.

48. **Add responsive rules** (File: `src/styles/responsive.css`)
    - Action: Cover 320px phones, larger phones, tablets, and desktop composition changes without horizontal overflow.
    - Why: Fulfill the mobile-first acceptance criteria.
    - Dependencies: Steps 24–47.
    - Risk: Medium.
    - Change size target: multiple sub-50-line edits grouped by breakpoint.

49. **Add stable project media** (Files: `public/projects/runalys.webp`, `public/projects/ticketing.webp`, `public/projects/skyline.webp`, `public/projects/taxixpress.webp`, `public/projects/everysync.webp`)
    - Action: Reuse repository-owned assets where available, download only authorized existing project images, optimize dimensions, and update project records to local paths.
    - Why: Avoid fragile third-party image hosts and layout shifts.
    - Dependencies: Steps 18–19.
    - Risk: Medium.
    - Change size target: binary assets plus at most 10 data-line changes.

50. **Add component interaction tests** (Files: `src/components/SiteHeader.spec.ts`, `src/components/ContactPanel.spec.ts`)
    - Action: Test mobile-menu keyboard behavior, active navigation, locale switching, mail link, clipboard feedback, and error recovery.
    - Why: Cover the user-visible interactive states most likely to regress.
    - Dependencies: Steps 24–25, 39–40.
    - Risk: Medium.
    - Change size target: at most 50 lines per file/change.

51. **Verify and commit the finished interface** (Files: all Phase 3 files)
    - Action: Run unit tests, lint, typecheck, build, keyboard smoke checks, reduced-motion checks, and rendered desktop/mobile review; commit the finished user experience.
    - Why: Produce a polished, accessible milestone before deployment work.
    - Dependencies: Steps 38–50.
    - Risk: Low.
    - Change size target: no source changes beyond isolated evidence-driven fixes.

### Phase 4: GitHub Pages, documentation, and release verification

52. **Write deep-link redirect tests first** (File: `tests/pages-routing.spec.ts`)
    - Action: Add Playwright tests for direct and refreshed visits to Home, Projects, a valid project, About, Contact, and Not Found under the repository base path.
    - Why: Prove routing works in the hosting shape, not only in the dev server.
    - Dependencies: Phase 3.
    - Risk: Medium.
    - Change size target: at most 50 lines per edit.

53. **Implement the GitHub Pages fallback** (Files: `public/404.html`, `src/main.ts`)
    - Action: Add a minimal redirect payload that preserves the requested path and restore it before mounting the router.
    - Why: Make browser-history routes survive direct visits and refreshes on static hosting.
    - Dependencies: Step 52.
    - Risk: High.
    - Change size target: at most 45 lines per file/change.

54. **Configure browser verification** (File: `playwright.config.ts`)
    - Action: Serve the production build at the repository base path and define desktop Chromium plus representative mobile viewport projects.
    - Why: Make rendered route and responsive checks reproducible.
    - Dependencies: Step 52.
    - Risk: Medium.
    - Change size target: at most 50 lines.

55. **Add critical journey tests** (File: `tests/portfolio.spec.ts`)
    - Action: Test navigation, project-detail opening, locale persistence, copy-email feedback, mobile menu, and visible focus across desktop and mobile projects.
    - Why: Verify the complete user journey across component boundaries.
    - Dependencies: Steps 50, 54.
    - Risk: Medium.
    - Change size target: multiple sub-50-line edits grouped by journey.

56. **Modernize deployment** (File: `.github/workflows/deploy.yml`)
    - Action: use supported checkout/setup actions, run clean install, lint, typecheck, unit tests, and build before publishing `dist` to Pages.
    - Why: Prevent broken builds from replacing the live portfolio.
    - Dependencies: Steps 52–55.
    - Risk: Medium.
    - Change size target: at most 50 changed lines.

57. **Document local development** (File: `README.md`)
    - Action: Add prerequisites, install, dev, lint, typecheck, unit, E2E, build, and preview commands.
    - Why: Make repository setup self-service.
    - Dependencies: Steps 2–4, 54.
    - Risk: Low.
    - Change size target: at most 50 lines.

58. **Document content maintenance** (File: `README.md`)
    - Action: Add exact instructions for editing profile data, adding/reordering a project, updating both locales, replacing images, and validating links.
    - Why: Satisfy the user's manual-maintenance requirement.
    - Dependencies: Steps 16–23, 49.
    - Risk: Low.
    - Change size target: multiple sub-50-line edits grouped by task.

59. **Document Pages deployment and routing** (File: `README.md`)
    - Action: Explain the base path, workflow trigger, SPA fallback, and how to test a deep link locally.
    - Why: Make hosting behavior understandable and repairable.
    - Dependencies: Steps 53, 56.
    - Risk: Low.
    - Change size target: at most 40 lines.

60. **Run full static verification** (Files: repository-wide)
    - Action: From a clean install run lint, typecheck, all unit tests, production build, dependency audit review, and `git diff --check`.
    - Why: Validate source quality and reproducibility at the final revision.
    - Dependencies: Steps 1–59.
    - Risk: Low.
    - Change size target: no source changes unless a failing check identifies a scoped defect.

61. **Run rendered verification** (Files: `tests/pages-routing.spec.ts`, `tests/portfolio.spec.ts`)
    - Action: Run Playwright on desktop and mobile, inspect final screenshots manually, verify keyboard paths, 320px overflow, locale persistence, reduced motion, direct URLs, and project media.
    - Why: A build alone cannot establish visual or interaction readiness.
    - Dependencies: Step 60.
    - Risk: Medium.
    - Change size target: no source changes unless an observed defect is reproduced and fixed.

62. **Perform final review and remove task artifacts** (Files: repository-wide)
    - Action: Review the complete diff for scope, accessibility, broken links, stale React files, secrets, logs, screenshots, and debug output; remove only task-generated transient artifacts.
    - Why: Ensure the branch contains only intentional maintainable work.
    - Dependencies: Steps 60–61.
    - Risk: Low.
    - Change size target: deletion-only cleanup or isolated review fixes.

63. **Commit and push the release-ready branch** (Files: all Phase 4 files)
    - Action: Commit the verified documentation/deployment slice and push `feat/vue-portfolio-redesign`; report verification evidence and the integration state.
    - Why: Preserve a reviewable remote branch in accordance with repository workflow.
    - Dependencies: Steps 52–62.
    - Risk: Low.
    - Change size target: no source changes.

## Testing strategy

### Phase 1

- Unit: route table and catch-all behavior.
- Integration: Vue bootstrap renders each placeholder route through a memory history.
- E2E: not yet required; production preview smoke check only.

### Phase 2

- Unit: project-data integrity, locale state, persistence, dictionary fallback, and project lookup.
- Integration: header navigation, locale switching, project card to detail route, unknown project recovery.
- E2E: manual happy-path navigation in the production preview.

### Phase 3

- Unit: clipboard success/error/reset, reveal fallback, route metadata helpers.
- Integration: mobile dialog keyboard behavior, active navigation, localized contact feedback, route focus movement.
- E2E: desktop and mobile rendered review for Home, Projects, Project Detail, About, Contact, and Not Found.

### Phase 4

- Unit: full Vitest suite.
- Integration: production build served beneath `/maniotsportfolio-v2/`, including the 404 redirect restoration path.
- E2E: direct/deep-link navigation, refresh, language persistence, copy email, mobile navigation, keyboard focus, reduced motion, and responsive overflow checks.

## Verification commands

The exact commands may be refined only if package-script names change during implementation:

```powershell
npm ci
npm run lint
npm run typecheck
npm run test -- --run
npm run build
npm run test:e2e
git diff --check
```

## Success criteria

- [ ] React runtime, React source files, shadcn components, and obsolete injected scripts are removed.
- [ ] Vue application builds and all declared routes render.
- [ ] Direct and refreshed clean URLs work beneath the GitHub Pages repository path.
- [ ] The five approved projects come from one typed source and EverySync points to `Maniots/OneDriveSync`.
- [ ] Italian and English work on every route and persist across reloads.
- [ ] Direct email, copy email, GitHub, and LinkedIn actions expose real destinations and recover from clipboard failure.
- [ ] Keyboard navigation, visible focus, document language, route focus, contrast, 320px layout, and reduced motion meet the approved acceptance criteria.
- [ ] Lint, strict typecheck, unit tests, production build, and Playwright journeys pass at the final revision.
- [ ] Final desktop and mobile renders are manually inspected and have no known blocking visual defects.
- [ ] README instructions allow profile, project, translation, and media updates without editing Vue components.
- [ ] Each implementation phase is committed and pushed with no task-generated logs or debug artifacts.

## Risks and mitigations

- **GitHub Pages history routing (High):** test the actual repository base path and the 404 redirect round trip against the production build.
- **Unverified legacy project content (Medium):** preserve only known claims and links; omit unsupported details rather than inventing them.
- **Remote image fragility (Medium):** move authorized existing media to `public/projects/` and give every image stable dimensions.
- **Framework migration breadth (High):** establish a passing Vue shell before deleting React and commit each phase independently.
- **Animation accessibility (Medium):** centralize motion tokens and verify the global reduced-motion override in rendered tests.
- **Clipboard availability (Medium):** provide a visible error state while keeping the mailto link as the always-available contact path.

