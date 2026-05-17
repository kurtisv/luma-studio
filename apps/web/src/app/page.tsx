import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/luma/cta-section";
import { FAQSection } from "@/components/luma/faq-section";
import { ProjectCard } from "@/components/luma/project-card";
import { SectionHeader } from "@/components/luma/section-header";
import { ServiceCard } from "@/components/luma/service-card";
import { VisualBlock } from "@/components/luma/visual-block";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { ecosystemHandoffs, processSteps, projects, services, stats, testimonials } from "@/data/luma";
import { getCurrentLocale } from "@/lib/locale";

const homeCopy = {
  en: {
    eyebrow: "Interior architecture studio",
    title: "Calm, functional and timeless spaces.",
    subtitle:
      "Luma Studio creates refined residential and boutique commercial interiors with a focus on natural light, durable materials, and everyday comfort.",
    viewWork: "View selected work",
    start: "Start a project",
    selectedFor: "Selected for",
    selectedForText: "Homes, condos, boutiques, and compact commercial spaces.",
    trust: ["Warm minimalism", "Material direction", "Responsive planning", "Quiet visual hierarchy"],
    workEyebrow: "Selected interiors",
    workTitle: "Rooms with restraint, warmth, and a clear reason for every detail.",
    workDesc:
      "The portfolio uses simulated visuals so the site stays lightweight while still communicating a premium interior direction.",
    servicesEyebrow: "Services",
    servicesTitle: "Design support shaped around the decisions clients actually need to make.",
    servicesDesc:
      "From full room transformations to a focused material consultation, each service is intentionally scoped.",
    processEyebrow: "Process",
    processTitle: "A calm process for spaces with many small decisions.",
    processDesc:
      "The work is structured to reduce noise: fewer vague options, clearer tradeoffs, and documentation that can be acted on.",
    clientsEyebrow: "Client notes",
    clientsTitle: "Designed to feel personal, not over-produced.",
    faqEyebrow: "FAQ",
    faqTitle: "Practical answers before the first conversation.",
    handoffEyebrow: "Ecosystem handoff",
    handoffTitle: "Every public inquiry is shown as the first step of a connected business flow.",
    handoffDesc:
      "The same clients continue through QuotePilot, ReserveFlow, ClientHub, CommerceKit, EventPass, SupportDesk Lite, and API Meter.",
    handoffFrom: "Request",
    handoffNext: "Next module",
    processSteps,
    stats,
    testimonials,
  },
  fr: {
    eyebrow: "Studio d'architecture interieure",
    title: "Des espaces calmes, fonctionnels et intemporels.",
    subtitle:
      "Luma Studio cree des interieurs residentiels et commerciaux raffines, centres sur la lumiere naturelle, les materiaux durables et le confort quotidien.",
    viewWork: "Voir les realisations",
    start: "Demarrer un projet",
    selectedFor: "Pense pour",
    selectedForText: "Maisons, condos, boutiques et petits espaces commerciaux.",
    trust: ["Minimalisme chaleureux", "Direction materiaux", "Planification responsive", "Hierarchie visuelle calme"],
    workEyebrow: "Interieurs selectionnes",
    workTitle: "Des pieces sobres, chaleureuses, ou chaque detail a une raison.",
    workDesc:
      "Le portfolio utilise des visuels simules pour rester leger tout en communiquant une direction interieure premium.",
    servicesEyebrow: "Services",
    servicesTitle: "Un accompagnement design centre sur les decisions que les clients doivent vraiment prendre.",
    servicesDesc:
      "De la transformation complete a la consultation materiaux, chaque service est volontairement bien cadre.",
    processEyebrow: "Processus",
    processTitle: "Un processus calme pour des espaces remplis de petites decisions.",
    processDesc:
      "Le travail reduit le bruit: moins d'options vagues, des compromis plus clairs et une documentation actionnable.",
    clientsEyebrow: "Notes clients",
    clientsTitle: "Concu pour etre personnel, pas surproduit.",
    faqEyebrow: "FAQ",
    faqTitle: "Des reponses pratiques avant la premiere conversation.",
    handoffEyebrow: "Relais ecosysteme",
    handoffTitle: "Chaque demande publique devient la premiere etape d'un flux d'entreprise connecte.",
    handoffDesc:
      "Les memes clients continuent ensuite dans QuotePilot, ReserveFlow, ClientHub, CommerceKit, EventPass, SupportDesk Lite et API Meter.",
    handoffFrom: "Demande",
    handoffNext: "Module suivant",
    processSteps: [
      {
        title: "Ecouter",
        description: "Nous cartographions les routines, contraintes et decisions importantes avant de dessiner.",
      },
      {
        title: "Structurer",
        description: "Plans, materiaux et eclairage sont raffines en une direction claire avec moins de zones floues.",
      },
      {
        title: "Specifier",
        description: "Vous recevez des selections pratiques, des notes fournisseurs et un dossier pret a executer.",
      },
      {
        title: "Soutenir",
        description: "Nous restons assez proches pour proteger le concept sans alourdir le processus.",
      },
    ],
    stats: [
      { value: "28", label: "pieces planifiees" },
      { value: "6", label: "espaces boutique concus" },
      { value: "94%", label: "clients approuvant la premiere direction" },
    ],
    testimonials: [
      {
        name: "Mara Chen",
        project: "The Mile End Loft",
        location: "Montreal",
        quote:
          "Luma a donne a notre loft chaleur, rangement et rythme clair. Il nous ressemble toujours, mais en beaucoup plus abouti.",
      },
      {
        name: "Elliot Moore",
        project: "Atelier Boutique",
        location: "Quebec",
        quote:
          "Le studio a traduit notre marque en espace physique sans que le resultat semble scene ou trop dessine.",
      },
      {
        name: "Nadia Fortin",
        project: "Riverside Condo",
        location: "Laval",
        quote:
          "Chaque recommandation etait utile. Nous avons arrete d'hesiter sur les finis et commence a profiter du processus.",
      },
    ],
  },
} as const;

