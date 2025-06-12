import { RadixWrapper } from "@/app/RadixWrapper";
import { Outlet } from "react-router-dom";
import { MainLayoutWrapper } from "../layouts.styled";

export const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <RadixWrapper>
        <Outlet />
      </RadixWrapper>
    </MainLayoutWrapper>
  );
};
