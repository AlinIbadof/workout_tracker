import { useUserStore } from "@/store/UserStore";
import { useStore } from "zustand";

const History = () => {
  const { displayName } = useStore(useUserStore);
  return <>{displayName} ---- History</>;
};

export default History;
