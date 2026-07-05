import { type StackSection } from "./types";

export const STACK: StackSection[] = [
  { id: "frontend", items: ["React", "Node.js", "Vite", "SCSS"] },
  {
    id: "backend",
    items: ["Django", "Django REST Framework", "DRF Spectacular", "Celery"],
  },
  { id: "databases", items: ["PostgreSQL", "Redis", "SQLite", "MinIO (S3)"] },
  { id: "devops", items: ["Docker", "GitHub Actions", "Nginx"] },
];