export default async function Home() {
  const locale = await getCurrentLocale();
  const t = homeCopy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="border-b">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {t.eyebrow}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {t.subtitle}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/work">
                    {t.viewWork} <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">{t.start}</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-end">
              <VisualBlock title="Light study" index={0} className="min-h-80 sm:min-h-[30rem]" />
              <div className="grid gap-4">
                <VisualBlock title="Material palette" index={1} className="min-h-56" />
                <div className="border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{t.selectedFor}</p>
                  <p className="mt-3 text-2xl font-semibold">{t.selectedForText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b bg-card">
          <div className="mx-auto grid max-w-6xl gap-4 px-6 py-7 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-4">
            {t.trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="border-b bg-secondary/45">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeader
              eyebrow={t.handoffEyebrow}
              title={t.handoffTitle}
              description={t.handoffDesc}
            />
            <div className="grid gap-3">
              {ecosystemHandoffs.map((item, index) => (
                <article key={item.company} className="grid gap-4 border bg-card p-5 sm:grid-cols-[3rem_1fr]">
                  <p className="font-mono text-sm text-accent">0{index + 1}</p>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h2 className="text-lg font-semibold">{item.client}</h2>
                      <span className="border bg-background px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                        {item.company}
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {t.handoffFrom}
                        </p>
                        <p className="mt-1 leading-6">{item.request}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {t.handoffNext}
                        </p>
                        <p className="mt-1 leading-6">{item.next}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow={t.workEyebrow}
              title={t.workTitle}
              description={t.workDesc}
            />
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y bg-secondary/60">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionHeader
              eyebrow={t.servicesEyebrow}
              title={t.servicesTitle}
              description={t.servicesDesc}
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} locale={locale} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow={t.processEyebrow}
              title={t.processTitle}
              description={t.processDesc}
            />
            <div className="grid gap-4">
              {t.processSteps.map((step, index) => (
                <article key={step.title} className="grid gap-4 border-t py-5 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y bg-dark text-dark-foreground">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-semibold">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-dark-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow={t.clientsEyebrow}
              title={t.clientsTitle}
            />
            <div className="grid gap-5">
              {t.testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="border bg-card p-6">
                  <p className="text-lg leading-8">&quot;{testimonial.quote}&quot;</p>
                  <footer className="mt-5 text-sm text-muted-foreground">
                    {testimonial.name}, {testimonial.project}, {testimonial.location}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-card">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow={t.faqEyebrow}
              title={t.faqTitle}
            />
            <FAQSection />
          </div>
        </section>

        <CTASection />
      </main>
    </MarketingPageShell>
  );
}
