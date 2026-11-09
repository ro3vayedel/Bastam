export type Locale = "fa" | "en" | "ar";

export const locales: Locale[] = ["fa", "en", "ar"];
export const defaultLocale: Locale = "fa";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "fa" || value === "en" || value === "ar";
}

export type Localized = Record<Locale, string>;

export const localeConfig: Record<
  Locale,
  { htmlLang: string; dir: "rtl" | "ltr"; name: string; short: string; englishName: string }
> = {
  fa: { htmlLang: "fa-IR", dir: "rtl", name: "فارسی", short: "فا", englishName: "Persian" },
  en: { htmlLang: "en", dir: "ltr", name: "English", short: "EN", englishName: "English" },
  ar: { htmlLang: "ar", dir: "rtl", name: "العربية", short: "ع", englishName: "Arabic" },
};

/** URL path for a locale (Persian is the default, served from "/") */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/?lang=${locale}`;
}

export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.fa;
}

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const AR_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

/** Convert western digits inside a string to locale-native digits */
export function toLocaleDigits(input: string | number, locale: Locale): string {
  const s = String(input);
  if (locale === "fa") return s.replace(/\d/g, (d) => FA_DIGITS[Number(d)]);
  if (locale === "ar") return s.replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
  return s;
}

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}
