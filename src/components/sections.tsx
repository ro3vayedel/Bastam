import Image from "next/image";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  ChevronDown,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  HardHat,
  Languages as LanguagesIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Reveal } from "./reveal";
import { CopyButton } from "./copy-button";
import { pick, toLocaleDigits, type Locale } from "@/lib/i18n";
import { CONTACT } from "@/lib/data";
import type { Dictionary } from "@/lib/dictionary";

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-12">
      <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5">
        <Sparkles className="size-3.5" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground text-sm sm:text-base">{subtitle}</p>}
    </Reveal>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute -top-32 start-1/4 size-[480px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute top-[45%] -end-32 size-[420px] rounded-full bg-amber-600/10 blur-[150px]" />
      <div className="absolute bottom-0 start-0 size-[380px] rounded-full bg-emerald-500/5 blur-[130px]" />
    </div>
  );
}

export { SectionHeading, BackgroundDecor };

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export function HeroSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.hero;
  return (
    <section id="top" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <BackgroundDecor />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Text */}
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
              </span>
              {d.openToWork}
            </p>
            <p className="mt-5 text-lg text-muted-foreground">
              {d.greeting} <span className="text-primary font-bold">—</span>
            </p>
            <h1 className="mt-1 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              <span className="text-gradient">{CONTACT.fullName[locale]}</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-semibold text-foreground/90">{d.role}</p>
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-7 text-muted-foreground">
              {d.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="credentials">
              {d.badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85"
                >
                  <BadgeCheck className="size-3.5 text-primary" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:brightness-110 active:scale-[0.98] transition glow-amber"
              >
                <Mail className="size-4" aria-hidden="true" />
                {d.ctaContact}
              </a>
              <a
                href="#certificates"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 hover:border-primary/40 transition"
              >
                <Award className="size-4 text-primary" aria-hidden="true" />
                {d.ctaCertificates}
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                {d.location}
              </span>
            </div>
          </Reveal>

          {/* Photo */}
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative mx-auto aspect-square w-72 sm:w-80 lg:w-full lg:max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-transparent to-amber-600/20 blur-xl" aria-hidden="true" />
              <div className="relative h-full w-full rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur">
                <Image
                  src="/images/profile.jpg"
                  alt={d.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 28rem"
                  className="rounded-[1.6rem] object-cover object-top"
                />
              </div>
              {/* floating chips */}
              <div className="absolute -bottom-4 start-0 glass rounded-2xl px-4 py-2.5 shadow-xl">
                <p className="flex items-center gap-1.5 text-xs font-bold">
                  <HardHat className="size-4 text-primary" aria-hidden="true" />
                  {d.floating1}
                </p>
                <p className="text-[10px] text-muted-foreground">{d.floating1Sub}</p>
              </div>
              <div className="absolute -top-3 end-0 glass rounded-2xl px-4 py-2.5 shadow-xl">
                <p className="flex items-center gap-1.5 text-xs font-bold">
                  <BookOpen className="size-4 text-primary" aria-hidden="true" />
                  {d.floating2}
                </p>
                <p className="text-[10px] text-muted-foreground">{d.floating2Sub}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.25}>
          <dl className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {d.stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-4 py-5 text-center hover:border-primary/40 transition-colors"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-2xl sm:text-3xl font-black text-primary">
                    {toLocaleDigits(s.value, locale)}
                  </span>
                  <span className="mt-1 block text-xs sm:text-[13px] text-muted-foreground">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown className="size-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
export function AboutSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.about;
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="glass rounded-3xl p-6 sm:p-8 h-full">
              {d.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-sm sm:text-[15px] leading-8 text-foreground/85 ${
                    i > 0 ? "mt-4" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="glass rounded-3xl p-6 sm:p-8 h-full">
              <h3 className="flex items-center gap-2 text-sm font-bold mb-4">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                {pick({ fa: "حوزه‌های کلیدی تخصص", en: "Key areas of expertise", ar: "مجالات التخصص الرئيسية" }, locale)}
              </h3>
              <ul className="grid gap-3">
                {d.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-3 text-[13px] leading-6 text-foreground/85"
                  >
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */
export function ExperienceSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.experience;
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />
        <ol className="relative ms-3 sm:ms-6 border-s-2 border-white/10 space-y-8">
          {d.items.map((item, i) => (
            <li key={`${item.company}-${item.period}`} className="relative">
              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <span
                  className="absolute -start-[13px] top-6 grid place-items-center size-6 rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                >
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <article className="glass rounded-2xl p-5 sm:p-6 hover:border-primary/35 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                        <Briefcase className="size-4 text-primary shrink-0" aria-hidden="true" />
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/80 font-medium flex items-center gap-1.5">
                        <Building2 className="size-3.5 text-muted-foreground" aria-hidden="true" />
                        {item.company}
                      </p>
                    </div>
                    <div className="text-end">
                      <p className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/25 px-3 py-1 text-xs font-semibold text-primary">
                        <Calendar className="size-3" aria-hidden="true" />
                        {item.period}
                      </p>
                      <p className="mt-1.5 text-xs text-muted-foreground flex items-center justify-end gap-1">
                        <MapPin className="size-3" aria-hidden="true" />
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-[13px] sm:text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */
export function ProjectsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.projects;
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.items.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.05, 0.25)}>
              <article className="glass group rounded-2xl p-5 sm:p-6 h-full flex flex-col hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between gap-2">
                  <span className="grid place-items-center size-10 rounded-xl bg-primary/10 border border-primary/25">
                    <FolderKanban className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground bg-white/5 rounded-full px-2.5 py-1">
                    {toLocaleDigits(p.period, locale)}
                  </span>
                </div>
                <h3 className="mt-4 text-sm sm:text-[15px] font-bold leading-6">{p.title}</h3>
                <p className="mt-1.5 text-xs font-semibold text-primary">{p.company}</p>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground flex-1">
                  {p.description}
                </p>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    {d.viewSite}
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    {d.ongoing}
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */
export function EducationSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.education;
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />
        <div className="grid gap-4 md:grid-cols-3">
          {d.items.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <article className="glass rounded-2xl p-6 h-full hover:border-primary/40 transition-colors">
                <span className="grid place-items-center size-11 rounded-xl bg-primary/10 border border-primary/25">
                  <GraduationCap className="size-5.5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[15px] font-bold leading-7">{e.degree}</h3>
                <p className="mt-1.5 text-[13px] text-foreground/75 font-medium">{e.school}</p>
                <p className="mt-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/25 px-3 py-1 text-xs font-semibold text-primary">
                    <Calendar className="size-3" aria-hidden="true" />
                    {toLocaleDigits(e.period, locale)}
                  </span>
                </p>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  <span className="font-semibold text-foreground/70">{d.thesisLabel}: </span>
                  {e.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills + Languages                                                 */
/* ------------------------------------------------------------------ */
export function SkillsSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.skills;
  const icons = [ShieldCheck, Wrench, HardHat, Briefcase];
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {d.groups.map((g, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={g.title} delay={Math.min(i * 0.06, 0.2)}>
                <div className="glass rounded-2xl p-6 h-full hover:border-primary/35 transition-colors">
                  <h3 className="flex items-center gap-2 text-sm font-bold">
                    <span className="grid place-items-center size-9 rounded-lg bg-primary/10 border border-primary/25">
                      <Icon className="size-4.5 text-primary" aria-hidden="true" />
                    </span>
                    {g.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-foreground/80 hover:border-primary/40 hover:text-foreground transition-colors"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Languages */}
        <Reveal delay={0.1}>
          <div className="glass mt-6 rounded-2xl p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-sm font-bold">
              <span className="grid place-items-center size-9 rounded-lg bg-primary/10 border border-primary/25">
                <LanguagesIcon className="size-4.5 text-primary" aria-hidden="true" />
              </span>
              {d.languagesTitle}
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {d.languages.map((l) => (
                <div key={l.name}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-sm font-semibold">{l.name}</p>
                    <p className="text-[11px] text-muted-foreground">{l.level}</p>
                  </div>
                  <div
                    className="mt-2 h-2 rounded-full bg-white/8 overflow-hidden"
                    role="progressbar"
                    aria-valuenow={l.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={l.name}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                      style={{ width: `${l.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */
export function ContactSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const d = dict.contact;
  const rows = [
    {
      icon: Mail,
      label: d.emailLabel,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      copyable: true,
    },
    {
      icon: Mail,
      label: d.emailSecondary,
      value: CONTACT.emailSecondary,
      href: `mailto:${CONTACT.emailSecondary}`,
      copyable: true,
    },
    {
      icon: Phone,
      label: d.phoneLabel,
      value: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phone}`,
      copyable: false,
    },
    {
      icon: MessageCircle,
      label: d.whatsappLabel,
      value: CONTACT.phoneDisplay,
      href: CONTACT.whatsapp,
      copyable: false,
    },
    {
      icon: MapPin,
      label: d.locationLabel,
      value: d.locationValue,
      href: undefined,
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r, i) => {
            const Icon = r.icon;
            const inner = (
              <>
                <span className="grid place-items-center size-11 rounded-xl bg-primary/10 border border-primary/25 shrink-0">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{r.label}</span>
                  <span className="mt-0.5 block text-sm font-semibold truncate" dir="ltr">
                    {r.value}
                  </span>
                </span>
                {r.copyable && (
                  <CopyButton
                    value={r.value}
                    copyLabel={d.copy}
                    copiedLabel={d.copied}
                  />
                )}
              </>
            );
            return (
              <Reveal key={r.label} delay={i * 0.05}>
                {r.href ? (
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-4 sm:p-5 flex items-center gap-3.5">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 text-center">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground hover:brightness-110 active:scale-[0.98] transition glow-amber"
            >
              <Mail className="size-4" aria-hidden="true" />
              {d.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
