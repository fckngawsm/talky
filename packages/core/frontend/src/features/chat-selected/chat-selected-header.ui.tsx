import * as Avatar from "@radix-ui/react-avatar";
import {
  StyledChatHeaderContentWrapper,
  StyledChatHeaderTitle,
  StyledChatHeaderWrapper,
} from "./chat-selected.styled";

interface ChatSelectedHeaderProps {
  avatarSrc: string;
}

export const ChatSelectedHeader = ({ avatarSrc }: ChatSelectedHeaderProps) => {
  return (
    <StyledChatHeaderWrapper>
      <StyledChatHeaderContentWrapper>
        <Avatar.Root>
          <Avatar.Image src={avatarSrc} alt="User Avatar" />
          <Avatar.Fallback>AV</Avatar.Fallback>
        </Avatar.Root>
        <StyledChatHeaderTitle>32131</StyledChatHeaderTitle>
      </StyledChatHeaderContentWrapper>
    </StyledChatHeaderWrapper>
  );
};
