import Link from "next/link";

import { LanguageSwitcher } from "@/components/luma/language-switcher";
import { Button } from "@/components/ui/button";
import { getCurrentLocale } from "@/lib/locale";

const navLabels = {
  en: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    caseStudy: "Case Study",
    cta: "Start a project",
  },
  fr: {
    home: "Accueil",
    services: "Services",
    work: "Realisations",
    about: "A propos",
    contact: "Contact",
    caseStudy: "Etude de cas",
    cta: "Demarrer un projet",
  },
} as const;

export async function Navbar() {
  const locale = await getCurrentLocale();
  const labels = navLabels[locale];
  const navItems = [
    { href: "/", label: labels.home },
    { href: "/services", label: labels.services },
    { href: "/work", label: labels.work },
    { href: "/about", label: labels.about },
    { href: "/contact", label: labels.contact },
    { href: "/case-study", label: labels.caseStudy },
  ];

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-base font-semibold">
          <span className="grid size-8 place-items-center rounded-full border border-accent text-xs text-accent">
            LS
          </span>
          <span>Luma Studio</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={locale} />
          <Button asChild size="sm">
            <Link href="/contact">{labels.cta}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
