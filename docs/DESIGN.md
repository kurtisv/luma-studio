# Luma Studio Design System

## Brand direction

Luma Studio is premium, calm, architectural, and warm. The site should feel like a credible interior architecture studio for residential, condo, and boutique commercial spaces.

## Visual principles

- Clear hierarchy
- Warm minimalism
- Editorial spacing
- Intentional contrast
- Calm interactions
- No generic AI gradients

## Colors

- Background: `#F7F2EA` for warm editorial pages.
- Foreground: `#1F2933` for readable primary text.
- Muted text: `#676F78` for secondary copy with enough contrast.
- Surface: `#FFFDF9` for cards and form surfaces.
- Border: `#E5DED2` for quiet separation.
- Accent: `#A47148` for CTAs, markers, and brand details.
- Dark section: `#171717` for high-contrast breaks and final CTAs.

## Typography

- H1: large, confident, short, and editorial. Use tight tracking and balanced lines.
- H2: section-level narrative headings, usually 3xl to 4xl.
- H3: card and subsection titles, medium weight.
- Body: 16px to 18px with generous line height.
- Muted text: use only for supporting copy, not core actions.
- Labels: small, clear, and high contrast.
- Buttons: concise action text, sentence case.

## Spacing

- Section padding mobile: 64px vertical when possible.
- Section padding desktop: 64px to 96px vertical depending on hierarchy.
- Card padding: 20px to 24px.
- Grid gaps: 20px to 40px.
- Max width: `max-w-6xl` for full pages, `max-w-4xl` for editorial case study text.

## Components

- Navbar: sticky, light, simple, with the Luma Studio mark and client-site navigation only.
- Hero: editorial headline, practical subtitle, strong primary CTA, subtle secondary CTA, and a visual block composition.
- ServiceCard: includes duration, description, price, benefit, and deliverables.
- ProjectCard: visual-first card with type, year, title, description, and hover movement.
- TestimonialCard: quiet blockquote without decorative excess.
- FAQ: native details/summary for accessible progressive disclosure.
- ContactForm: concise intake form with project type and budget range.
- Footer: brand reinforcement, not just a utility link dump.
- CTASection: dark contrast band with one clear action.

## Responsive rules

- Mobile-first layouts.
- Use one-column reading flow on mobile.
- Move to two-column editorial layouts on desktop only when content benefits from contrast.
- Project grids use one column on mobile and two columns on tablet/desktop.
- Avoid tiny cards and cramped controls on mobile.

## Accessibility rules

- Maintain readable contrast for all body and muted text.
- Use visible focus states on buttons, links, inputs, and selects.
- Keep one H1 per page.
- Preserve semantic sections and heading order.
- Label all form controls.
- Use native details/summary for FAQ keyboard support.

## Anti-patterns to avoid

- Purple AI gradients
- Nested cards
- Low contrast gray text
- Too many badges
- Generic template sections
- Excessive shadows
- Decorative UI without purpose
- Dashboard or SaaS aesthetics on public marketing pages

## UX decisions

- Simulated CSS visual blocks replace external imagery to keep the project lightweight and deployment-safe.
- The site hides dashboard/API/booking concepts from primary navigation so the client-site story stays focused.
- Contact uses a simple server action and Zod validation, with Resend integration preserved through the starter email helper.
