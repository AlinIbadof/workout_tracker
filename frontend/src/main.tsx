import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Settings from "./pages/settings/Settings";
import { ThemeProvider } from "@mui/material";
import { useStore } from "zustand";
import { useAppStore } from "./store/AppSettingsStore";
import { darkTheme, lightTheme } from "./theme/themes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/auth", element: <Auth /> },
      { path: "*", element: <div>404</div>, errorElement: <div>404</div> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "/route1", element: <p>route1 if authenticated</p> },
          { path: ":username/settings", element: <Settings /> },
        ],
      },
    ],
  },
]);

const App = () => {
  const { theme } = useStore(useAppStore);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
