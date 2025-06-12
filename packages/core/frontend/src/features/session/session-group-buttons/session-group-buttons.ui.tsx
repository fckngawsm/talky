import { BasedButton } from "@/shared/ui/button/button.ui";
import { BasedLink } from "@/shared/ui/link/link.ui";
import { StyledSessionGroupButton } from "./session-group-buttons.styled";

interface SessionGroupButtonProps {
  linkText: string;
  buttonText: string;
}

export const SessionGroupButton = ({ linkText, buttonText }: SessionGroupButtonProps) => {
  return (
    <StyledSessionGroupButton>
      <BasedButton buttonProps={{ size: "2" }}>{buttonText}</BasedButton>
      <BasedLink to="sign-up" linkText={linkText} />
    </StyledSessionGroupButton>
  );
};
