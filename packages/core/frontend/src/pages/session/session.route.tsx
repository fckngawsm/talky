import { SessionLoginWidget } from "@/widgets/session/session-login.widget";
import { SessionRootPage } from "./session.ui";

export const sessionRoute = {
  path: "/",
  element: <SessionRootPage />,
  children: [
    {
      index: true,
      path: "login",
      element: <SessionLoginWidget />,
    },
  ],
};
