import { IconButton } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: 500;
  line-height: 1;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  align-self: flex-end;
  color: #3e63dd;
  cursor: pointer;
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
