import { Link } from "react-router-dom";
import { useUserStore } from "@/store/UserStore";
import { useStore } from "zustand";
import { AppBar, Toolbar, Button, Typography, useTheme } from "@mui/material";

function HeaderMobile() {
  const themeColors = useTheme();
  const { isLoggedIn } = useStore(useUserStore);

  return (
    <AppBar
      sx={{
        bgcolor: themeColors.header.backgroundColor,
        color: themeColors.header.color,
        alignItems: isLoggedIn ? "center" : "between",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {isLoggedIn ? (
            <Link to="/workout">Workout Tracker</Link>
          ) : (
            <Link to="/">Workout Tracker</Link>
          )}
        </Typography>

        {!isLoggedIn && (
          <Button variant="contained" component={Link} to="/auth">
            Log in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default HeaderMobile;
