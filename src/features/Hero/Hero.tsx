import React from "react";
import styles from "./styles.module.scss";
import { getHeroI18n } from "./i18n";
import HeroGrid from "./HeroGrid";
import { FrameMarks } from "@/assets/decorations";
import { usePreferencesStore } from "@/stores";
import { useTypewriter } from "@/hooks/Typewriter";

export default function Hero(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);

  const t = getHeroI18n(language);
  const typedText = useTypewriter(t.typewriter);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroInner}>
        <div>
          <div className={styles.heroLabel}>{t.label}</div>
          <h1 className={styles.heroTitle}>
            <span>{typedText}</span>
            <span className={styles.cursor}>▌</span>
          </h1>
          <p className={styles.heroSub}>{t.sub}</p>
          <div className={styles.heroCta}>
            <a href="#works" className={styles.btnPrimary}>
              {t.cta.works}
            </a>
            <a href="#contact" className={styles.btnGhost}>
              {t.cta.contact}
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <HeroGrid />
          <div className={styles.heroFrameMarks}>
            <FrameMarks />
          </div>
        </div>
      </div>
      <div className={styles.heroScroll}>{t.scroll}</div>
    </section>
  );
}
