# Hossein Bastam — Personal Website

Trilingual (Persian · English · Arabic) personal portfolio website for **Hossein Bastam**, HSE (Health, Safety & Environment) professional — built from LinkedIn profile data and certification gallery.

## ✨ Features

- 🌐 **Three languages**: Persian (default), English, Arabic — with full **RTL/LTR** layout switching
- 🎨 Modern, responsive design (mobile-first) with dark theme, smooth reveal animations
- 📜 Interactive certificate gallery with lightbox viewer
- 🔍 **SEO optimized**: metadata + Open Graph + Twitter cards, `sitemap.xml`, `robots.txt`, hreflang alternates, JSON-LD structured data (Person schema), PWA manifest
- ⚡ Next.js App Router + Tailwind CSS 4 + shadcn/ui
- 🔤 Local fonts (Vazirmatn for Persian/Arabic, Inter for English)

## 🗂 Project Structure

```
src/
├── app/               # App Router (layout, page, sitemap.ts, robots.ts, manifest.ts)
├── components/        # UI components + site sections (sections.tsx, certificate-gallery.tsx)
├── fonts/             # Vazirmatn + Inter (self-hosted woff2)
├── lib/               # i18n dictionary, data (profile, jobs, certificates)
public/
├── certificates/      # Certificate images (web-optimized)
└── images/            # Profile photo, OG image, logo
```

## 🚀 Getting Started

```bash
# install dependencies
bun install   # or: npm install

# run the dev server
bun run dev   # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
bun run build
bun run start
```

## 🌍 Language Routing

| Language | URL          | Direction |
| -------- | ------------ | --------- |
| Persian  | `/` (default) | RTL |
| English  | `/?lang=en`  | LTR |
| Arabic   | `/?lang=ar`  | RTL |

## 📄 License

Content © Hossein Bastam. All rights reserved.
