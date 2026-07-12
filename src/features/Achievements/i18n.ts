import {
  type AchievementId,
  type AchievementSectionId,
  type AchievementTranslation,
} from "./types";
import { type Language } from "@/stores";

export const achievementsI18n: Record<Language, any> = {
  ru: {
    label: "04 — ДОСТИЖЕНИЯ",
    headline: "Научная деятельность и IT-достижения.",
    sections: {
      research: "Научная деятельность",
      competitions: "IT-достижения",
    } satisfies Record<AchievementSectionId, string>,
    items: {
      rucode: {
        title: "RuCode",
        description:
          "Призёр международного чемпионата по алгоритмическому программированию RuCode среди более чем 400 участников.",
      },
      hackathon: {
        title: "Хакатон «Text»",
        description:
          "Призёр хакатона по разработке модели машинного обучения для автоматической оценки текстовых ответов студентов.",
      },
      aros: {
        title: "Всероссийская олимпиада школьников по информатике",
        description:
          "Призёр регионального этапа Всероссийской олимпиады школьников по информатике.",
      },
      dbms: {
        title:
          "Сравнительный анализ производительности библиотек объектно-реляционного отображения для Python",
        description:
          "Исследование производительности Django, SQLAlchemy, SQLModel, Peewee и Pony ORM на основе воспроизводимой методики тестирования в 14 CRUD-сценариях. Опубликовано в журнале «Труды ИСП РАН».",
      },
      proxy: {
        title:
          "Сравнительный анализ режимов проксирования трафика через SOCKS5 при управляемом замещении наблюдаемого IP-адреса клиента",
        description:
          "Исследование трех схем подключения на базе SOCKS5 по критериям производительности, защищенности и эксплуатационной надежности. Опубликовано в сборнике Международной научно-технической конференции молодых ученых БГТУ им. В. Г. Шухова.",
      },
      economy: {
        title:
          "Сравнение нейросетевого прогноза социально-экономических показателей с классическим экстраполяционным подходом",
        description:
          "Исследование точности моделей машинного обучения для прогнозирования социально-экономических показателей регионов. Опубликовано в сборнике XVII Международного молодежного форума «Образование. Наука. Производство».",
      },
      quines: {
        title: "Куайны для поиска подмножеств чисел с нулевой суммой",
        description:
          "Исследование применения куайнов при анализе алгоритмов решения NP-трудных задач. Опубликовано в сборнике Международной научно-технической конференции молодых ученых БГТУ им. В. Г. Шухова.",
      },
      philosophy: {
        title:
          "Человек в тени машины: анализ влияния искусственного интеллекта",
        description:
          "Исследование социальных и экономических последствий развития искусственного интеллекта. Опубликовано в сборнике XVI Международного молодежного форума «Образование. Наука. Производство».",
      },
    } satisfies Record<AchievementId, AchievementTranslation>,
  },
  en: {
    label: "04 — ACHIEVEMENTS",
    headline: "Research and IT achievements.",
    sections: {
      research: "Research",
      competitions: "IT Achievements",
    } satisfies Record<AchievementSectionId, string>,
    items: {
      rucode: {
        title: "RuCode",
        description:
          "Prize winner in the RuCode International Algorithmic Programming Competition out of 400+ participants.",
      },
      hackathon: {
        title: "Text Hackathon",
        description:
          "Prize winner in a machine learning hackathon for developing an automated student essay grading model.",
      },
      aros: {
        title: "Russian National Olympiad in Informatics",
        description:
          "Prize winner in the regional stage of the Russian National Olympiad in Informatics.",
      },
      dbms: {
        title:
          "Comparative performance analysis of object-relational mapping libraries for Python",
        description:
          "A reproducible benchmark comparing Django, SQLAlchemy, SQLModel, Peewee, and Pony ORM across 14 CRUD scenarios. Published in the Proceedings of ISP RAS.",
      },
      proxy: {
        title:
          "Comparative analysis of SOCKS5 traffic proxying modes with controlled client IP address substitution",
        description:
          "A study on three SOCKS5-based connection schemes evaluated by performance, security, and operational reliability. Published in the Proceedings of the BSTU Young Scientists Conference.",
      },
      economy: {
        title:
          "Comparison of neural network forecasting of socio-economic indicators with the classical extrapolation approach",
        description:
          "Research evaluating machine learning models for forecasting regional socio-economic indicators. Published in the Proceedings of the XVII International Youth Forum 'Education. Science. Production'.",
      },
      quines: {
        title: "Quines for finding zero-sum subsets",
        description:
          "Research on applying quines to analyze algorithms for NP-hard problems. Published in the Proceedings of the BSTU Young Scientists Conference.",
      },
      philosophy: {
        title:
          "The human in the shadow of the machine: an analysis of the impact of artificial intelligence",
        description:
          "Research exploring the social and economic impacts of artificial intelligence. Published in the Proceedings of the XVI International Youth Forum 'Education. Science. Production'.",
      },
    } satisfies Record<AchievementId, AchievementTranslation>,
  },
} as const;

export function getAchievementsI18n(lang: Language) {
  return achievementsI18n[lang];
}
