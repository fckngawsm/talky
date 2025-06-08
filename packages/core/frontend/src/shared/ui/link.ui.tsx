import { IconButton } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
`;

interface CustomLinkProps {
  to: string;
  linkText?: string;
  icon?: ReactNode;
}

export const CustomLink = ({ to, linkText, icon }: CustomLinkProps) => {
  return (
    <StyledLink to={to}>
      {linkText}
      <IconButton>{icon}</IconButton>
    </StyledLink>
  );
};
