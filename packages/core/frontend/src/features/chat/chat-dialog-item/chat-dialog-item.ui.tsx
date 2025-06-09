import type { Dialog } from "@/entities/chat/model/chat.types";
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

interface ChatDialogItemProps extends Omit<Dialog, "id"> {}

export const ChatDialogItem = ({
  avatarAlt,
  avatarUrl,
  userName,
  lastMessage,
  unreadMessageCount,
  lastMessageTime,
}: ChatDialogItemProps) => {
  return (
    <StyledChatDialogItemWrapper $isSelected>
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
