import type { User } from "@/shared/types/User";
import { BasedAvatar } from "@/shared/ui/avatar/avatar-based.ui";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import {
  StyledChatDialogItemWrapper,
  StyledChatInfoUserNameText,
  StyledChatInfoWrapper,
} from "../chat-dialog-item/chat-dialog-item.styled";

interface ChatDialogUserItemProps {
  user: User;
}

export const ChatDialogUserItem = ({ user }: ChatDialogUserItemProps) => {
  return (
    <StyledChatDialogItemWrapper>
      <BasedAvatar src={user.avatar} alt="user avatar" />

      <StyledChatInfoWrapper>
        <StyledChatInfoUserNameText as="p">{user.login}</StyledChatInfoUserNameText>
        <StyledChatInfoUserNameText as="p">{user.phone}</StyledChatInfoUserNameText>
      </StyledChatInfoWrapper>

      <IconButton>
        <EnvelopeClosedIcon />
      </IconButton>
    </StyledChatDialogItemWrapper>
  );
};
