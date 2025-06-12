import { type ReactNode } from "react";
import { ProfileLayoutWrapper } from "../layouts.styled";

interface ProfileLayoutProps {
  children: ReactNode;
}

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return <ProfileLayoutWrapper>{children}</ProfileLayoutWrapper>;
};
