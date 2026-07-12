import { type Language } from "@/stores";

export const contactI18n: Record<Language, any> = {
  ru: {
    label: "06 — СВЯЗЬ",
    headline: "Давайте работать вместе.",
  },
  en: {
    label: "06 — CONTACT",
    headline: "Let's work together.",
  },
} as const;

export function getContactI18n(lang: Language) {
  return contactI18n[lang];
}
