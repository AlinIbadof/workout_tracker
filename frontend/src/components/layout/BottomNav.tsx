import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import {
  Add,
  FitnessCenter,
  History,
  Person,
  Settings,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { useUserStore } from "@/store/UserStore";

type BottomNavRoutes =
  | "profile"
  | "workout"
  | "history"
  | "exercises"
  | "settings";

const BottomNav = () => {
  const [value, setValue] = useState<BottomNavRoutes>("workout");
  const navigate = useNavigate();
  const location = useLocation();
  const { displayName } = useStore(useUserStore);

  useEffect(() => {
    const path = location.pathname.startsWith("/user")
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[1];

    if (
      ["profile", "history", "settings", "workout", "exercises"].includes(path)
    ) {
      setValue(path as BottomNavRoutes);
    }
  }, [location]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
          const userRoutes: BottomNavRoutes[] = [
            "profile",
            "history",
            "settings",
          ];

          if (userRoutes.includes(newValue)) {
            navigate(`${displayName}/${newValue}`);
          } else {
            navigate(`/${newValue}`);
          }
        }}
      >
        <BottomNavigationAction
          label="Profile"
          icon={<Person />}
          value={"profile"}
        />
        <BottomNavigationAction
          label="Exercises"
          icon={<FitnessCenter />}
          value={"exercises"}
        />
        <BottomNavigationAction
          label="Workout"
          icon={<Add />}
          value={"workout"}
        />
        <BottomNavigationAction
          label="History"
          icon={<History />}
          value={"history"}
        />
        <BottomNavigationAction
          label="Settings"
          icon={<Settings />}
          value={"settings"}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
