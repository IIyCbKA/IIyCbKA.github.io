import { type Language } from "@/stores";

export const aboutI18n: Record<Language, any> = {
  ru: {
    label: "01 — ОБО МНЕ",
    headline: "Создаю надёжные веб-приложения.",
    p1: "Меня зовут Александр. Я full-stack разработчик из Москвы с двухлетним опытом коммерческой и самостоятельной разработки веб-приложений. Основной технологический стек включает Django и PostgreSQL для серверной части, а также React и TypeScript для разработки пользовательских интерфейсов. Участвую в создании сервисов полного цикла: от проектирования структуры данных и серверной логики до реализации пользовательского интерфейса.",
    p2: "Наиболее комфортно чувствую себя в backend-разработке, где могу уделять внимание архитектуре приложения, надёжности API, производительности и поддерживаемости кода. При необходимости беру на себя и frontend-задачи — есть опыт самостоятельной разработки клиентской части крупного проекта на React.",
    p3: "Помимо основной разработки занимаюсь собственными некоммерческими проектами и исследовательской деятельностью. Это позволяет постоянно совершенствовать подходы к проектированию программного обеспечения и повышать качество кода. Считаю, что хорошее программное решение должно быть не только функциональным, но и понятным для дальнейшего сопровождения и развития.",
    location: "Локация",
    locationValue: "Москва, RU",
    experience: "Опыт",
    experienceValue: "2 года",
    status: "Статус",
    statusValue: "Открыт к работе",
  },
  en: {
    label: "01 — ABOUT",
    headline: "Building reliable web applications.",
    p1: "I'm Alexander, a full-stack developer based in Moscow with two years of experience building web applications. My primary technological stack includes Django and PostgreSQL on the backend, alongside React and TypeScript for frontend development. I work across the entire development lifecycle, from database design and backend implementation to responsive frontend interfaces.",
    p2: "My primary focus is backend development, where I enjoy designing application architecture, building reliable APIs, and writing maintainable code. When required, I also work on frontend development and have experience implementing the complete client side of a large React and TypeScript project.",
    p3: "Outside of commercial development, I build personal projects and write research papers related to software engineering. Continuous learning and code quality are important to me, and I believe that successful software should remain understandable, maintainable, and easy to extend over time.",
    location: "Location",
    locationValue: "Moscow, RU",
    experience: "Experience",
    experienceValue: "2 years",
    status: "Status",
    statusValue: "Open to work",
  },
} as const;

export function getAboutI18n(lang: Language) {
  return aboutI18n[lang];
}
