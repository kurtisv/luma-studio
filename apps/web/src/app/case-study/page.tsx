import type { Metadata } from "next";

import { SectionHeader } from "@/components/luma/section-header";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Developer Case Study",
  description:
    "A portfolio case study explaining how Luma Studio demonstrates premium marketing site design with kv-web-starter.",
};

const sections = [
  {
    title: "Project overview",
    body: "Luma Studio is a fictional premium interior architecture website built from kv-web-starter to demonstrate that the boilerplate can produce polished marketing sites, not only dashboards.",
  },
  {
    title: "Why this project exists",
    body: "SupportDesk Lite and QuotePilot prove business application patterns. Luma Studio adds visual direction, editorial spacing, SEO structure, responsive marketing pages, and conversion-focused UX.",
  },
  {
    title: "Design goals",
    body: "The visual system favors warm minimalism, strong typography, restrained color, simulated project imagery, and a calm navigation model that feels appropriate for a real local studio.",
  },
  {
    title: "Technical stack",
    body: "Next.js App Router, TypeScript strict, Tailwind CSS v4, local UI primitives, server actions, Zod validation, and static content files.",
  },
  {
    title: "Pages built",
    body: "Landing page, services, work listing, project detail pages, about, contact, and a developer-facing case study page.",
  },
  {
    title: "UX decisions",
    body: "The site avoids dashboard density and generic SaaS patterns. Each page has a focused purpose, clear CTA hierarchy, readable sections, and mobile-first layouts.",
  },
  {
    title: "SEO and accessibility",
    body: "Pages include metadata, semantic headings, labelled form fields, accessible links, visible focus states, and high-contrast typography.",
  },
  {
    title: "Recruiter value",
    body: "The project demonstrates frontend range: static data modeling, reusable components, responsive UI, brand direction, marketing copy, and form handling.",
  },
];

const frSections = [
  {
    title: "Vue d'ensemble",
    body: "Luma Studio est une vitrine premium fictive creee a partir de kv-web-starter pour demontrer que le boilerplate peut produire des sites marketing soignes, pas seulement des dashboards.",
  },
  {
    title: "Pourquoi ce projet existe",
    body: "SupportDesk Lite et QuotePilot prouvent les patterns d'applications metier. Luma Studio ajoute direction visuelle, spacing editorial, SEO, pages marketing responsive et UX de conversion.",
  },
  {
    title: "Objectifs design",
    body: "Le systeme visuel privilegie le minimalisme chaleureux, la typographie forte, la couleur retenue, les visuels simules et une navigation calme.",
  },
  {
    title: "Stack technique",
    body: "Next.js App Router, TypeScript strict, Tailwind CSS v4, composants UI locaux, server actions, validation Zod et fichiers de contenu statique.",
  },
  {
    title: "Pages construites",
    body: "Landing page, services, liste de realisations, fiches projet, a propos, contact et etude de cas developpeur.",
  },
  {
    title: "Decisions UX",
    body: "Le site evite la densite dashboard et les patterns SaaS generiques. Chaque page a un objectif clair, une hierarchie CTA lisible et des layouts mobile-first.",
  },
  {
    title: "SEO et accessibilite",
    body: "Les pages incluent metadata, headings semantiques, champs labels, liens accessibles, focus visibles et typographie contrastee.",
  },
  {
    title: "Valeur recruteur",
    body: "Le projet demontre la polyvalence frontend: donnees statiques, composants reutilisables, responsive UI, direction de marque, copywriting marketing et formulaire.",
  },
];

const pageCopy = {
  en: {
    eyebrow: "Developer case study",
    title: "How Luma Studio shows the visual range of kv-web-starter.",
    description:
      "This page explains the portfolio rationale behind the project and the frontend skills it is meant to demonstrate.",
  },
  fr: {
    eyebrow: "Etude de cas developpeur",
    title: "Comment Luma Studio montre la polyvalence visuelle de kv-web-starter.",
    description:
      "Cette page explique la logique portfolio du projet et les competences frontend qu'il doit demontrer.",
  },
} as const;

export default async function CaseStudyPage() {
  const locale = await getCurrentLocale();
  const t = pageCopy[locale];
  const items = locale === "fr" ? frSections : sections;

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </section>
        <section className="border-y bg-card">
          <div className="mx-auto grid max-w-4xl gap-5 px-6 py-14">
            {items.map((section) => (
              <article key={section.title} className="border-t pt-5 first:border-t-0 first:pt-0">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </MarketingPageShell>
  );
}
