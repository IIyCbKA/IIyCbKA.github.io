import { Language, Theme } from "./types";

let themeTimer: number | undefined;

export function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const lang = navigator.language.toLowerCase();

  if (lang.startsWith("en")) return "en";
  if (lang.startsWith("ru")) return "ru";

  return "en";
}

export function getBrowserTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function animateThemeTransition() {
  if (typeof document === "undefined") return;

  document.body.classList.add("themeTransitioning");

  if (themeTimer) {
    window.clearTimeout(themeTimer);
  }

  themeTimer = window.setTimeout(() => {
    document.body.classList.remove("themeTransitioning");
  }, 700);
}
