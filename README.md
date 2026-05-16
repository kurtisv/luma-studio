# Luma Studio

Premium marketing website for a fictional interior architecture studio.

Luma Studio is the third portfolio project built from `kv-web-starter`. Unlike SupportDesk Lite and QuotePilot, this project intentionally avoids a dashboard-first experience and focuses on visual direction, responsive marketing pages, SEO structure, accessibility, static content modeling, and a polished contact flow.

## Stack

- Next.js App Router
- React
- TypeScript strict
- Tailwind CSS v4
- Local shadcn-style UI primitives
- Zod validated server action for contact
- Resend-ready email helper from the starter
- Vitest and CI foundation inherited from the starter

## Routes

- `/` - landing page
- `/services` - service overview
- `/work` - portfolio listing
- `/work/[slug]` - project detail
- `/about` - studio story
- `/contact` - project inquiry form
- `/case-study` - developer portfolio case study

## Local setup

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm dev
```

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Portfolio context

This project demonstrates that the same starter can support a premium client-facing website, not only business tools and dashboards.
