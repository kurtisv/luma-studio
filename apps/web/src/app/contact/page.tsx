import type { Metadata } from "next";

import { sendContactMessage } from "@/app/actions/contact";
import { SectionHeader } from "@/components/luma/section-header";
import { MarketingPageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a residential, condo, commercial, or styling project with Luma Studio.",
};

const copy = {
  en: {
    eyebrow: "Contact",
    title: "Tell us about the space, the timeline, and the decisions that feel stuck.",
    description:
      "Luma Studio replies within two business days. Short notes are welcome; the first step is understanding whether the scope is a fit.",
    goodFit: "Good fit",
    goodFitText: "Homes, condos, boutique retail, studios, clinics, and small commercial spaces.",
    details: "Helpful details",
    detailsText:
      "Location, room count, ideal timeline, budget range, and the main decision you need help with.",
    name: "Name",
    email: "Email",
    phone: "Phone optional",
    projectType: "Project type",
    budgetRange: "Budget range",
    message: "Project note",
    placeholder:
      "Tell us what you want the space to feel like, what is not working, and any timing constraints.",
    submit: "Send inquiry",
    demoHint: "Demo mode: submit any name, email, project, and budget to send a live lead into QuotePilot.",
    projectTypes: ["Residential project", "Condo refresh", "Commercial space", "Styling consultation", "Other"],
    budgetRanges: ["Under $5k", "$5k - $10k", "$10k - $25k", "$25k+"],
  },
  fr: {
    eyebrow: "Contact",
    title: "Parlez-nous de l'espace, du calendrier et des decisions qui bloquent.",
    description:
      "Luma Studio repond sous deux jours ouvrables. Les notes courtes sont bienvenues; la premiere etape consiste a valider si le mandat est pertinent.",
    goodFit: "Bon type de projet",
    goodFitText: "Maisons, condos, boutiques, studios, cliniques et petits espaces commerciaux.",
    details: "Details utiles",
    detailsText:
      "Localisation, nombre de pieces, calendrier ideal, budget et decision principale a clarifier.",
    name: "Nom",
    email: "Courriel",
    phone: "Telephone optionnel",
    projectType: "Type de projet",
    budgetRange: "Budget",
    message: "Note de projet",
    placeholder:
      "Dites-nous ce que vous voulez ressentir dans l'espace, ce qui ne fonctionne pas et les contraintes de temps.",
    submit: "Envoyer la demande",
    demoHint: "Mode demo: entrez n'importe quel nom, courriel, projet et budget pour envoyer un vrai lead vers QuotePilot.",
    projectTypes: ["Projet residentiel", "Rafraichissement condo", "Espace commercial", "Consultation styling", "Autre"],
    budgetRanges: ["Moins de 5k", "5k - 10k", "10k - 25k", "25k+"],
  },
} as const;

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ sent?: string; flowId?: string }>;
}) {
  const locale = await getCurrentLocale();
  const query = (await searchParams) ?? {};
  const t = copy[locale];

  return (
    <MarketingPageShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
            />
            <div className="mt-10 grid gap-4 text-sm text-muted-foreground">
              <div className="border-t pt-4">
                <p className="font-medium text-foreground">KV Portfolio Demo Mode</p>
                <p className="mt-1">{t.demoHint}</p>
              </div>
              <div className="border-t pt-4">
                <p className="font-medium text-foreground">{t.goodFit}</p>
                <p className="mt-1">{t.goodFitText}</p>
              </div>
              <div className="border-t pt-4">
                <p className="font-medium text-foreground">{t.details}</p>
                <p className="mt-1">{t.detailsText}</p>
              </div>
            </div>
          </div>

          <Form action={sendContactMessage} className="grid gap-5 border bg-card p-6 shadow-sm">
            {query.sent === "quotepilot" ? (
              <div className="rounded-md border border-accent/40 bg-accent/10 p-4">
                <p className="text-sm font-semibold">
                  Votre demande a ete envoyee vers QuotePilot.
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Vous pouvez maintenant suivre sa transformation en client et soumission.
                  {query.flowId ? <span className="mt-2 block font-mono text-xs">flowId: {query.flowId}</span> : null}
                </p>
              </div>
            ) : null}
            <FormField>
              <Label htmlFor="name">{t.name}</Label>
              <Input id="name" name="name" required autoComplete="name" placeholder={locale === "fr" ? "Votre nom" : "Your name"} />
            </FormField>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField>
                <Label htmlFor="email">{t.email}</Label>
                <Input id="email" name="email" required type="email" autoComplete="email" placeholder={locale === "fr" ? "votre@email.com" : "you@example.com"} />
              </FormField>
              <FormField>
                <Label htmlFor="phone">{t.phone}</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="514-555-0485" />
              </FormField>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField>
                <Label htmlFor="projectType">{t.projectType}</Label>
                <select id="projectType" name="projectType" required defaultValue="" className="h-11 rounded-[2px] border border-border bg-card px-3 text-sm outline-none focus:border-accent">
                  <option value="" disabled>{t.projectType}</option>
                  {t.projectTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </FormField>
              <FormField>
                <Label htmlFor="budgetRange">{t.budgetRange}</Label>
                <select id="budgetRange" name="budgetRange" required defaultValue="" className="h-11 rounded-[2px] border border-border bg-card px-3 text-sm outline-none focus:border-accent">
                  <option value="" disabled>{t.budgetRange}</option>
                  {t.budgetRanges.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </FormField>
            </div>
            <FormField>
              <Label htmlFor="message">{t.message}</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={7}
                placeholder={t.placeholder}
              />
            </FormField>
            <Button type="submit" className="w-full sm:w-fit">{t.submit}</Button>
          </Form>
        </section>
      </main>
    </MarketingPageShell>
  );
}
