import React from "react";
import styles from "./styles.module.scss";
import { getExperienceI18n } from "./i18n";
import { EXPERIENCE } from "./data";
import shared from "@/shared/common.module.scss";
import { usePreferencesStore } from "@/stores";
import { Reveal } from "@/components";

export default function Experience(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);

  const t = getExperienceI18n(language);

  return (
    <Reveal as={"section"} className={shared.section} id={"experience"}>
      <div className={shared.sectionHead}>
        <span className={shared.sectionLabel}>{t.label}</span>
        <h2 className={shared.sectionHeadline}>{t.headline}</h2>
      </div>
      <div className={styles.timeline}>
        {EXPERIENCE.map((item) => {
          const { title, description } = t.items[item.id];
          const endYear = item.endYear === "present" ? t.present : item.endYear;

          return (
            <article className={styles.tItem} key={item.id}>
              <div className={styles.tPeriod}>
                {item.startYear} — {endYear}
              </div>
              <div className={styles.tBody}>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className={styles.tTags}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Reveal>
  );
}
