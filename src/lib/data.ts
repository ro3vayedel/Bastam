import type { Localized } from "./i18n";

export type CertificateCategory = "hse" | "management" | "standards" | "computer" | "general";

export interface Certificate {
  id: string;
  image: { fa: string; en: string };
  category: CertificateCategory;
  title: Localized;
  issuer: Localized;
  date: Localized;
  license?: string;
  url?: string;
}

const IAU: Localized = {
  fa: "دانشگاه آزاد اسلامی و مرکز آموزش فنی‌وحرفه‌ای بندر دیر",
  en: "Islamic Azad University & Professional/Technical Training Dept. (Bandar Dayyer)",
  ar: "الجامعة الإسلامية الآزاد ومركز التدريب الفني والمهني (بندر دير)",
};
const IAU_DATE: Localized = { fa: "اکتبر ۲۰۱۸", en: "Oct 2018", ar: "أكتوبر ٢٠١٨" };

const TCKIT: Localized = { fa: "Tckit آلمان", en: "Tckit Germany", ar: "Tckit ألمانيا" };
const OXFORD: Localized = {
  fa: "Oxford International",
  en: "Oxford International",
  ar: "Oxford International",
};
const PARS: Localized = {
  fa: "آموزشگاه پارس اصفهان",
  en: "Pars Institute (Isfahan)",
  ar: "معهد پارس (أصفهان)",
};
const MPT: Localized = {
  fa: "MPT Academy (به همراه HSE South of Country)",
  en: "MPT Academy (with HSE South of Country)",
  ar: "أكاديمية MPT (ببالتعاون مع HSE South of Country)",
};
const N_IQC: Localized = {
  fa: "شرکت کنترل کیفیت ایران (N.IQC)",
  en: "Iran Quality Certification Co. (N.IQC)",
  ar: "شركة مراقبة الجودة الإيرانية (N.IQC)",
};
const MK: Localized = { fa: "مکتب‌خونه", en: "Maktabkhooneh", ar: "Maktabkhooneh" };

const MK_URL = "https://www.maktabkhooneh.org/certificates/";

