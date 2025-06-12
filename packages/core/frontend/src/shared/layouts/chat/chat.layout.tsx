import { type ReactNode } from "react";
import { ChatLayoutWrapper } from "../layouts.styled";

interface ChatLayoutProps {
  children: ReactNode;
}

export const ChatLayout = ({ children }: ChatLayoutProps) => {
  return <ChatLayoutWrapper maxWidth="100%">{children}</ChatLayoutWrapper>;
};
