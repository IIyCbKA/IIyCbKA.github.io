import { type AchievementSection } from "./types";

export const ACHIEVEMENTS: AchievementSection[] = [
  {
    id: "research",
    items: [
      { id: "dbms", year: 2026 },
      { id: "proxy", year: 2026 },
      { id: "economy", year: 2025 },
      { id: "quines", year: 2025 },
      { id: "philosophy", year: 2024 },
    ],
  },
  {
    id: "competitions",
    items: [
      { id: "rucode", year: 2025 },
      { id: "hackathon", year: 2023 },
      { id: "aros", year: 2023 },
    ],
  },
];
