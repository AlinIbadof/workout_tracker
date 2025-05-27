import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
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
    <>
      <HeaderMobile />
      <Container
        disableGutters
        sx={{
          backgroundColor: theme === "light" ? "#fff" : "#121212",
          color: theme === "light" ? "#333" : "#ccc",
          paddingTop: "55px",
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
        {isLoggedIn && <BottomNav />}
      </Container>
    </>
  );
}

export default LayoutMobile;
