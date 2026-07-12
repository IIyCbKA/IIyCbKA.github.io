import React from "react";
import styles from "./styles.module.scss";
import { getContactI18n } from "./i18n";
import { contactLinks } from "./data";
import shared from "@/shared/common.module.scss";
import { usePreferencesStore } from "@/stores";
import { Reveal } from "@/components";

export default function Contact(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);

  const t = getContactI18n(language);

  return (
    <Reveal as={"section"} className={shared.section} id={"contact"}>
      <div className={shared.sectionHead}>
        <span className={shared.sectionLabel}>{t.label}</span>
        <h2 className={shared.sectionHeadline}>{t.headline}</h2>
      </div>
      <div className={styles.contactLinks}>
        {contactLinks.map((link) => {
          const username = `@${link.href.split("/").pop() || ""}`;

          return (
            <a
              key={link.href}
              href={link.href}
              className={styles.contactLink}
              target="_blank"
              rel="noopener"
            >
              <span className={styles.clLabel}>{link.label}</span>
              <span className={styles.clValue}>{username}</span>
              <span className={styles.clArrow}>↗</span>
            </a>
          );
        })}
      </div>
    </Reveal>
  );
}
