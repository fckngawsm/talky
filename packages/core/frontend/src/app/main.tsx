import "@radix-ui/themes/layout/components.css";
import "@radix-ui/themes/layout/tokens.css";
import "@radix-ui/themes/layout/utilities.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./base/normalize.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
