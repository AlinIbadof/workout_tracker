import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f7f7f7",
    },
  },
  header: {
    backgroundColor: "#1976d2",
    color: "#ffffff",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1e88e5",
      contrastText: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  header: {
    backgroundColor: "#1e1e1e",
    color: "#90caf9",
  },
});
