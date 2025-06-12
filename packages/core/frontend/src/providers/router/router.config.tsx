import { profilePageRoute } from "@/pages/profile/profile.route";
import { MainLayout } from "@/shared/layouts/main/main.layout";
import { createBrowserRouter } from "react-router-dom";
import { chatPageRoute } from "../../pages/chat/chat-page.route";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [chatPageRoute, profilePageRoute],
  },
  {
    path: "/chat",
    element: <MainLayout />,
    children: [chatPageRoute],
  },
]);
