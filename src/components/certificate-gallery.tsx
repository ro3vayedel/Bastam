"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Award, Calendar, ExternalLink, Maximize2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/reveal";
import { certificates, type Certificate, type CertificateCategory } from "@/lib/data";
import type { Dictionary } from "@/lib/dictionary";
import { toLocaleDigits, type Locale } from "@/lib/i18n";

const CATEGORIES: CertificateCategory[] = ["hse", "management", "standards", "computer", "general"];

export function CertificateGallery({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const d = dict.certificates;
  const [active, setActive] = useState<CertificateCategory | "all">("all");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? certificates : certificates.filter((c) => c.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    map.set("all", certificates.length);
    for (const c of certificates) map.set(c.category, (map.get(c.category) ?? 0) + 1);
    return map;
  }, []);

  const chips: { key: CertificateCategory | "all"; label: string }[] = [
    { key: "all", label: d.filterAll },
    ...CATEGORIES.map((c) => ({
      key: c,
      label: pickCategory(c, locale),
    })),
  ];

  const image = selected ? selected.image[locale === "en" ? "en" : "fa"] : null;

  return (
    <section id="certificates" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5">
              <Award className="size-3.5" aria-hidden="true" />
              {d.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className="text-gradient">{d.title}</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">{d.subtitle}</p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal>
          <div
            className="flex flex-wrap justify-center gap-2 mb-8"
            role="tablist"
            aria-label={d.title}
          >
            {chips.map((c) => (
              <button
                key={c.key}
                type="button"
                role="tab"
                aria-selected={active === c.key}
                onClick={() => setActive(c.key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold border transition cursor-pointer ${
                  active === c.key
                    ? "bg-primary text-primary-foreground border-primary glow-amber"
                    : "bg-white/5 text-muted-foreground border-white/10 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {c.label}
                <span className="ms-1.5 opacity-70">
                  ({toLocaleDigits(counts.get(c.key) ?? 0, locale)})
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((cert, i) => (
            <Reveal key={cert.id} delay={Math.min(i * 0.03, 0.2)} y={18}>
              <button
                type="button"
                onClick={() => setSelected(cert)}
                aria-haspopup="dialog"
                aria-label={`${d.openTitle}: ${cert.title[locale]}`}
                className="glass group relative w-full rounded-2xl p-2.5 text-start hover:border-primary/45 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5">
                  <Image
                    src={cert.image[locale === "en" ? "en" : "fa"]}
                    alt={cert.title[locale]}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 23vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute inset-0 grid place-items-center bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  >
                    <span className="grid place-items-center size-10 rounded-full bg-primary text-primary-foreground">
                      <Maximize2 className="size-4.5" />
                    </span>
                  </span>
                </div>
                <div className="px-2 pt-3 pb-1.5">
                  <h3 className="text-[13px] font-bold leading-6 line-clamp-2 min-h-12">
                    {cert.title[locale]}
                  </h3>
                  <p className="mt-1 text-[11px] text-muted-foreground truncate">
                    {cert.issuer[locale]}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                    <Calendar className="size-3" aria-hidden="true" />
                    {cert.date[locale]}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl w-[calc(100vw-2rem)] bg-popover border-white/15 p-4 sm:p-6">
          <DialogHeader className="text-start">
            <DialogTitle className="text-sm sm:text-base leading-7 pe-6">
              {selected?.title[locale]}
            </DialogTitle>
          </DialogHeader>
          {selected && image && (
            <div className="relative max-h-[62vh] overflow-y-auto rounded-xl bg-black/40">
              <img
                src={image}
                alt={selected.title[locale]}
                className="mx-auto max-h-[62vh] w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
          {selected && (
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>
                <span className="text-foreground/60">{dict.certificates.license}: </span>
                <span dir="ltr" className="font-semibold text-foreground/85">
                  {selected.license ?? "—"}
                </span>
              </span>
              <span>{selected.date[locale]}</span>
              <span>{selected.issuer[locale]}</span>
              {selected.url && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                  {d.viewOnline}
                </a>
              )}
            </div>
          )}
          <p className="mt-3 text-[11px] text-muted-foreground/70 flex items-center gap-1.5">
            <X className="size-3" aria-hidden="true" />
            {d.dialogHint}
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function pickCategory(c: CertificateCategory, locale: Locale): string {
  const map: Record<CertificateCategory, Record<Locale, string>> = {
    hse: { fa: "ایمنی و HSE", en: "HSE & Safety", ar: "السلامة و HSE" },
    management: { fa: "مدیریت", en: "Management", ar: "الإدارة" },
    standards: { fa: "استاندارد و تاییدیه", en: "Standards & Approvals", ar: "المعايير والاعتمادات" },
    computer: { fa: "رایانه و فناوری", en: "Computer & Tech", ar: "الحاسوب والتكنولوجيا" },
    general: { fa: "عمومی", en: "General", ar: "عام" },
  };
  return map[c][locale];
}
