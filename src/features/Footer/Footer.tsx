import React from "react";
import styles from "./styles.module.scss";
import { AUTHOR, VERSION } from "./constants";

export default function Footer(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <span>
          © {year} {AUTHOR}
        </span>
        <span className={styles.version}>v{VERSION}</span>
      </div>
    </footer>
  );
}
