import { useChat } from "@/providers/store/chat.store";
import { BasedAvatar } from "@/shared/ui/avatar/avatar-based.ui";
import type { DialogWithInfo } from "@talky/types";
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
  dialog: DialogWithInfo;
}

export const ChatDialogItem = ({ onSelectChat, dialog }: ChatDialogItemProps) => {
  const { selectedChatId } = useChat();
  const mockedUnreadMessageCount = 0;
  const { id, avatarUrl, name, lastMessageContent, updatedAt } = dialog;

  const isChatSelected = selectedChatId === id;
  return (
    <StyledChatDialogItemWrapper $isSelected={isChatSelected} onClick={onSelectChat}>
      <BasedAvatar src={avatarUrl} alt="dialog-avatar" />

      <StyledChatInfoWrapper>
        <StyledChatInfoUserNameText as="p">{name}</StyledChatInfoUserNameText>
        <StyledChatInfoLastMessageText as="p">{lastMessageContent}</StyledChatInfoLastMessageText>
      </StyledChatInfoWrapper>

      <StyledChatAdditionalInfoWrapper>
        <StyledChatAdditionalInfoTime>{updatedAt}</StyledChatAdditionalInfoTime>
        {mockedUnreadMessageCount > 0 && (
          <StyledChatAdditionalUnreadMessageCount>
            {mockedUnreadMessageCount}
          </StyledChatAdditionalUnreadMessageCount>
        )}
      </StyledChatAdditionalInfoWrapper>
    </StyledChatDialogItemWrapper>
  );
};
