import { ChatLayout } from "@/shared/layouts/chat.layout";
import { ChatUsersListWidget } from "@/widgets/chat-dialogs-list/chat-dialogs-list.ui";

export const ChatPage = () => {
  return (
    <ChatLayout>
      <ChatUsersListWidget dialogs={[]} />
    </ChatLayout>
  );
};
