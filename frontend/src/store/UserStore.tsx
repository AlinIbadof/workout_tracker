import { createStore } from "zustand";

type UserStoreType = {
  isLoggedIn: boolean;
  displayName: string;
  avatar: string;
  setIsLoggedIn: (status: boolean) => void;
  setDisplayName: (name: string) => void;
  resetDefaultUserValues: () => void;
  setAvatar: (avatar: string) => void;
};

export const useUserStore = createStore<UserStoreType>((set) => ({
  isLoggedIn: false,
  displayName: "",
  avatar: "",
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
  setAvatar: (avatar: string) =>
    set(() => ({
      avatar: avatar,
    })),
}));
