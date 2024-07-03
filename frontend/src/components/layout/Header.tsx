import { Link } from "react-router-dom";

import { useAppStore } from "@/store/AppSettingsStore";
import { useUserStore } from "@/store/UserStore";
import { useStore } from "zustand";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

function Header() {
  const { theme, toggleTheme, resetDefaultAppValues } = useStore(useAppStore);
  const themeColors = useTheme();
  const { isLoggedIn, displayName, resetDefaultUserValues } =
    useStore(useUserStore);

  const handleLogout = () => {
    resetDefaultUserValues();
    resetDefaultAppValues();
    sessionStorage.removeItem("token");
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: themeColors.header.backgroundColor,
        color: themeColors.header.color,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Workout Tracker</Link>
        </Typography>

        <Box gap={2} sx={{ display: "flex", alignItems: "center" }}>
          {!isLoggedIn && (
            <Button variant="contained">
              <Link to="/auth">Log in</Link>
            </Button>
          )}
          {isLoggedIn && (
            <>
              <Typography component="div">{displayName}</Typography>

              <Button variant="contained" onClick={handleLogout}>
                Log out
              </Button>

              <Button variant="contained">
                <Link to={`${displayName}/settings`}>Settings</Link>
              </Button>
            </>
          )}
          <Button
            variant="contained"
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === "light" ? <DarkMode /> : <LightMode />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
