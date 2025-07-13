import { BasedAvatar } from "@/shared/ui/avatar/avatar-based.ui";
import type { User } from "@talky/types";
import {
  StyledChatInfoUserNameText,
  StyledChatInfoWrapper,
  StyledDialogUserItemWrapper,
} from "../chat-dialog-item/chat-dialog-item.styled";

interface ChatDialogUserItemProps {
  user: User;
  onCreateDialog: () => void;
}

export const ChatDialogUserItem = ({ user, onCreateDialog }: ChatDialogUserItemProps) => {
  return (
    <StyledDialogUserItemWrapper onClick={onCreateDialog}>
      <BasedAvatar src={user.avatar} alt="user avatar" />

      <StyledChatInfoWrapper>
        <StyledChatInfoUserNameText as="p">{user.login.slice(6)}</StyledChatInfoUserNameText>
      </StyledChatInfoWrapper>
    </StyledDialogUserItemWrapper>
  );
};
