import { createStore } from "zustand";

type AppStoreType = {
  theme: string;
  locale: string;
  toggleTheme: () => void;
  toggleLocale: () => void;
  setTheme: (theme: string) => void;
  setLocale: (locale: string) => void;
  resetDefaultAppValues: () => void;
};

export const useAppStore = createStore<AppStoreType>((set) => ({
  theme: "light",
  locale: "en",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  toggleLocale: () =>
    set((state) => ({
      locale: state.locale === "EN" ? "RO" : "EN",
    })),
  setTheme: (theme: string) =>
    set(() => ({
      theme: theme,
    })),
  setLocale: (locale: string) =>
    set(() => ({
      locale: locale,
    })),
  resetDefaultAppValues: () =>
    set(() => ({
      theme: "light",
      locale: "en",
    })),
}));
