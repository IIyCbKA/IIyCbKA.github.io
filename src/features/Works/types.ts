export type WorkId = "education" | "grp" | "auth";

export type WorkData = {
  id: WorkId;
  image: string;
  tags: string[];
};

export type WorkTranslation = {
  alt: string;
  title: string;
  description: string;
};
