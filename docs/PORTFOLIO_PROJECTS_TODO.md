# Portfolio Projects TODO

## Global objective

Build a collection of small portfolio applications and websites using kv-web-starter to demonstrate the versatility of the boilerplate across business apps, dashboards, SaaS patterns, and premium marketing websites.

## Project backlog

- [x] SupportDesk Lite - previous project
- [x] QuotePilot - previous project
- [x] Luma Studio - current project
- [ ] API Meter
- [ ] StockRoom
- [ ] HireTrack
- [ ] ClientPortal
- [ ] EventPass
- [ ] StatusBoard

## Current project: Luma Studio

### Planning

- [x] Analyze existing repo structure
- [x] Identify current routes
- [x] Identify reusable marketing components
- [x] Identify navbar/footer structure
- [x] Define visual direction
- [x] Define static content structure

### Content/data

- [x] Add services data
- [x] Add projects/work data
- [x] Add testimonials data
- [x] Add FAQ data
- [x] Add process steps data

### Public pages

- [x] Build landing page
- [x] Build services page
- [x] Build work listing page
- [x] Build work detail page
- [x] Build about page
- [x] Build contact page
- [x] Build case study page

### UI/UX

- [x] Build premium hero section
- [x] Build service cards
- [x] Build project cards
- [x] Build process section
- [x] Build testimonial section
- [x] Build FAQ section
- [x] Build CTA section
- [x] Build elegant footer

### Contact/email

- [x] Build contact form
- [x] Add validation
- [x] Add Resend integration if available
- [x] Add development fallback

### SEO/accessibility

- [x] Add metadata for each page
- [x] Add clean headings
- [x] Check contrast
- [x] Check labels and focus states
- [x] Add Open Graph metadata if simple

### Quality

- [x] Run lint
- [x] Run typecheck
- [x] Run tests if available
- [x] Run build if possible
- [x] Fix errors
- [x] Update project notes

## UI/UX audit

### First impression

The copied starter looked like a capable SaaS boilerplate, not a premium interior studio. It had a generic KV Web Starter hero, utility modules, and dashboard/API navigation. That made the brand non-memorable for a visual portfolio project.

### Problems and corrections

- Problem: Navigation exposed SaaS, booking, API, docs, and dashboard concepts.
  Impact: The site read as a tech starter instead of a client website.
  Correction: Replace with Home, Services, Work, About, Contact, and Case Study.

- Problem: Hero was explanatory and dashboard-oriented.
  Impact: It did not prove frontend/UI range.
  Correction: Use a strong editorial headline, clear CTAs, and simulated interior visuals.

- Problem: Cards and modules were repetitive and monochrome.
  Impact: The visual rhythm felt template-like.
  Correction: Use varied section structures, warm minimal colors, and project-specific content.

- Problem: Contact form was too generic.
  Impact: It did not feel like a real studio intake.
  Correction: Add project type, budget range, phone optional, and contextual guidance.

- Problem: No design documentation existed for this brand.
  Impact: Future edits could drift back toward starter defaults.
  Correction: Add docs/DESIGN.md.

## Progress log

### 2026-05-16

Completed:

- Copied kv-web-starter into a clean luma-studio project.
- Reframed project 3 as Luma Studio, not API Meter.
- Added static data, Luma marketing components, public pages, contact action, SEO metadata, TODO, and design documentation.

Remaining:

- Review visual output in browser.
- Commit, push, and deploy after approval.

Blockers:

- None. `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` pass.

Next step:

- Open the Symphonee diff viewer for review.
