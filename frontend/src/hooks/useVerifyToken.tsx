import { useEffect } from "react";
import { useStore } from "zustand";
import { useAppStore } from "@/store/AppSettingsStore";
import { useUserStore } from "@/store/UserStore";
import { verifyToken } from "@/utils/authUtils";

export const useVerifyToken = () => {
  const { setTheme, setLocale } = useStore(useAppStore);
  const { setIsLoggedIn, setDisplayName, setAvatar } = useStore(useUserStore);

  useEffect(() => {
    verifyToken()
      .then((data) => {
        if (data.status) {
          const { displayName, preferences, selectedAvatar } = data.user;
          setIsLoggedIn(true);
          setDisplayName(displayName);
          setTheme(preferences.theme);
          setLocale(preferences.locale);
          setAvatar(selectedAvatar);
        } else {
          console.error("Token verification failed");
        }
      })
      .catch((error) => {
        console.error("Token verification failed:", error);
      });
  }, [setTheme, setLocale, setIsLoggedIn, setDisplayName, setAvatar]);
};
