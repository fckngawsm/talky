import { SessionLayout } from "@/shared/layouts/session/session.layout";
import { Outlet } from "react-router-dom";

export const SessionRootPage = () => {
  // Проверка на то что у пользователя есть cookie -> redirect to '/chat'
  return (
    <SessionLayout>
      <Outlet />
    </SessionLayout>
  );
};