export const certificates: Certificate[] = [
  // ---------- Islamic Azad University series (Oct 2018) ----------
  {
    id: "zoning",
    image: { fa: "/certificates/Certificate-Classification-of-Hazardous-AreaZoningandExplosion-Protection-Tools-and-Equipment-001.jpg", en: "/certificates/Certificate-Classification-of-Hazardous-AreaZoningandExplosion-Protection-Tools-and-Equipment-001.jpg" },
    category: "hse",
    title: {
      fa: "طبقه‌بندی مناطق خطرناک (زونینگ) و تجهیزات و ابزار مقاوم در برابر انفجار",
      en: "Classification of Hazardous Areas (Zoning) & Explosion Protection Tools and Equipment",
      ar: "تصنيف المناطق الخطرة (الزونينغ) ومعدات وأدوات الحماية من الانفجار",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "confined-space",
    image: { fa: "/certificates/Certificate-Confined-Space-Entry-and-Authorized-Gas-Tester-001.jpg", en: "/certificates/Certificate-Confined-Space-Entry-and-Authorized-Gas-Tester-001.jpg" },
    category: "hse",
    title: {
      fa: "ورود به فضاهای بسته و گازسنج مجاز",
      en: "Confined Space Entry & Authorized Gas Tester",
      ar: "الدخول إلى الأماكن المغلقة وفاحص الغازات المعتمد",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "accidents",
    image: { fa: "/certificates/Certificate-Different-Type-of-Accident-in-Refineries-001.jpg", en: "/certificates/Certificate-Different-Type-of-Accident-in-Refineries-001.jpg" },
    category: "hse",
    title: {
      fa: "انواع حوادث در پالایشگاه‌ها",
      en: "Different Types of Accidents in Refineries",
      ar: "أنواع الحوادث في المصافي",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "erp",
    image: { fa: "/certificates/Certificate-Emergency-Response-PlanERTERCCMC-001.jpg", en: "/certificates/Certificate-Emergency-Response-PlanERTERCCMC-001.jpg" },
    category: "hse",
    title: {
      fa: "برنامه مدیریت وضعیت‌های اضطراری (ERT، ERC، CMC)",
      en: "Emergency Response Plan (ERT, ERC, CMC)",
      ar: "خطة الاستجابة للطوارئ (ERT، ERC، CMC)",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "hazard-risk",
    image: { fa: "/certificates/Certificate-Hazard-and-Risk-Management-001.jpg", en: "/certificates/Certificate-Hazard-and-Risk-Management-001.jpg" },
    category: "hse",
    title: { fa: "مدیریت خطر و ریسک", en: "Hazard & Risk Management", ar: "إدارة المخاطر والخطرات" },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "refinery-id",
    image: { fa: "/certificates/Certificate-in-Refinery-Identification-001.jpg", en: "/certificates/Certificate-in-Refinery-Identification-001.jpg" },
    category: "hse",
    title: { fa: "شناسایی و آشنایی با پالایشگاه", en: "Certificate in Refinery Identification", ar: "التعرف على المصافي" },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "lopa",
    image: { fa: "/certificates/Certificate-Layer-of-Protection-AnalysisLOPA-001.jpg", en: "/certificates/Certificate-Layer-of-Protection-AnalysisLOPA-001.jpg" },
    category: "hse",
    title: { fa: "تحلیل لایه‌های حفاظتی (LOPA)", en: "Layer of Protection Analysis (LOPA)", ar: "تحليل طبقات الحماية (LOPA)" },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "ptw",
    image: { fa: "/certificates/Certificate-Permit-to-Work-System-PTW-001.jpg", en: "/certificates/Certificate-Permit-to-Work-System-PTW-001.jpg" },
    category: "hse",
    title: { fa: "سیستم مجوز کار (PTW)", en: "Permit to Work System (PTW)", ar: "نظام تصاريح العمل (PTW)" },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "pssr",
    image: { fa: "/certificates/Certificate-Pre-Startup-Safety-Review-PSSR-001.jpg", en: "/certificates/Certificate-Pre-Startup-Safety-Review-PSSR-001.jpg" },
    category: "hse",
    title: {
      fa: "بازبینی ایمنی پیش از راه‌اندازی (PSSR)",
      en: "Pre-Startup Safety Review (PSSR)",
      ar: "مراجعة السلامة قبل بدء التشغيل (PSSR)",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "psm",
    image: { fa: "/certificates/Certificate-Process-Safety-ManagementPSM-Basic-001.jpg", en: "/certificates/Certificate-Process-Safety-ManagementPSM-Basic-001.jpg" },
    category: "hse",
    title: {
      fa: "مدیریت ایمنی فرآیند (PSM) — مقدماتی",
      en: "Process Safety Management (PSM) — Basic",
      ar: "إدارة سلامة العمليات (PSM) — أساسي",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "pid",
    image: { fa: "/certificates/Certificate-ProcessUtilityPiping-and-instrument-Diagrams-001.jpg", en: "/certificates/Certificate-ProcessUtilityPiping-and-instrument-Diagrams-001.jpg" },
    category: "hse",
    title: {
      fa: "نقشه‌های فرآیند، یوتیلیتی، لوله‌کشی و ابزار دقیق (P&ID)",
      en: "Process, Utility, Piping & Instrument Diagrams (P&ID)",
      ar: "مخططات العمليات والمرافق والأنابيب وأجهزة القياس (P&ID)",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "fg-equipment",
    image: { fa: "/certificates/Certificate-Refinery-Safety-Fire-and-Gas-Equipment-001.jpg", en: "/certificates/Certificate-Refinery-Safety-Fire-and-Gas-Equipment-001.jpg" },
    category: "hse",
    title: {
      fa: "ایمنی پالایشگاه؛ تجهیزات کشف حریق و گاز",
      en: "Refinery Safety: Fire and Gas Equipment",
      ar: "سلامة المصافي: معدات كشف الحريق والغاز",
    },
    issuer: IAU, date: IAU_DATE,
  },
  {
    id: "steam-nitrogen",
    image: { fa: "/certificates/Certificate-SteamandNitrogen-Hazards-Awareness-001.jpg", en: "/certificates/Certificate-SteamandNitrogen-Hazards-Awareness-001.jpg" },
    category: "hse",
    title: {
      fa: "آشنایی با خطرات بخار و نیتروژن",
      en: "Steam & Nitrogen Hazards Awareness",
      ar: "الوعي بمخاطر البخار والنيتروجين",
    },
    issuer: IAU, date: IAU_DATE,
  },
  // ---------- Tckit Germany ----------
  {
    id: "icdl-tckit",
    image: { fa: "/certificates/ICDL-Tckit.jpg", en: "/certificates/ICDL-Tckit.jpg" },
    category: "computer",
    title: { fa: "مهارت‌های هفتگانه رایانه (ICDL)", en: "ICDL — Seven Computer Skills", ar: "مهارات الحاسب السبع (ICDL)" },
    issuer: TCKIT, date: { fa: "اکتبر ۲۰۱۴", en: "Oct 2014", ar: "أكتوبر ٢٠١٤" },
  },
  {
    id: "hse-plan-tckit",
    image: { fa: "/certificates/HSE-Tckit.jpg", en: "/certificates/HSE-Tckit.jpg" },
    category: "hse",
    title: {
      fa: "سلامت، ایمنی و محیط زیست صنعتی (HSE PLAN)",
      en: "Industrial Health, Safety & Environment (HSE Plan)",
      ar: "الصحة والسلامة والبيئة الصناعية (خطة HSE)",
    },
    issuer: TCKIT, date: { fa: "اکتبر ۲۰۱۴", en: "Oct 2014", ar: "أكتوبر ٢٠١٤" },
  },
  // ---------- Oxford ----------
  {
    id: "pm-oxford",
    image: { fa: "/certificates/ProjectManagment-Oxford.jpg", en: "/certificates/ProjectManagment-Oxford.jpg" },
    category: "management",
    title: { fa: "دوره آموزش مدیریت پروژه", en: "Project Management Training Course", ar: "دورة تدريب إدارة المشاريع" },
    issuer: OXFORD,
    date: { fa: "مه ۲۰۱۴", en: "May 2014", ar: "مايو ٢٠١٤" },
    license: "PMT415040338",
  },
  // ---------- Pars Institute (Isfahan) ----------
  {
    id: "icdl-pars",
    image: { fa: "/certificates/ICDL-ParsFa.jpg", en: "/certificates/ICDL-ParsEng.jpg" },
    category: "computer",
    title: { fa: "مهارت‌های هفتگانه رایانه (ICDL)", en: "Seven Computer Skills (ICDL)", ar: "مهارات الحاسب السبع (ICDL)" },
    issuer: PARS, date: { fa: "—", en: "—", ar: "—" },
  },
  {
    id: "hse-pars",
    image: { fa: "/certificates/HSE-ParsFa.jpg", en: "/certificates/HSE-ParsEng.jpg" },
    category: "hse",
    title: { fa: "ایمنی صنعتی", en: "Industrial Safety", ar: "السلامة الصناعية" },
    issuer: PARS, date: { fa: "—", en: "—", ar: "—" },
  },
  {
    id: "pm-pars",
    image: { fa: "/certificates/ProjectManagment-ParsFa.jpg", en: "/certificates/ProjectManagment-ParsEng.jpg" },
    category: "management",
    title: { fa: "مدیریت پروژه", en: "Project Management", ar: "إدارة المشاريع" },
    issuer: PARS, date: { fa: "—", en: "—", ar: "—" },
  },
  // ---------- MPT Academy ----------
  {
    id: "iso14001",
    image: { fa: "/certificates/14001.jpg", en: "/certificates/14001.jpg" },
    category: "standards",
    title: {
      fa: "الزامات و مستندسازی ISO 14001:2015 (سیستم مدیریت محیط زیست)",
      en: "ISO 14001:2015 Requirements & Documentation (Environmental Management System)",
      ar: "متطلبات وتوثيق ISO 14001:2015 (نظام الإدارة البيئية)",
    },
    issuer: MPT,
    date: { fa: "ژانویه ۲۰۲۰", en: "Jan 2020", ar: "يناير ٢٠٢٠" },
    license: "46279457",
  },
  {
    id: "scaffolding",
    image: { fa: "/certificates/Scaf.jpg", en: "/certificates/Scaf.jpg" },
    category: "hse",
    title: {
      fa: "ایمنی در ارتفاع و داربست‌بندی",
      en: "Safety in Height and Scaffolding",
      ar: "السلامة في الأماكن المرتفعة والسقالات",
    },
    issuer: MPT,
    date: { fa: "مارس ۲۰۲۰", en: "Mar 2020", ar: "مارس ٢٠٢٠" },
    license: "46280355",
  },
  {
    id: "hira",
    image: { fa: "/certificates/hazard.jpg", en: "/certificates/hazard.jpg" },
    category: "hse",
    title: {
      fa: "فنون شناسایی خطر و ارزیابی ریسک (HIRA)",
      en: "Hazard Identification and Risk Assessment Techniques (HIRA)",
      ar: "تقنيات تحديد المخاطر وتقييمها (HIRA)",
    },
    issuer: MPT,
    date: { fa: "ژانویه ۲۰۲۰", en: "Jan 2020", ar: "يناير ٢٠٢٠" },
    license: "46279884",
  },
  // ---------- N.IQC ----------
  {
    id: "niqc",
    image: { fa: "/certificates/ISO-45001-2018.jpg", en: "/certificates/ISO-45001-2018.jpg" },
    category: "standards",
    title: {
      fa: "تاییدیه صلاحیت حرفه‌ای؛ عضویت در سامانه تخصصی HSE ایران (HSE-ME.IR)",
      en: "Professional Competency Approval — Membership of Iran's Specialist HSE Platform (HSE-ME.IR)",
      ar: "اعتماد الكفاءة المهنية — عضوية منصة HSE التخصصية في إيران (HSE-ME.IR)",
    },
    issuer: N_IQC, date: { fa: "اوت ۲۰۲۱", en: "Aug 2021", ar: "أغسطس ٢٠٢١" },
  },
  // ---------- Maktabkhooneh ----------
  {
    id: "excel-dashboards",
    image: { fa: "/certificates/Hossein-Bastam-MK-AZ4FY5.jpg", en: "/certificates/Hossein-Bastam-MK-AZ4FY5.jpg" },
    category: "computer",
    title: {
      fa: "ساخت داشبوردهای مدیریتی حرفه‌ای در اکسل",
      en: "Building Professional Management Dashboards in Excel",
      ar: "إنشاء لوحات معلومات إدارية احترافية في Excel",
    },
    issuer: MK,
    date: { fa: "مارس ۲۰۲۶", en: "Mar 2026", ar: "مارس ٢٠٢٦" },
    license: "MK-AZ4FY5",
    url: `${MK_URL}MK-AZ4FY5/`,
  },
  {
    id: "hse-l1",
    image: { fa: "/certificates/Hossein-Bastam-MK-HGB4J9.jpg", en: "/certificates/Hossein-Bastam-MK-HGB4J9.jpg" },
    category: "hse",
    title: { fa: "مقدمات HSE — سطح ۱", en: "Basic Certificate in HSE — Level 1", ar: "شهادة أساسية في HSE — المستوى ١" },
    issuer: MK,
    date: { fa: "مارس ۲۰۲۶", en: "Mar 2026", ar: "مارس ٢٠٢٦" },
    license: "MK-HGB4J9",
    url: `${MK_URL}MK-HGB4J9/`,
  },
  {
    id: "hse-l2",
    image: { fa: "/certificates/Hossein-Bastam-MK-UN2380.jpg", en: "/certificates/Hossein-Bastam-MK-UN2380.jpg" },
    category: "hse",
    title: { fa: "مقدمات HSE — سطح ۲", en: "Basic Certificate in HSE — Level 2", ar: "شهادة أساسية في HSE — المستوى ٢" },
    issuer: MK,
    date: { fa: "—", en: "—", ar: "—" },
    license: "MK-UN2380",
    url: `${MK_URL}MK-UN2380/`,
  },
  {
    id: "industrial-map",
    image: { fa: "/certificates/Hossein-Bastam-MK-D8936Z.jpg", en: "/certificates/Hossein-Bastam-MK-D8936Z.jpg" },
    category: "general",
    title: { fa: "نقشه‌خوانی صنعتی", en: "Industrial Map Reading", ar: "قراءة المخططات الصناعية" },
    issuer: MK,
    date: { fa: "—", en: "—", ar: "—" },
    license: "MK-D8936Z",
    url: `${MK_URL}MK-D8936Z/`,
  },
  {
    id: "labour-law",
    image: { fa: "/certificates/Hossein-Bastam-MK-9X1IUQ.jpg", en: "/certificates/Hossein-Bastam-MK-9X1IUQ.jpg" },
    category: "general",
    title: {
      fa: "قوانین و مقررات کار",
      en: "Employment & Labour Laws and Regulations",
      ar: "قوانين وأنظمة العمل والتوظيف",
    },
    issuer: MK,
    date: { fa: "—", en: "—", ar: "—" },
    license: "MK-9X1IUQ",
    url: `${MK_URL}MK-9X1IUQ/`,
  },
  {
    id: "excel-dataviz",
    image: { fa: "/certificates/Hossein-Bastam-MK-RXE2BE.jpg", en: "/certificates/Hossein-Bastam-MK-RXE2BE.jpg" },
    category: "computer",
    title: { fa: "مصورسازی داده‌ها در اکسل", en: "Data Visualization with Excel", ar: "تصور البيانات باستخدام Excel" },
    issuer: MK,
    date: { fa: "—", en: "—", ar: "—" },
    license: "MK-RXE2BE",
    url: `${MK_URL}MK-RXE2BE/`,
  },
  {
    id: "public-speaking",
    image: { fa: "/certificates/Hossein-Bastam-MK-SFR428.jpg", en: "/certificates/Hossein-Bastam-MK-SFR428.jpg" },
    category: "general",
    title: { fa: "مقدمات فن سخنوری", en: "An Introduction to Public Speaking", ar: "مقدمة في فن التحدث أمام الجمهور" },
    issuer: MK,
    date: { fa: "—", en: "—", ar: "—" },
    license: "MK-SFR428",
    url: `${MK_URL}MK-SFR428/`,
  },
  {
    id: "python",
    image: { fa: "/certificates/Hossein-Bastam-MK-NJ9EJM.jpg", en: "/certificates/Hossein-Bastam-MK-NJ9EJM.jpg" },
    category: "computer",
    title: { fa: "برنامه‌نویسی پایتون", en: "Python Programming", ar: "البرمجة بلغة بايثون" },
    issuer: MK,
    date: { fa: "—", en: "—", ar: "—" },
    license: "MK-NJ9EJM",
    url: `${MK_URL}MK-NJ9EJM/`,
  },
];

export const CONTACT = {
  email: "bastam.hossein@gmail.com",
  emailSecondary: "hossein.bastam@yahoo.com",
  phone: "+989161931365",
  phoneDisplay: "+98 916 193 1365",
  whatsapp: "https://wa.me/989161931365",
  fullName: {
    fa: "دکتر حسین بستام",
    en: "Dr. Hossein Bastam",
    ar: "د. حسين بستام",
  } as Localized,
  monogram: "HB",
};
