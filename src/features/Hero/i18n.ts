import { type Language } from "@/stores";

export const heroI18n: Record<Language, any> = {
  ru: {
    label: "FULL-STACK · МОСКВА",
    sub: "Проектирую и разрабатываю веб-приложения полного цикла — от архитектуры до запуска в продакшен.",
    cta: {
      works: "Смотреть работы",
      contact: "Связаться",
    },
    scroll: "СКРОЛЛ ↓",
    typewriter: [
      "Привет, я Александр",
      "Full-stack инженер",
      "Создаю веб-продукты",
      "Открыт к проектам",
    ],
  },
  en: {
    label: "FULL-STACK · MOSCOW",
    sub: "I design and build full-cycle web applications — from architecture to production launch.",
    cta: {
      works: "View work",
      contact: "Get in touch",
    },
    scroll: "SCROLL ↓",
    typewriter: [
      "Hi, I'm Alexander",
      "Full-stack engineer",
      "Building web products",
      "Open to projects",
    ],
  },
} as const;

export function getHeroI18n(lang: Language) {
  return heroI18n[lang];
}
