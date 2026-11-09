"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  Languages,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  defaultLocale,
  localeConfig,
  localePath,
  locales,
  pick,
  type Locale,
  type Localized,
} from "@/lib/i18n";
import { CONTACT } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  LocaleSync — keeps <html lang dir> in sync after client navigation */
/* ------------------------------------------------------------------ */
export function LocaleSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    const cfg = localeConfig[locale];
    document.documentElement.lang = cfg.htmlLang;
    document.documentElement.dir = cfg.dir;
    localStorage.setItem("pref-lang", locale);
  }, [locale]);
  return null;
}

/* ------------------------------------------------------------------ */
/*  LanguageSwitcher                                                   */
/* ------------------------------------------------------------------ */
function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();

  const switchTo = (target: Locale) => {
    if (target === locale) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const url = localePath(target) === "/" ? `/${hash}` : `${localePath(target)}${hash}`;
    router.replace(url, { scroll: false });
  };

  return (
    <div
      role="group"
      aria-label={pick(
        { fa: "انتخاب زبان", en: "Language selection", ar: "اختيار اللغة" },
        locale
      )}
      className={`flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 gap-0.5`}
    >
      <Languages className="mx-1.5 size-4 text-primary shrink-0" aria-hidden="true" />
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-current={l === locale ? "true" : undefined}
          title={localeConfig[l].name}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer ${
            l === locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {localeConfig[l].short}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Site header                                                        */
/* ------------------------------------------------------------------ */
const NAV_ITEMS: { id: string; key: keyof Localized }[] = [
  { id: "about", key: "about" },
  { id: "experience", key: "experience" },
  { id: "projects", key: "projects" },
  { id: "education", key: "education" },
  { id: "skills", key: "skills" },
  { id: "certificates", key: "certificates" },
  { id: "contact", key: "contact" },
];

export function SiteHeader({
  locale,
  nav,
  brandName,
}: {
  locale: Locale;
  nav: Record<string, string>;
  brandName: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href={localePath(locale)} className="flex items-center gap-3 group" aria-label={brandName}>
          <span className="grid place-items-center size-10 rounded-xl bg-primary text-primary-foreground font-black text-sm tracking-wide glow-amber group-hover:scale-105 transition-transform">
            {CONTACT.monogram}
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-bold text-sm">{brandName}</span>
            <span className="text-[11px] text-muted-foreground">
              {localeConfig[locale].dir === "rtl" ? "HSE Manager" : "HSE Manager"}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-colors"
            >
              {nav[item.key as string]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="lg:hidden grid place-items-center size-10 rounded-lg hover:bg-white/5 cursor-pointer"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          aria-label="Mobile"
          className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl"
        >
          <div className="px-4 py-3 grid gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground"
              >
                {nav[item.key as string]}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Site footer                                                        */
/* ------------------------------------------------------------------ */
export function SiteFooter({
  locale,
  footer,
  nav,
}: {
  locale: Locale;
  footer: { tagline: string; rights: string; quickNav: string; languages: string };
  nav: Record<string, string>;
}) {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center size-9 rounded-lg bg-primary text-primary-foreground font-black text-xs">
              {CONTACT.monogram}
            </span>
            <div className="leading-tight">
              <p className="font-bold text-sm">{CONTACT.fullName[locale]}</p>
              <p className="text-xs text-muted-foreground">{footer.tagline}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">{footer.quickNav}</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-primary transition-colors">
                  {nav[item.key as string]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">{footer.languages}</h3>
          <ul className="grid gap-2 text-xs text-muted-foreground">
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={localePath(l)}
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <ExternalLink className="size-3" aria-hidden="true" />
                  {localeConfig[l].name}
                  {l === locale && (
                    <span className="text-[10px] text-primary">•</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>{footer.rights}</p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden="true" />
              {localeConfig[locale].dir === "rtl" ? "خرمشهر، خوزستان" : "Khorramshahr, Iran"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
