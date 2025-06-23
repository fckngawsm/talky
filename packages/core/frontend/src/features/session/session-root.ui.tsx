import {
  StyledSessionForm,
  StyledSessionFormTitle,
  StyledSessionFormWrapper,
} from "@/features/session/session.styled";
import type { ReactNode } from "react";

interface SessionRootProps {
  children: ReactNode;
  title: ReactNode;
  buttonGroup?: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SessionRoot = ({ onSubmit, children, title, buttonGroup }: SessionRootProps) => {
  return (
    <StyledSessionForm onSubmit={onSubmit}>
      <StyledSessionFormTitle>{title}</StyledSessionFormTitle>
      <StyledSessionFormWrapper>
        {children}
        {buttonGroup}
      </StyledSessionFormWrapper>
    </StyledSessionForm>
  );
};
