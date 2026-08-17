import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";

// fontsourses
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import AppProviders from "./app/providers/AppProviders.tsx";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
