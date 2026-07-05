export type SectionId = "frontend" | "backend" | "databases" | "devops";

export type StackSection = {
  id: SectionId;
  items: string[];
};
