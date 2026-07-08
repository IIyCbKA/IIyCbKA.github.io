import React from "react";
import styles from "./styles.module.scss";
import { getWorksI18n } from "./i18n";
import { WORKS } from "./data";
import WorkCard from "./WorkCard";
import shared from "@/shared/common.module.scss";
import { usePreferencesStore } from "@/stores";
import { Reveal } from "@/components";

export default function Works(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);

  const t = getWorksI18n(language);

  return (
    <Reveal as={"section"} className={shared.section} id={"works"}>
      <div className={shared.sectionHead}>
        <span className={shared.sectionLabel}>{t.label}</span>
        <h2 className={shared.sectionHeadline}>{t.headline}</h2>
      </div>
      <div className={styles.worksGrid}>
        {WORKS.map((work, index) => {
          const item = t.items[work.id];

          return (
            <WorkCard
              key={work.id}
              src={work.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
              tags={work.tags}
              number={index + 1}
            />
          );
        })}
      </div>
    </Reveal>
  );
}
