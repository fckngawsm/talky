import { StyledSessionForm, StyledSessionFormWrapper } from "@/features/session/session.styled";
import type { ReactNode } from "react";

interface SessionRootProps {
  children: ReactNode;
  buttonGroup?: ReactNode;
  onSubmit: () => void;
}

export const SessionRoot = ({ onSubmit, children, buttonGroup }: SessionRootProps) => {
  return (
    <StyledSessionForm>
      <StyledSessionFormWrapper onSubmit={onSubmit}>
        {children}
        {buttonGroup}
      </StyledSessionFormWrapper>
    </StyledSessionForm>
  );
};
