export type ExperienceId = "freelance";

export type ExperienceEnd = number | "present";

export type ExperienceItem = {
  id: ExperienceId;
  startYear: number;
  endYear: ExperienceEnd;
  tags: string[];
};

export type ExperienceTranslation = {
  title: string;
  description: string;
};
