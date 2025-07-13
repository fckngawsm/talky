import { useChat } from "@/providers/store/chat.store";
import { BasedAvatar } from "@/shared/ui/avatar/avatar-based.ui";
import type { Dialog } from "@talky/types";
import {
  StyledChatAdditionalInfoTime,
  StyledChatAdditionalInfoWrapper,
  StyledChatAdditionalUnreadMessageCount,
  StyledChatDialogItemWrapper,
  StyledChatInfoLastMessageText,
  StyledChatInfoUserNameText,
  StyledChatInfoWrapper,
} from "./chat-dialog-item.styled";

interface ChatDialogItemProps {
  onSelectChat: () => void;
  dialog: Dialog;
}

export const ChatDialogItem = ({ onSelectChat, dialog }: ChatDialogItemProps) => {
  const { selectedChatId } = useChat();
  const { id, avatarAlt, avatarUrl, name, lastMessage, lastMessageTime, unreadMessageCount } =
    dialog;

  const isChatSelected = selectedChatId === id;
  return (
    <StyledChatDialogItemWrapper $isSelected={isChatSelected} onClick={onSelectChat}>
      <BasedAvatar src={avatarUrl} alt={avatarAlt} />

      <StyledChatInfoWrapper>
        <StyledChatInfoUserNameText as="p">{name}</StyledChatInfoUserNameText>
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
