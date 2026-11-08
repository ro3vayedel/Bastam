import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { localeConfig, isLocale, type Locale } from "@/lib/i18n";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const vazirmatn = localFont({
  src: [
    { path: "../fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Vazirmatn-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Vazirmatn-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../fonts/Vazirmatn-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

const inter = localFont({
  src: [{ path: "../fonts/Inter-var.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const h = await headers();
  const value = h.get("x-locale");
  const locale: Locale = isLocale(value) ? value : "fa";
  const cfg = localeConfig[locale];

  return (
    <html
      lang={cfg.htmlLang}
      dir={cfg.dir}
      suppressHydrationWarning
      className={`${vazirmatn.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
