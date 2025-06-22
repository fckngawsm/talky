import { BasedLink } from "@/shared/ui/link/link.ui";
import { StyledSessionButton } from "../session.styled";
import { StyledSessionGroupButton } from "./session-group-buttons.styled";

interface SessionGroupButtonProps {
  linkText?: string;
  linkTo?: string;
  buttonText: string;
}

export const SessionGroupButton = ({ linkText, buttonText, linkTo }: SessionGroupButtonProps) => {
  return (
    <StyledSessionGroupButton>
      <StyledSessionButton buttonProps={{ size: "3", variant: "solid", radius: "medium" }}>
        {buttonText}
      </StyledSessionButton>
      {linkText && linkTo && <BasedLink to={linkTo} linkText={linkText} />}
    </StyledSessionGroupButton>
  );
};
