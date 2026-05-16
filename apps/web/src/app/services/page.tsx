import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/luma/cta-section";
import { SectionHeader } from "@/components/luma/section-header";
import { ServiceCard } from "@/components/luma/service-card";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { services } from "@/data/luma";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "Services",
    title: "Interior design services that make the next decision clearer.",
    description:
      "From full concepts to focused consultations, Luma Studio keeps the engagement simple, visual, and actionable.",
    receiveEyebrow: "What clients receive",
    receiveTitle: "Documentation that respects the reality of implementation.",
    items: [
      "A clear scope and design direction before production begins.",
      "Material and furniture recommendations with practical tradeoffs.",
      "Layouts that account for circulation, storage, and daily use.",
      "A calm review process with fewer vague choices.",
    ],
    cta: "Tell us about your space",
  },
  fr: {
    eyebrow: "Services",
    title: "Des services de design interieur qui clarifient la prochaine decision.",
    description:
      "Du concept complet a la consultation ciblee, Luma Studio garde le mandat simple, visuel et actionnable.",
    receiveEyebrow: "Ce que les clients recoivent",
    receiveTitle: "Une documentation qui respecte la realite de l'execution.",
    items: [
      "Un mandat clair et une direction design avant la production.",
      "Des recommandations materiaux et mobilier avec des compromis pratiques.",
      "Des plans qui tiennent compte de la circulation, du rangement et de l'usage quotidien.",
      "Un processus de revue calme avec moins de choix vagues.",
    ],
    cta: "Parlez-nous de votre espace",
  },
} as const;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design services for residential spaces, condo refreshes, boutique commercial interiors, and material consultations.",
};

export default async function ServicesPage() {
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

        <section className="border-y bg-secondary/60">
          <div className="mx-auto grid max-w-6xl gap-5 px-6 py-16 md:grid-cols-2">
            {services.map((service) => (
                <ServiceCard key={service.slug} service={service} locale={locale} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow={t.receiveEyebrow}
              title={t.receiveTitle}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {t.items.map((item) => (
                <div key={item} className="border bg-card p-5 text-sm leading-6 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Button asChild className="mt-10">
            <Link href="/contact">
              {t.cta} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </section>

        <CTASection />
      </main>
    </MarketingPageShell>
  );
}
