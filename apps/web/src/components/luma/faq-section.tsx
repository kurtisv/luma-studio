import { faqs } from "@/data/luma";
import { getCurrentLocale } from "@/lib/locale";

const frFaqs = [
  {
    question: "Combien de temps prend un projet?",
    answer:
      "Une consultation ciblee peut avancer en une a deux semaines. Les concepts complets prennent souvent de huit a seize semaines selon l'etendue.",
  },
  {
    question: "Travaillez-vous avec les petits espaces?",
    answer:
      "Oui. Condos, studios et petits espaces commerciaux font partie du coeur du studio, car chaque decision doit etre plus precise.",
  },
  {
    question: "Pouvez-vous aider seulement avec les materiaux?",
    answer:
      "Oui. La consultation styling et materiaux est faite pour les clients qui ont besoin de direction sans mandat complet.",
  },
  {
    question: "Gerez-vous les entrepreneurs?",
    answer:
      "Luma fournit la direction design et la documentation. La coordination peut etre soutenue selectivement selon le projet.",
  },
  {
    question: "Quel budget prevoir?",
    answer:
      "Les projets demarrent souvent autour de 5k pour un accompagnement cible et augmentent selon la renovation, le mobilier et le sur mesure.",
  },
];

export async function FAQSection() {
  const locale = await getCurrentLocale();
  const items = locale === "fr" ? frFaqs : faqs;

  return (
    <div className="divide-y divide-border border-y">
      {items.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium">
            {faq.question}
            <span className="text-accent transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
