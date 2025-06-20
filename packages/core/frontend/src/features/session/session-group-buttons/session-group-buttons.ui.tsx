import { BasedButton } from "@/shared/ui/button/button.ui";
import { BasedLink } from "@/shared/ui/link/link.ui";
import { StyledSessionGroupButton } from "./session-group-buttons.styled";

interface SessionGroupButtonProps {
  linkText?: string;
  linkTo?: string;
  buttonText: string;
}

export const SessionGroupButton = ({ linkText, buttonText, linkTo }: SessionGroupButtonProps) => {
  return (
    <StyledSessionGroupButton>
      <BasedButton buttonProps={{ size: "2", variant: "solid", radius: "medium" }}>
        {buttonText}
      </BasedButton>
      {linkText && linkTo && <BasedLink to={linkTo} linkText={linkText} />}
    </StyledSessionGroupButton>
  );
};
