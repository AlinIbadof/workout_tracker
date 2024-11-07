import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useStore } from "zustand";
import { useAppStore } from "@/store/AppSettingsStore";
import { useVerifyToken } from "@/hooks/useVerifyToken";
import { useUserStore } from "@/store/UserStore";
import BottomNav from "./BottomNav";
import HeaderMobile from "./HeaderMobile";

function LayoutMobile() {
  const { theme } = useStore(useAppStore);
  const { isLoggedIn } = useStore(useUserStore);

  useVerifyToken();

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <HeaderMobile />
      <Box
        component="main"
        sx={{
          flex: 1,
          backgroundColor: theme === "light" ? "#fff" : "#121212",
          color: theme === "light" ? "#333" : "#ccc",
          paddingTop: '60px',
        }}
      >
        <Outlet />
        {isLoggedIn && <BottomNav />}
      </Box>
    </Box>
  );
}

export default LayoutMobile;
