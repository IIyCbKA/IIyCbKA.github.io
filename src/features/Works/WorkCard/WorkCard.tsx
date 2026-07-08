import React from "react";
import WorkCardProps from "./interface";
import styles from "./styles.module.scss";
import shared from "@/shared/common.module.scss";
import { clsx } from "clsx";

export default function WorkCard({
  src,
  alt,
  number,
  title,
  description,
  tags,
}: WorkCardProps): React.ReactElement {
  const workNum = number.toString().padStart(2, "0");

  return (
    <article className={styles.workCard}>
      <div className={clsx(styles.workImage, shared.frame)}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.workBody}>
        <div className={styles.workNum}>{workNum}</div>
        <h3 className={styles.workTitle}>{title}</h3>
        <p className={styles.workDesc}>{description}</p>
        <ul className={styles.workTags}>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
