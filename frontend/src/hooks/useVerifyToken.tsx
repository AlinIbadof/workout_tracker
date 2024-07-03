import { useEffect } from "react";
import { useStore } from "zustand";
import { useAppStore } from "@/store/AppSettingsStore";
import { useUserStore } from "@/store/UserStore";
import { verifyToken } from "@/utils/authUtils";

export const useVerifyToken = () => {
  const { setTheme, setLocale } = useStore(useAppStore);
  const { setIsLoggedIn, setDisplayName } = useStore(useUserStore);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      verifyToken(token)
        .then((data) => {
          if (data.status) {
            const { displayName, preferences } = data.user;
            setIsLoggedIn(true);
            setDisplayName(displayName);
            setTheme(preferences.theme);
            setLocale(preferences.locale);
          } else {
            sessionStorage.removeItem("token");
          }
        })
        .catch((error) => {
          console.error("Token verification failed:", error);
        });
    } else {
      console.error("Token not found in session storage");
    }
  }, [setTheme, setLocale, setIsLoggedIn, setDisplayName]);
};
