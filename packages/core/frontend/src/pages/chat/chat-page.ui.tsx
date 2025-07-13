import { ChatContextProvider } from "@/entities/chat/chat.context";
import { ChatSelected } from "@/features/chat-selected/chat-selected.ui";
import { ChatEmptySelected } from "@/features/chat/chat-empty-selected/chat-empty-selected.ui";
import { useChatId } from "@/providers/store/chatId.store";
import { ChatLayout } from "@/shared/layouts/chat/chat.layout";
import { ChatDialogsListWidget } from "@/widgets/chat-dialogs-list/chat-dialogs-list.ui";

export const ChatPage = () => {
  const { selectedChatId } = useChatId();
  return (
    <ChatLayout>
      <ChatContextProvider>
        <ChatDialogsListWidget />
      </ChatContextProvider>
      {!selectedChatId ? <ChatEmptySelected /> : <ChatSelected />}
    </ChatLayout>
  );
};
