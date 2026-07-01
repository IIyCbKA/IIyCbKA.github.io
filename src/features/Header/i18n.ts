import { type Language } from "@/stores";

export const headerI18n: Record<Language, any> = {
  ru: {
    nav: {
      about: "Обо мне",
      stack: "Стек",
      works: "Работы",
      achievements: "Достижения",
      experience: "Опыт",
      contact: "Связь",
    },
    aria: {
      langToggle: "Сменить язык",
      themeToggle: "Сменить тему",
      menu: "Меню",
    },
    language: {
      ru: "RU",
      en: "EN",
    },
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      works: "Works",
      achievements: "Achievements",
      experience: "Experience",
      contact: "Contact",
    },
    aria: {
      langToggle: "Switch language",
      themeToggle: "Switch theme",
      menu: "Menu",
    },
    language: {
      ru: "RU",
      en: "EN",
    },
  },
} as const;

export function getHeaderI18n(lang: Language) {
  return headerI18n[lang];
}
