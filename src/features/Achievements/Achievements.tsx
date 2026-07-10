import React from "react";
import styles from "./styles.module.scss";
import { getAchievementsI18n } from "./i18n";
import { ACHIEVEMENTS } from "./data";
import shared from "@/shared/common.module.scss";
import { usePreferencesStore } from "@/stores";
import { Reveal } from "@/components";

export default function Achievements(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);

  const t = getAchievementsI18n(language);

  return (
    <Reveal as={"section"} className={shared.section} id={"achievements"}>
      <div className={shared.sectionHead}>
        <span className={shared.sectionLabel}>{t.label}</span>
        <h2 className={shared.sectionHeadline}>{t.headline}</h2>
      </div>
      <div className={styles.achGrid}>
        {ACHIEVEMENTS.map((section) => (
          <div key={section.id} className={styles.achCol}>
            <h3 className={styles.achColTitle}>{t.sections[section.id]}</h3>
            <ul className={styles.achList}>
              {section.items.map((item) => {
                const { title, description } = t.items[item.id];

                return (
                  <li key={item.id} className={styles.achItem}>
                    <span className={styles.achYear}>{item.year}</span>
                    <div className={styles.achBody}>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
