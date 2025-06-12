import {
  StyledSessionForm,
  StyledSessionFormTitle,
  StyledSessionFormWrapper,
} from "@/features/session/session.styled";
import type { ReactNode } from "react";

interface SessionRootProps {
  formTitle: string;
  children: ReactNode;
  buttonGroup?: ReactNode;
  onSubmit: () => void;
}

export const SessionRoot = ({ onSubmit, formTitle, children, buttonGroup }: SessionRootProps) => {
  return (
    <StyledSessionForm>
      <StyledSessionFormWrapper onSubmit={onSubmit}>
        <StyledSessionFormTitle>{formTitle}</StyledSessionFormTitle>
        {children}
      </StyledSessionFormWrapper>
      {buttonGroup}
    </StyledSessionForm>
  );
};
