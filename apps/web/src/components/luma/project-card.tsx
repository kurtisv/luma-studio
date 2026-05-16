import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectImage } from "@/components/luma/project-image";
import { projects } from "@/data/luma";
import type { Locale } from "@/i18n/config";

type Project = (typeof projects)[number];

const frProjects: Record<string, Partial<Project>> = {
  "mile-end-loft": {
    type: "Loft residentiel",
    description: "Un loft industriel etroit adouci avec lin, chene et un plan d'eclairage en couches.",
  },
  "oak-linen-residence": {
    type: "Residence familiale",
    description: "Une maison familiale lumineuse construite autour de materiaux durables et de rangements calmes.",
  },
  "atelier-boutique": {
    type: "Interieur retail",
    description: "Une boutique compacte avec contraste doux, presentation flexible et parcours client calme.",
  },
  "riverside-condo": {
    type: "Rafraichissement condo",
    description: "Un condo centre sur la lumiere reflechie, le rangement compact et une chambre plus calme.",
  },
  "warm-minimal-kitchen": {
    type: "Concept cuisine",
    description: "Une cuisine minimale rechauffee par la pierre tactile, les facades de chene et la quincaillerie discrete.",
  },
  "nordic-reading-room": {
    type: "Projet styling",
    description: "Une salle de lecture calme avec neutres superposes, mobilier bas et mur bibliotheque integre.",
  },
};

export function ProjectCard({ project, index, locale = "en" }: { project: Project; index: number; locale?: Locale }) {
  const translated = locale === "fr" ? { ...project, ...frProjects[project.slug] } : project;

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <ProjectImage
        image={translated.image}
        priority={index < 2}
        className="aspect-[4/3] transition duration-300 group-hover:-translate-y-1"
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">
            {translated.type} / {translated.year}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{translated.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{translated.description}</p>
        </div>
        <ArrowUpRight className="mt-1 size-5 shrink-0 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
