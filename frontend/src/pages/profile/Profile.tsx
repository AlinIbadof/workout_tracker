import { useUserStore } from "@/store/UserStore";
import { useStore } from "zustand";

const Profile = () => {
  const { displayName } = useStore(useUserStore);
  return <>{displayName} ---- Profile</>;
};

export default Profile;
