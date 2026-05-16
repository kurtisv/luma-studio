import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getCurrentLocale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "Start a project",
    title: "Tell us about the space you want to make calmer.",
    cta: "Start a project",
  },
  fr: {
    eyebrow: "Demarrer un projet",
    title: "Parlez-nous de l'espace que vous voulez rendre plus calme.",
    cta: "Demarrer un projet",
  },
} as const;

export async function CTASection() {
  const locale = await getCurrentLocale();
  const t = copy[locale];

  return (
    <section className="bg-dark text-dark-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            {t.title}
          </h2>
        </div>
        <Button asChild className="border-accent bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">
            {t.cta} <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
