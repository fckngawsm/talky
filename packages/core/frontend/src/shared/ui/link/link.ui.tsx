import { IconButton } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { StyledLink } from "./link.styled";

interface CustomLinkProps {
  to: string;
  linkText?: string;
  icon?: ReactNode;
}

export const BasedLink = ({ to, linkText, icon }: CustomLinkProps) => {
  return (
    <StyledLink to={to}>
      {linkText}
      {icon && <IconButton variant="ghost">{icon}</IconButton>}
    </StyledLink>
  );
};
