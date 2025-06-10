import { ChatEmptySelected } from "@/features/chat/chat-empty-selected/chat-empty-selected.ui";
import { ChatNotEmptySelected } from "@/features/chat/chat-not-empty-selected/chat-not-empty-selected.ui";
import { useChat } from "@/providers/store/chat.store";
import { ChatLayout } from "@/shared/layouts/chat.layout";
import { ChatUsersListWidget } from "@/widgets/chat-dialogs-list/chat-dialogs-list.ui";

export const ChatPage = () => {
  const { selectedChat } = useChat();
  return (
    <ChatLayout>
      <ChatUsersListWidget dialogs={[]} />
      {!selectedChat?.id ? <ChatEmptySelected /> : <ChatNotEmptySelected />}
    </ChatLayout>
  );
};
