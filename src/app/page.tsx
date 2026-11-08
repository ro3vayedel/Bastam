import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader, LocaleSync } from "@/components/site-chrome";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";
import { CertificateGallery } from "@/components/certificate-gallery";
import { certificates, CONTACT } from "@/lib/data";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, localeConfig, siteUrl, type Locale } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  SEO metadata — localized per language                              */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale: Locale = isLocale(lang) ? lang : "fa";
  const dict = getDictionary(locale);
  const base = siteUrl();
  const cfg = localeConfig[locale];

  const title = dict.meta.title;
  const description = dict.meta.description;

  return {
    title,
    description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Dr. Hossein Bastam" }],
    creator: "Dr. Hossein Bastam",
    publisher: "Dr. Hossein Bastam",
    metadataBase: new URL(base),
    alternates: {
      canonical: locale === "fa" ? "/" : `/?lang=${locale}`,
      languages: {
        "fa-IR": "/",
        en: "/?lang=en",
        ar: "/?lang=ar",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      url: locale === "fa" ? "/" : `/?lang=${locale}`,
      title,
      description,
      siteName: dict.meta.title,
      locale: cfg.htmlLang.replace("-", "_"),
      alternateLocale: ["fa_IR", "en", "ar_AR"],
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Dr. Hossein Bastam — University Lecturer & HSE Manager",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    category: "professional",
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */
function JsonLd({ locale }: { locale: Locale }) {
  const base = siteUrl();
  const url = locale === "fa" ? base : `${base}/?lang=${locale}`;
  const dict = getDictionary(locale);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: CONTACT.fullName[locale],
        alternateName: ["Hossein Bastam", "حسین بستام", "حسين باستام"],
        givenName: "Hossein",
        familyName: "Bastam",
        honorificPrefix: "Dr.",
        jobTitle: "University Lecturer & HSE Manager",
        description: dict.meta.description,
        image: `${base}/images/profile.jpg`,
        url,
        email: `mailto:${CONTACT.email}`,
        telephone: CONTACT.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Khorramshahr",
          addressRegion: "Khuzestan",
          addressCountry: "IR",
        },
        worksFor: {
          "@type": "Organization",
          name: "GRICO — GhaemReza Industries Complex",
        },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "Islamic Azad University, Sanandaj" },
          { "@type": "CollegeOrUniversity", name: "Mehr Arvand University" },
          { "@type": "CollegeOrUniversity", name: "Islamic Azad University" },
        ],
        knowsLanguage: ["Persian", "Arabic", "English", "Kurdish"],
        knowsAbout: [
          "Health, Safety and Environment (HSE)",
          "Process Safety Management",
          "Risk Assessment",
          "HAZOP",
          "LOPA",
          "Oil and Gas Industry Safety",
          "Emergency Response Planning",
          "Industrial Management",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Health, Safety and Environment Manager",
          occupationalCategory: "11-9199",
        },
        hasCredential: certificates.slice(0, 6).map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.title.en,
          credentialCategory: "certification",
          recognizedBy: { "@type": "Organization", name: c.issuer.en },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: CONTACT.fullName[locale],
        description: dict.meta.description,
        inLanguage: localeConfig[locale].htmlLang,
        publisher: { "@id": `${base}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profilepage`,
        url,
        inLanguage: localeConfig[locale].htmlLang,
        mainEntity: { "@id": `${base}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const locale: Locale = isLocale(lang) ? lang : "fa";
  const dict = getDictionary(locale);
  const nav: Record<string, string> = { ...dict.nav };

  return (
    <>
      <JsonLd locale={locale} />
      <LocaleSync locale={locale} />
      <SiteHeader locale={locale} nav={nav} brandName={CONTACT.fullName[locale]} />
      <main className="flex-1">
        <HeroSection locale={locale} dict={dict} />
        <AboutSection locale={locale} dict={dict} />
        <ExperienceSection locale={locale} dict={dict} />
        <ProjectsSection locale={locale} dict={dict} />
        <EducationSection locale={locale} dict={dict} />
        <SkillsSection locale={locale} dict={dict} />
        <CertificateGallery locale={locale} dict={dict} />
        <ContactSection locale={locale} dict={dict} />
      </main>
      <SiteFooter locale={locale} footer={dict.footer} nav={nav} />
    </>
  );
}
