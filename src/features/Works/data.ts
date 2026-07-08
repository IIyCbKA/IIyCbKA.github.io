import { type WorkData } from "./types";
import { AuthImg, EducationImg, GrpAiImg } from "@/assets/images";

export const WORKS: WorkData[] = [
  {
    id: "education",
    image: EducationImg,
    tags: ["React", "WebSocket", "Redux", "FastAPI", "PostgreSQL", "MinIO"],
  },
  {
    id: "grp",
    image: GrpAiImg,
    tags: ["React", "Django", "Redux", "Pandas", "Scikit-learn", "PyTorch"],
  },
  {
    id: "auth",
    image: AuthImg,
    tags: ["React", "Django", "Celery", "Redux", "PostgreSQL"],
  },
];
