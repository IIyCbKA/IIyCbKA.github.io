import { type ExperienceId, type ExperienceTranslation } from "./types";
import { type Language } from "@/stores";

export const experienceI18n: Record<Language, any> = {
  ru: {
    label: "05 — ОПЫТ",
    headline: "Карьерный путь.",
    present: "Н.В.",
    items: {
      freelance: {
        title: "Freelance Full-stack Engineer",
        description:
          "Проектирование и разработка веб-приложений полного цикла: от архитектуры баз данных и Backend API до создания пользовательских интерфейсов и развертывания программных решений.",
      },
    } satisfies Record<ExperienceId, ExperienceTranslation>,
  },
  en: {
    label: "05 — EXPERIENCE",
    headline: "Career path.",
    present: "PRESENT",
    items: {
      freelance: {
        title: "Freelance Full-stack Engineer",
        description:
          "Architected and deployed end-to-end web applications, encompassing database design, robust backend API development, responsive user interfaces, and cloud-based application deployment.",
      },
    } satisfies Record<ExperienceId, ExperienceTranslation>,
  },
} as const;

export function getExperienceI18n(lang: Language) {
  return experienceI18n[lang];
}
