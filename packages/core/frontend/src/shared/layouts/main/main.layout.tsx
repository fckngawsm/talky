import { RadixWrapper } from "@/app/RadixWrapper";
import { useAuth } from "@/entities/session/session.hook";
import { Outlet } from "react-router-dom";
import { MainLayoutWrapper } from "../layouts.styled";

export const MainLayout = () => {
  useAuth();
  return (
    <MainLayoutWrapper>
      <RadixWrapper>
        <Outlet />
      </RadixWrapper>
    </MainLayoutWrapper>
  );
};
