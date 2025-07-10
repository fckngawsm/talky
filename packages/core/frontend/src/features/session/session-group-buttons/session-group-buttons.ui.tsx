import { BasedLink } from "@/shared/ui/link/link.ui";
import { StyledSessionBasedButton } from "../session.styled";
import { StyledSessionGroupButton } from "./session-group-buttons.styled";

interface SessionGroupButtonProps {
  linkText?: string;
  linkTo?: string;
  buttonText: string;
}

export const SessionGroupButton = ({ linkText, buttonText, linkTo }: SessionGroupButtonProps) => {
  return (
    <StyledSessionGroupButton>
      <StyledSessionBasedButton buttonProps={{ size: "3", variant: "solid", radius: "medium" }}>
        {buttonText}
      </StyledSessionBasedButton>
      {linkText && linkTo && <BasedLink to={linkTo} linkText={linkText} />}
    </StyledSessionGroupButton>
  );
};
