import type { ReactNode } from "react";
import { StyledAvatarFallback, StyledAvatarImage, StyledAvatarRoot } from "./avatar.styled";

interface BasedAvatarProps {
  alt: string;
  src: string;
  delayMs?: number;
  fallbackContent?: ReactNode;
}

export const BasedAvatar = ({
  delayMs = 600,
  alt,
  src,
  fallbackContent = "",
}: BasedAvatarProps) => {
  return (
    <StyledAvatarRoot>
      <StyledAvatarImage src={src} alt={alt} />
      <StyledAvatarFallback delayMs={delayMs}>{fallbackContent}</StyledAvatarFallback>
    </StyledAvatarRoot>
  );
};
