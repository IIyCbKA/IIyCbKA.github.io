import React from "react";
import styles from "./styles.module.scss";
import { getHeaderI18n } from "./i18n";
import { HEADER_SCROLL_THRESHOLD, LOGO_MARK, LOGO_TITLE } from "./constants";
import { Moon, Sun } from "@/assets/icons";
import { usePreferencesStore, useUiStore } from "@/stores";
import { clsx } from "clsx";

export default function Header(): React.ReactElement {
  const [isOpenNav, setOpenNav] = React.useState<boolean>(false);
  const toggleNav = () => setOpenNav((prev) => !prev);
  const closeNav = () => setOpenNav(false);

  const language = usePreferencesStore((s) => s.language);
  const setLanguage = usePreferencesStore((s) => s.setLanguage);

  const theme = usePreferencesStore((s) => s.theme);
  const setTheme = usePreferencesStore((s) => s.setTheme);

  const scrollY = useUiStore((s) => s.scrollY);

  const t = getHeaderI18n(language);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const ThemeIcon = theme === "dark" ? Moon : Sun;

  return (
    <header
      className={clsx(styles.siteHeader, {
        [styles.isScrolled]: scrollY > HEADER_SCROLL_THRESHOLD,
      })}
    >
      <div className={styles.headerInner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMark}>{LOGO_MARK}</span>
          <span>{LOGO_TITLE}</span>
        </a>
        <nav className={clsx(styles.nav, { [styles.isOpen]: isOpenNav })}>
          <a href="#about" onClick={closeNav}>
            {t.nav.about}
          </a>
          <a href="#stack" onClick={closeNav}>
            {t.nav.stack}
          </a>
          <a href="#works" onClick={closeNav}>
            {t.nav.works}
          </a>
          <a href="#achievements" onClick={closeNav}>
            {t.nav.achievements}
          </a>
          <a href="#experience" onClick={closeNav}>
            {t.nav.experience}
          </a>
          <a href="#contact" onClick={closeNav}>
            {t.nav.contact}
          </a>
        </nav>
        <div className={styles.headerActions}>
          <div
            className={styles.langToggle}
            role="group"
            aria-label={t.aria.langToggle}
          >
            <button
              className={clsx(styles.langOpt, {
                [styles.active]: language === "ru",
              })}
              onClick={() => setLanguage("ru")}
            >
              {t.language.ru}
            </button>
            <button
              className={clsx(styles.langOpt, {
                [styles.active]: language === "en",
              })}
              onClick={() => setLanguage("en")}
            >
              {t.language.en}
            </button>
          </div>
          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={t.aria.themeToggle}
          >
            <ThemeIcon className={styles.icon} />
          </button>
          <button
            onClick={toggleNav}
            className={clsx(styles.menuToggle, {
              [styles.isOpen]: isOpenNav,
            })}
            aria-label={t.aria.menuToggle}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
