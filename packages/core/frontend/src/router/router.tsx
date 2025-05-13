import { createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import { ChatPage } from "../pages/chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
    ],
  },
]);
