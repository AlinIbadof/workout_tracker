import { useUserStore } from "@/store/UserStore";
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "zustand";

export default function ProtectedRoute() {
  const { isLoggedIn } = useStore(useUserStore);

  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />;
}
