export type Language = "ru" | "en";
export type Theme = "light" | "dark";

export type PreferencesState = {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
};
