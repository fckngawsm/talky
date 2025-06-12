import { type ReactNode } from "react";
import { SessionLayoutWrapper } from "../layouts.styled";

interface SessionLayoutProps {
  children: ReactNode;
}

export const SessionLayout = ({ children }: SessionLayoutProps) => {
  return <SessionLayoutWrapper>{children}</SessionLayoutWrapper>;
};
