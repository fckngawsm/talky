import { Avatar } from "radix-ui";
import styled from "styled-components";

export const StyledAvatarRoot = styled(Avatar.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 34px;
  height: 34px;
  border-radius: 100%;
  background-color: var(--black-a3);
`;

export const StyledAvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const StyledAvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--violet-11);
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
`;
