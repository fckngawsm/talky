import type { Dialog } from "@/entities/chat/model/chat.types";
import { ChatDialogItem } from "@/features/chat/chat-dialog-item/chat-dialog-item.ui";
import { ChatHeader } from "@/features/chat/chat-header/chat-header.ui";
import { useChat } from "@/providers/store/chat.store";
import { ChatDialogsListWidgetWrapper } from "./chat-dialog-list.styled";

interface ChatDialogsListWidget {
  dialogs: Dialog[];
}

export const ChatDialogsListWidget = ({ dialogs }: ChatDialogsListWidget) => {
  const { onSelectChat } = useChat();

  return (
    <ChatDialogsListWidgetWrapper>
      <ChatHeader />
      {dialogs.map((dialog) => (
        <ChatDialogItem onSelectChat={() => onSelectChat(dialog)} {...dialog} />
      ))}
    </ChatDialogsListWidgetWrapper>
  );
};
