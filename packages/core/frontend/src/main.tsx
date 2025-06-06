import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./providers/router/router.config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routerConfig} />
  </StrictMode>,
);
