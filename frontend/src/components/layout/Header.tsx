import { Link } from "react-router-dom";

import { useAppStore } from "@/store/AppSettingsStore";
import { useUserStore } from "@/store/UserStore";
import { useStore } from "zustand";

import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkMode, LightMode, PowerSettingsNew } from "@mui/icons-material";
import { handleLogout } from '../../utils/authUtils';

function Header() {
  const { theme, toggleTheme, resetDefaultAppValues } = useStore(useAppStore);
  const themeColors = useTheme();
  const { isLoggedIn, displayName, resetDefaultUserValues } =
    useStore(useUserStore);

  const onClickLogout = () => {
    resetDefaultUserValues();
    resetDefaultAppValues();
    handleLogout();
  };

  return (
    <AppBar
      sx={{
        bgcolor: themeColors.header.backgroundColor,
        color: themeColors.header.color,
      }}
    >
      <Toolbar> 
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">Workout Tracker</Link>
        </Typography>

        <Stack direction="row" spacing={2} height={30}>
          {!isLoggedIn && (
            <Button variant="contained" component={Link} to="/auth">
              Log in
            </Button>
          )}
          {isLoggedIn && (
            <>
              <Stack direction="row">
                <div>♥</div>
                <Typography
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {displayName}
                </Typography>
              </Stack>

              <Button
                variant="contained"
                component={Link}
                to={`${displayName}/profile`}
                size="small"
              >
                Profile
              </Button>

              <Button
                variant="contained"
                component={Link}
                to={`${displayName}/history`}
                size="small"
              >
                History
              </Button>

              <Button
                variant="contained"
                component={Link}
                to={`/workout`}
                size="small"
              >
                Workout
              </Button>

              <Button
                variant="contained"
                component={Link}
                to={`/exercises`}
                size="small"
              >
                Exercises
              </Button>

              <Button variant="contained" onClick={onClickLogout} size="small">
                <PowerSettingsNew />
              </Button>
            </>
          )}
          <Button
            variant="contained"
            onClick={() => {
              toggleTheme();
            }}
            size="small"
          >
            {theme === "light" ? <DarkMode /> : <LightMode />}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
