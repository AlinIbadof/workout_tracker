import { useUserStore } from "@/store/UserStore";
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useStore } from "zustand";

export default function Auth() {
  const { isLoggedIn } = useStore(useUserStore);

  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <Box display="flex" alignItems="center" sx={{ height: "100%" }}>
      Auth
    </Box>
  );
}
