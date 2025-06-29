import { RadixWrapper } from "@/app/RadixWrapper";
import { useAuth } from "@/entities/session/session.hook";
// import { ErrorBoundary } from "@highlight-run/react";
import { Outlet } from "react-router-dom";
// import "../../../providers/logger/highlight-run";
import { MainLayoutWrapper } from "../layouts.styled";

export const MainLayout = () => {
  useAuth();
  return (
    // <ErrorBoundary>
    <MainLayoutWrapper>
      <RadixWrapper>
        <Outlet />
      </RadixWrapper>
    </MainLayoutWrapper>
    // </ErrorBoundary>
  );
};
