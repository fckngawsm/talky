import { useChat } from "@/providers/store/chat.store";
import * as Avatar from "@radix-ui/react-avatar";
import {
  StyledChatHeaderContentWrapper,
  StyledChatHeaderTitle,
  StyledChatHeaderWrapper,
} from "./chat-selected.styled";

export const ChatSelectedHeader = () => {
  const { selectedChat } = useChat();
  console.log(selectedChat, "selectedChat");
  if (!selectedChat) return null;
  return (
    <StyledChatHeaderWrapper>
      <StyledChatHeaderContentWrapper>
        <Avatar.Root>
          <Avatar.Image width="30px" height="30px" src={selectedChat.avatarUrl} alt="User Avatar" />
          <Avatar.Fallback>AV</Avatar.Fallback>
        </Avatar.Root>
        <StyledChatHeaderTitle>32131</StyledChatHeaderTitle>
      </StyledChatHeaderContentWrapper>
    </StyledChatHeaderWrapper>
  );
};
