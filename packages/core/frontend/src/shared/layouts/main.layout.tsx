import { Outlet } from "react-router-dom";
import { RadixWrapper } from "../../app/RadixWrapper";
import { MainLayoutWrapper } from "./layouts.styled";

export const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <RadixWrapper>
        <Outlet />
      </RadixWrapper>
    </MainLayoutWrapper>
  );
};
