import React from "react";
import styles from "./styles.module.scss";
import { getAboutI18n } from "./i18n";
import shared from "@/shared/common.module.scss";
import { usePreferencesStore } from "@/stores";
import { Reveal } from "@/components";

export default function About(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);

  const t = getAboutI18n(language);

  return (
    <Reveal as={"section"} className={shared.section} id={"about"}>
      <div className={shared.sectionHead}>
        <span className={shared.sectionLabel}>{t.label}</span>
        <h2 className={shared.sectionHeadline}>{t.headline}</h2>
      </div>
      <div className={styles.about}>
        <div className={styles.aboutText}>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
          <div className={styles.aboutMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaK}>{t.location}</span>
              <span className={styles.metaV}>{t.locationValue}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaK}>{t.experience}</span>
              <span className={styles.metaV}>{t.experienceValue}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaK}>{t.status}</span>
              <span className={styles.metaV}>{t.statusValue}</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
