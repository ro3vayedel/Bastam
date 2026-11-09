import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "دکتر حسین بستام | مدرس دانشگاه و مدیر HSE",
    short_name: "حسین بستام",
    description:
      "مدرس دانشگاه و مدیر سلامت، ایمنی و محیط زیست (HSE) با بیش از ۱۱ سال تجربه در صنایع نفت و گاز",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d10",
    theme_color: "#09090b",
    lang: "fa-IR",
    dir: "rtl",
    icons: [
      {
        src: "/images/profile.jpg",
        sizes: "800x800",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
