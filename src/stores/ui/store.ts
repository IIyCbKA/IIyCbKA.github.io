import { create } from "zustand";
import { UiState } from "./types";

export const useUiStore = create<UiState>((set) => ({
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
}));
