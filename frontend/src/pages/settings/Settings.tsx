import { useUserStore } from "@/store/UserStore";
import { useStore } from "zustand";

const Settings = () => {
  const { displayName } = useStore(useUserStore);
  return <>{displayName} ---- Settings</>;
};

export default Settings;
