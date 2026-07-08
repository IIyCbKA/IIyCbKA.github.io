import { type WorkId, type WorkTranslation } from "./types";
import { type Language } from "@/stores";

export const worksI18n: Record<Language, any> = {
  ru: {
    label: "03 — РАБОТЫ",
    headline: "Избранные проекты.",
    items: {
      education: {
        alt: "Главная страница",
        title: "Курсы",
        description:
          "Полнофункциональная образовательная платформа, аналогичная сервису Google Classroom, адаптированная для университетской среды с системой сбора и отображения статистики.",
      },
      grp: {
        alt: "Показатели Белгородской области",
        title: "GRP-AI",
        description:
          "Сервис прогнозирования ключевых социально-экономических показателей регионов Российской Федерации с использованием моделей машинного обучения, обученных на открытых статистических данных.",
      },
      auth: {
        alt: "Форма авторизации",
        title: "Сервис аутентификации",
        description:
          "Open-source сервис аутентификации для интеграции в приложения на стеке Django + React. Предоставляет готовую основу для авторизации пользователей и ускоряет разработку новых проектов.",
      },
    } satisfies Record<WorkId, WorkTranslation>,
  },
  en: {
    label: "03 — WORKS",
    headline: "Selected projects.",
    items: {
      education: {
        alt: "Dashboard",
        title: "Education",
        description:
          "A fully functional website similar to the Google Classroom service for a university environment with statistics collection.",
      },
      grp: {
        alt: "Belgorod Region Indicators",
        title: "GRP-AI",
        description:
          "A service for forecasting key socio-economic indicators of Russian regions using machine learning models trained on publicly available statistical data.",
      },
      auth: {
        alt: "Login form",
        title: "Authentication Service",
        description:
          "An open-source authentication service designed for seamless integration into Django + React applications. It provides a reusable authentication foundation, accelerating the development of new projects.",
      },
    } satisfies Record<WorkId, WorkTranslation>,
  },
} as const;

export function getWorksI18n(lang: Language) {
  return worksI18n[lang];
}
