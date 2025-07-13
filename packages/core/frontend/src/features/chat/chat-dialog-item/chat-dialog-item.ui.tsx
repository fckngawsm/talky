import { useChatId } from "@/providers/store/chatId.store";
import { BasedAvatar } from "@/shared/ui/avatar/avatar-based.ui";
import { formattedDate } from "@/shared/utils/formattedDate";
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
  const { selectedChatId } = useChatId();
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
        <StyledChatAdditionalInfoTime>{formattedDate(updatedAt)}</StyledChatAdditionalInfoTime>
        {mockedUnreadMessageCount > 0 && (
          <StyledChatAdditionalUnreadMessageCount>
            {mockedUnreadMessageCount}
          </StyledChatAdditionalUnreadMessageCount>
        )}
      </StyledChatAdditionalInfoWrapper>
    </StyledChatDialogItemWrapper>
  );
};
