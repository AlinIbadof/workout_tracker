import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "@mui/material";
import { useStore } from "zustand";
import { useAppStore } from "./store/AppSettingsStore";
import { darkTheme, lightTheme } from "./theme/themes";
import { useUserStore } from "./store/UserStore";
import useWindowSize from "./hooks/useWindowSize";

import LayoutMobile from "./components/layout/LayoutMobile";
import { Workout } from "./pages/workout";
import { Auth } from "./pages/auth";
import { Landing } from "./pages/landing";
import { Exercises } from "./pages/exercises";
import { Profile } from "./pages/profile";
import { History } from "./pages/history";
import { Settings } from "./pages/settings";

const AppRouter = () => {
  const { isLoggedIn } = useStore(useUserStore);
  const { isMobile } = useWindowSize();

  const router = createBrowserRouter([
    {
      element: isMobile ? <LayoutMobile /> : <Layout />,
      children: [
        { path: "/", element: isLoggedIn ? <Workout /> : <Landing /> },
        {
          path: "/auth",
          element: !isLoggedIn ? <Auth /> : <Navigate to="/workout" />,
        },
        {
          path: "/workout",
          element: !isLoggedIn ? <Navigate to="/" /> : <Workout />,
        },
        {
          path: "/exercises",
          element: !isLoggedIn ? <Navigate to="/" /> : <Exercises />,
        },
        { path: "*", element: <div>404</div>, errorElement: <div>404</div> },

        {
          element: <ProtectedRoute />,
          children: [
            { path: "/route1", element: <p>route1 if authenticated</p> },
            { path: ":username/settings", element: <Settings /> },
            { path: ":username/profile", element: <Profile /> },
            { path: ":username/history", element: <History /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

const App = () => {
  const { theme } = useStore(useAppStore);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <AppRouter />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
