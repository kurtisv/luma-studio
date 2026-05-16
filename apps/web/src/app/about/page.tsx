import type { Metadata } from "next";

import { CTASection } from "@/components/luma/cta-section";
import { SectionHeader } from "@/components/luma/section-header";
import { VisualBlock } from "@/components/luma/visual-block";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "About the studio",
    title: "Interiors shaped around light, material, and daily routines.",
    description:
      "Luma Studio is a fictional interior architecture practice built to feel like a credible local studio: calm in process, precise in decisions, and warm in execution.",
    values: [
      ["Warm minimalism", "Minimal does not mean empty. The studio uses texture, proportion, and light to create restraint with feeling."],
      ["Useful beauty", "Every visual decision should make the space easier to live with, operate, or understand."],
      ["Calm delivery", "The process is designed to reduce decision fatigue and keep clients confident."],
    ],
    founderEyebrow: "Founder",
    founderTitle: "Mira Laurent, fictional founder and design lead.",
    founderDesc:
      "Mira is written as a composite of local studio founders: practical, material-aware, and comfortable translating taste into decisions clients can execute.",
    skills: ["Material direction", "Residential planning", "Boutique retail", "Small-space strategy"],
  },
  fr: {
    eyebrow: "A propos du studio",
    title: "Des interieurs faconnes par la lumiere, les materiaux et les routines quotidiennes.",
    description:
      "Luma Studio est une pratique fictive d'architecture interieure concue pour ressembler a un vrai studio local: calme dans le processus, precise dans les decisions et chaleureuse dans l'execution.",
    values: [
      ["Minimalisme chaleureux", "Minimal ne veut pas dire vide. Le studio utilise texture, proportion et lumiere pour creer une retenue sensible."],
      ["Beaute utile", "Chaque decision visuelle doit rendre l'espace plus facile a vivre, exploiter ou comprendre."],
      ["Livraison calme", "Le processus reduit la fatigue decisionnelle et garde les clients confiants."],
    ],
    founderEyebrow: "Fondatrice",
    founderTitle: "Mira Laurent, fondatrice fictive et directrice design.",
    founderDesc:
      "Mira est ecrite comme un composite de fondatrices de studios locaux: pratique, attentive aux materiaux et capable de traduire le gout en decisions executables.",
    skills: ["Direction materiaux", "Planification residentielle", "Boutique retail", "Strategie petits espaces"],
  },
} as const;

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Luma Studio, a fictional interior architecture studio focused on calm, functional, and timeless spaces.",
};

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{t.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t.description}
            </p>
          </div>
          <VisualBlock title="Studio philosophy" index={2} className="min-h-[30rem]" />
        </section>

        <section className="border-y bg-card">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
            {t.values.map(([title, description]) => (
              <article key={title}>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow={t.founderEyebrow}
            title={t.founderTitle}
            description={t.founderDesc}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {t.skills.map((item) => (
              <div key={item} className="border bg-card p-5 text-sm font-medium">{item}</div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
    </MarketingPageShell>
  );
}
