import { services } from "@/data/luma";
import type { Locale } from "@/i18n/config";

type Service = (typeof services)[number];

const frServices: Record<string, Partial<Service>> = {
  "residential-interior-design": {
    title: "Design interieur residentiel",
    description:
      "Concepts complets pour des maisons qui ont besoin d'un plan plus calme, de meilleurs choix materiaux et d'un point de vue plus clair.",
    deliverables: ["Direction conceptuelle", "Plan mobilier", "Palette materiaux", "Guide d'achats"],
    duration: "8 a 14 semaines",
    price: "A partir de 12k",
    benefit: "Un plan design complet pret a etre execute avec confiance.",
  },
  "condo-refresh": {
    title: "Rafraichissement condo",
    description:
      "Un service cible pour les espaces compacts ou rangement, lumiere et proportions doivent travailler plus fort.",
    deliverables: ["Revision du plan", "Direction eclairage", "Selection finis", "Liste styling"],
    duration: "4 a 8 semaines",
    price: "A partir de 6k",
    benefit: "Plus de fonction et de chaleur sans renovation complete.",
  },
  "boutique-commercial-spaces": {
    title: "Espaces commerciaux boutique",
    description:
      "Direction interieure pour studios, showrooms, cliniques et commerces qui doivent paraitre polis et locaux.",
    deliverables: ["Flux client", "Palette de marque", "Direction fixtures", "Checklist lancement"],
    duration: "10 a 16 semaines",
    price: "A partir de 18k",
    benefit: "Un espace memorable qui soutient l'experience client.",
  },
  "styling-material-consultation": {
    title: "Consultation styling et materiaux",
    description:
      "Un mandat leger pour les clients qui ont besoin d'un deuxieme regard sur finis, mobilier ou styling.",
    deliverables: ["Consultation 90 min", "Notes de selection", "Fournisseurs cibles", "Prochaines etapes"],
    duration: "1 a 2 semaines",
    price: "A partir de 950",
    benefit: "Des decisions claires sans alourdir le processus.",
  },
};

export function ServiceCard({ service, locale = "en" }: { service: Service; locale?: Locale }) {
  const translated = locale === "fr" ? { ...service, ...frServices[service.slug] } : service;

  return (
    <article className="group rounded-[2px] border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">{translated.duration}</p>
      <h3 className="mt-4 text-2xl font-semibold">{translated.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{translated.description}</p>
      <div className="mt-6 border-t pt-5">
        <p className="text-sm font-medium">{translated.price}</p>
        <p className="mt-1 text-sm text-muted-foreground">{translated.benefit}</p>
      </div>
      <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
        {translated.deliverables.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
