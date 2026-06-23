import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Language, Theme, PreferencesState } from "./types";
import {
  animateThemeTransition,
  getBrowserLanguage,
  getBrowserTheme,
} from "./utils";

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      language: getBrowserLanguage(),
      theme: getBrowserTheme(),
      setLanguage: (language: Language) => set({ language }),
      setTheme: (theme: Theme) => {
        animateThemeTransition();
        set({ theme });
      },
    }),
    {
      name: "settings",
    },
  ),
);
