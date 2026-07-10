import React from "react";
import styles from "./styles.module.scss";
import { getStackI18n } from "./i18n";
import { CODE_FILENAME, SIGNATURE } from "./constants";
import { STACK } from "./data";
import shared from "@/shared/common.module.scss";
import { usePreferencesStore } from "@/stores";
import { Reveal } from "@/components";
import { clsx } from "clsx";

export default function Stack(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);

  const t = getStackI18n(language);

  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(SIGNATURE);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1400);
    } catch {}
  };

  return (
    <Reveal as={"section"} className={shared.section} id={"stack"}>
      <div className={shared.sectionHead}>
        <span className={shared.sectionLabel}>{t.label}</span>
        <h2 className={shared.sectionHeadline}>{t.headline}</h2>
      </div>
      <div className={styles.stackGrid}>
        {STACK.map((section) => (
          <div key={section.id} className={styles.stackCol}>
            <h3>{t.sections[section.id]}</h3>
            <ul className={styles.stackList}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.codeBlock}>
        <div className={styles.codeHead}>
          <span className={styles.codeLang}>{CODE_FILENAME}</span>
          <button
            className={clsx(styles.copyBtn, { [styles.flashed]: copied })}
            onClick={handleCopy}
          >
            <span className={styles.copyLabel}>{t.copy}</span>
            <span className={styles.copiedLabel}>{t.copied}</span>
          </button>
        </div>
        <pre>
          <code>{SIGNATURE}</code>
        </pre>
      </div>
    </Reveal>
  );
}
