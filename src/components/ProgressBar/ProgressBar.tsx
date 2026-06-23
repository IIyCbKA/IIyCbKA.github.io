import React from "react";
import styles from "./styles.module.scss";
import { useUiStore } from "@/stores";

export default function ProgressBar(): React.ReactElement {
  const scrollY = useUiStore((s) => s.scrollY);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress =
    docHeight > 0 ? Math.min(100, (scrollY / docHeight) * 100) : 0;

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressFill}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
