import { StyledSessionForm, StyledSessionFormWrapper } from "@/features/session/session.styled";
import type { ReactNode } from "react";

interface SessionRootProps {
  children: ReactNode;
  buttonGroup?: ReactNode;
  onSubmit: () => void;
}

export const SessionRoot = ({ onSubmit, children, buttonGroup }: SessionRootProps) => {
  return (
    <StyledSessionForm onSubmit={onSubmit}>
      <StyledSessionFormWrapper>
        {children}
        {buttonGroup}
      </StyledSessionFormWrapper>
    </StyledSessionForm>
  );
};
