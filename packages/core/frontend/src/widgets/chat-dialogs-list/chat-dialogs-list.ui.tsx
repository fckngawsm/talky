import { useSearchChatContext } from "@/entities/chat/chat.context";
import { useGetUsersBySearchValue } from "@/entities/user/user.api";
import { ChatDialogItem } from "@/features/chat/chat-dialog-item/chat-dialog-item.ui";
import { ChatHeader } from "@/features/chat/chat-header/chat-header.ui";
import { useChat } from "@/providers/store/chat.store";
import type { Dialog } from "@talky/types";
import { ChatDialogsListWidgetWrapper } from "./chat-dialog-list.styled";

interface ChatDialogsListWidget {
  dialogs: Dialog[];
}

export const ChatDialogsListWidget = ({ dialogs }: ChatDialogsListWidget) => {
  const { searchValue } = useSearchChatContext();
  const { onSelectChat } = useChat();
  const { data: foundedUsers } = useGetUsersBySearchValue(searchValue);

  return (
    <ChatDialogsListWidgetWrapper>
      <ChatHeader />
      {searchValue?.length > 0
        ? foundedUsers?.map((user) => <ChatDialogItem onSelectChat={() => onSelectChat(user.id)} />)
        : dialogs.map((dialog) => <ChatDialogItem onSelectChat={() => onSelectChat(dialog.id)} />)}
    </ChatDialogsListWidgetWrapper>
  );
};
