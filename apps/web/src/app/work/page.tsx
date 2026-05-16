import type { Metadata } from "next";

import { CTASection } from "@/components/luma/cta-section";
import { ProjectCard } from "@/components/luma/project-card";
import { SectionHeader } from "@/components/luma/section-header";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { projects } from "@/data/luma";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "Selected work",
    title: "A visual portfolio built around warmth, proportion, and useful restraint.",
    description:
      "Each project is fictional but structured like a real client case, with context, materials, and design decisions.",
  },
  fr: {
    eyebrow: "Realisations",
    title: "Un portfolio visuel construit autour de la chaleur, des proportions et de la retenue utile.",
    description:
      "Chaque projet est fictif, mais structure comme un vrai cas client avec contexte, materiaux et decisions design.",
  },
} as const;

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected interior design projects for homes, condos, retail spaces, kitchens, and quiet rooms.",
};

export default async function WorkPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeader
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} locale={locale} />
            ))}
          </div>
        </section>

        <CTASection />
      </main>
    </MarketingPageShell>
  );
}
