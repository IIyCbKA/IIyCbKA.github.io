import { type SectionId } from "./types";
import { type Language } from "@/stores";

export const stackI18n: Record<Language, any> = {
  ru: {
    label: "02 — СТЕК",
    headline: "Основные технологии и инструменты.",
    sections: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps",
    } satisfies Record<SectionId, string>,
    copy: "COPY",
    copied: "COPIED!",
  },
  en: {
    label: "02 — STACK",
    headline: "Core technologies and tools.",
    sections: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps",
    } satisfies Record<SectionId, string>,
    copy: "COPY",
    copied: "COPIED!",
  },
} as const;

export function getStackI18n(lang: Language) {
  return stackI18n[lang];
}
