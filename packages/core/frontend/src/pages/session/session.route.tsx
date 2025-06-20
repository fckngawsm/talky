import { SessionConfirmPhoneWidget } from "@/widgets/session/session-confirm-phone.widget";
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
    {
      path: "confirm-phone",
      element: <SessionConfirmPhoneWidget />,
    },
  ],
};
