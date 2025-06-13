import { SessionLoginWidget } from "@/widgets/session/session-login.widget";
import { SessionRegisterWidget } from "@/widgets/session/session-register.widget";
import { SessionRootPage } from "./session.ui";

export const sessionRoute = {
  path: "/",
  element: <SessionRootPage />,
  children: [
    {
      index: true,
      path: "sign-in",
      element: <SessionLoginWidget />,
    },
    {
      path: "sign-up",
      element: <SessionRegisterWidget />,
    },
  ],
};
