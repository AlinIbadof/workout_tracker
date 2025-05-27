import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "@mui/material";
import { useStore } from "zustand";
import { useAppStore } from "@/store/AppSettingsStore";
import { useVerifyToken } from "@/hooks/useVerifyToken";

function Layout() {
  const { theme } = useStore(useAppStore);
  useVerifyToken();

  return (
    <>
      <Header />
      <Container
        disableGutters
        sx={{
          backgroundColor: theme === "light" ? "#fff" : "#121212",
          color: theme === "light" ? "#333" : "#ccc",
          paddingTop: "65px",
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
