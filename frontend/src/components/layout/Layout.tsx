import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";
import { useStore } from "zustand";
import { useAppStore } from "@/store/AppSettingsStore";
import { useVerifyToken } from "@/hooks/useVerifyToken";

function Layout() {
  const { theme } = useStore(useAppStore);
  useVerifyToken();

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          backgroundColor: theme === "light" ? "#fff" : "#121212",
          color: theme === "light" ? "#333" : "#ccc",
          paddingTop: '70px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
