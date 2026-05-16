import Link from "next/link";

import { getCurrentLocale } from "@/lib/locale";

const footer = {
  en: {
    description:
      "Refined interiors for calm, functional, and timeless residential and boutique commercial spaces.",
    studio: "Studio",
    services: "Services",
    work: "Work",
    about: "About",
    project: "Project",
    contact: "Contact",
    caseStudy: "Case Study",
    privacy: "Privacy",
    location: "Montreal / Remote",
    response:
      "Response within two business days. Residential, condo, and boutique commercial inquiries welcome.",
  },
  fr: {
    description:
      "Interieurs raffines pour espaces residentiels et commerciaux calmes, fonctionnels et intemporels.",
    studio: "Studio",
    services: "Services",
    work: "Realisations",
    about: "A propos",
    project: "Projet",
    contact: "Contact",
    caseStudy: "Etude de cas",
    privacy: "Confidentialite",
    location: "Montreal / a distance",
    response:
      "Reponse sous deux jours ouvrables. Projets residentiels, condos et espaces commerciaux bienvenus.",
  },
} as const;

export async function Footer() {
  const locale = await getCurrentLocale();
  const t = footer[locale];

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 text-sm text-muted-foreground sm:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="font-medium text-foreground">Luma Studio</p>
          <p className="mt-3 max-w-xs leading-6">
            {t.description}
          </p>
        </div>
        <div className="grid gap-2">
          <p className="font-medium text-foreground">{t.studio}</p>
          <Link href="/services">{t.services}</Link>
          <Link href="/work">{t.work}</Link>
          <Link href="/about">{t.about}</Link>
        </div>
        <div className="grid gap-2">
          <p className="font-medium text-foreground">{t.project}</p>
          <Link href="/contact">{t.contact}</Link>
          <Link href="/case-study">{t.caseStudy}</Link>
          <Link href="/privacy">{t.privacy}</Link>
        </div>
        <div>
          <p className="font-medium text-foreground">{t.location}</p>
          <p className="mt-3 leading-6">
            {t.response}
          </p>
        </div>
      </div>
    </footer>
  );
}
