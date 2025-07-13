import { ChatContextProvider } from "@/entities/chat/chat.context";
import { ChatSelected } from "@/features/chat-selected/chat-selected.ui";
import { ChatEmptySelected } from "@/features/chat/chat-empty-selected/chat-empty-selected.ui";
import { useChat } from "@/providers/store/chat.store";
import { ChatLayout } from "@/shared/layouts/chat/chat.layout";
import { ChatDialogsListWidget } from "@/widgets/chat-dialogs-list/chat-dialogs-list.ui";

export const ChatPage = () => {
  const { selectedChatId } = useChat();
  return (
    <ChatLayout>
      <ChatContextProvider>
        <ChatDialogsListWidget />
      </ChatContextProvider>
      {!selectedChatId ? <ChatEmptySelected /> : <ChatSelected />}
    </ChatLayout>
  );
};
