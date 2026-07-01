export const CODE_FILENAME = "signature.ts";

export const SIGNATURE = `type Engineer = {
  stack: string[];
  role: string;
  writesMaintainableCode: boolean;
};

const me: Engineer = {
  stack: ["React", "Django", "PostgreSQL"],
  role: "Full-Stack",
  writesMaintainableCode: true,
};`;

export const STACK = {
  frontend: ["React", "Node.js", "Vite", "SCSS"],
  backend: ["Django", "Django REST Framework", "DRF Spectacular", "Celery"],
  databases: ["PostgreSQL", "Redis", "SQLite", "MinIO (S3)"],
  devops: ["Docker", "GitHub Actions", "Nginx"],
};
