export type AchievementSectionId = "research" | "competitions";

export type AchievementId =
  | "philosophy"
  | "quines"
  | "economy"
  | "proxy"
  | "dbms"
  | "aros"
  | "hackathon"
  | "rucode";

export type AchievementSection = {
  id: AchievementSectionId;
  items: AchievementData[];
};

export type AchievementData = {
  id: AchievementId;
  year: number;
};

export type AchievementTranslation = {
  title: string;
  description: string;
};
