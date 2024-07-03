import { createStore } from "zustand";

type UserStoreType = {
  isLoggedIn: boolean;
  displayName: string;
  setIsLoggedIn: (status: boolean) => void;
  setDisplayName: (name: string) => void;
  resetDefaultUserValues: () => void;
};

export const useUserStore = createStore<UserStoreType>((set) => ({
  isLoggedIn: false,
  displayName: "",
  setIsLoggedIn: (status: boolean) =>
    set(() => ({
      isLoggedIn: status,
    })),
  setDisplayName: (name: string) =>
    set(() => ({
      displayName: name,
    })),
  resetDefaultUserValues: () =>
    set(() => ({
      isLoggedIn: false,
      displayName: "",
    })),
}));
