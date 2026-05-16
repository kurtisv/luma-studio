import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CTASection } from "@/components/luma/cta-section";
import { ProjectImage } from "@/components/luma/project-image";
import { SectionHeader } from "@/components/luma/section-header";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/luma";
import { getCurrentLocale } from "@/lib/locale";

type Params = { slug: string };

const labels = {
  en: {
    back: "Back to work",
    fact: "Fact",
    challenge: "Challenge",
    solution: "Solution",
    materials: "Material palette",
    materialsTitle: "A controlled palette with enough texture to feel lived in.",
    discuss: "Discuss a similar project",
  },
  fr: {
    back: "Retour aux realisations",
    fact: "Fait",
    challenge: "Defi",
    solution: "Solution",
    materials: "Palette materiaux",
    materialsTitle: "Une palette controlee avec assez de texture pour etre vivante.",
    discuss: "Discuter d'un projet similaire",
  },
} as const;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const locale = await getCurrentLocale();
  const t = labels[locale];

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const gallery = [
    project,
    projects[(index + 1) % projects.length],
    projects[(index + 2) % projects.length],
  ];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto max-w-6xl px-6 py-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="size-4" />
            {t.back}
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {project.type} / {project.location} / {project.year}
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.description}</p>
            </div>
            <ProjectImage image={project.image} priority className="min-h-[32rem]" />
          </div>
        </section>

        <section className="border-y bg-card">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-3">
            {project.facts.map((fact) => (
              <div key={fact}>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{t.fact}</p>
                <p className="mt-2 font-medium">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
          <article>
            <h2 className="text-2xl font-semibold">{t.challenge}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{project.challenge}</p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold">{t.solution}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{project.solution}</p>
          </article>
        </section>

        <section className="border-y bg-secondary/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader eyebrow={t.materials} title={t.materialsTitle} />
            <div className="grid gap-4 sm:grid-cols-2">
              {project.materials.map((material) => (
                <div key={material} className="border bg-card p-5">
                  <span className="block h-16 bg-accent-soft" />
                  <p className="mt-4 font-medium">{material}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <ProjectImage key={item.slug} image={item.image} className="min-h-64" />
            ))}
          </div>
          <blockquote className="mt-12 max-w-3xl border-l-2 border-accent pl-6 text-2xl leading-10">
            &quot;{project.quote}&quot;
          </blockquote>
          <div className="mt-10">
            <Button asChild>
              <Link href="/contact">
                {t.discuss} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>

        <CTASection />
      </main>
    </MarketingPageShell>
  );
}
