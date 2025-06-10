import type { Dialog } from "@/entities/chat/model/chat.types";
import { useChat } from "@/providers/store/chat.store";
import { BasedAvatar } from "@/shared/ui/avatar/avatar-based.ui";
import {
  StyledChatAdditionalInfoTime,
  StyledChatAdditionalInfoWrapper,
  StyledChatAdditionalUnreadMessageCount,
  StyledChatDialogItemWrapper,
  StyledChatInfoLastMessageText,
  StyledChatInfoUserNameText,
  StyledChatInfoWrapper,
} from "./chat-dialog-item.styled";

interface ChatDialogItemProps extends Dialog {
  onSelectChat: () => void;
}

export const ChatDialogItem = ({
  id,
  avatarAlt,
  avatarUrl,
  userName,
  lastMessage,
  unreadMessageCount,
  lastMessageTime,
  onSelectChat,
}: ChatDialogItemProps) => {
  const { selectedChat } = useChat();

  const isChatSelected = selectedChat?.id === id;

  return (
    <StyledChatDialogItemWrapper $isSelected={isChatSelected} onClick={onSelectChat}>
      <BasedAvatar src={avatarUrl} alt={avatarAlt} />

      <StyledChatInfoWrapper>
        <StyledChatInfoUserNameText as="p">{userName}</StyledChatInfoUserNameText>
        <StyledChatInfoLastMessageText as="p">{lastMessage}</StyledChatInfoLastMessageText>
      </StyledChatInfoWrapper>

      <StyledChatAdditionalInfoWrapper>
        <StyledChatAdditionalInfoTime>{lastMessageTime}</StyledChatAdditionalInfoTime>
        {unreadMessageCount && (
          <StyledChatAdditionalUnreadMessageCount>
            {unreadMessageCount}
          </StyledChatAdditionalUnreadMessageCount>
        )}
      </StyledChatAdditionalInfoWrapper>
    </StyledChatDialogItemWrapper>
  );
};
