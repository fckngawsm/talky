import { createBrowserRouter } from "react-router-dom";
import { chatPageRoute } from "../../pages/chat/chat-page.route";
import { MainLayout } from "../../shared/layouts/main.layout";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [chatPageRoute],
  },
  {
    path: "/chat",
    element: <MainLayout />,
    children: [chatPageRoute],
  },
]);
