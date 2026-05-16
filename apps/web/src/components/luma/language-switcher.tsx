"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { localeCookieName } from "@/lib/locale-cookie";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [nextLocale, setNextLocale] = useState<Locale | null>(null);

  useEffect(() => {
    if (!nextLocale) return;
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.replace(pathname);
    router.refresh();
  }, [nextLocale, pathname, router]);

  return (
    <div className="flex rounded-full border bg-card p-0.5 text-xs font-medium" aria-label="Language">
      {(["en", "fr"] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setNextLocale(locale)}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            current === locale ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
          aria-pressed={current === locale}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
