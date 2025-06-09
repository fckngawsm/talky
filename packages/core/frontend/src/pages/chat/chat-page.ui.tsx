import { ChatLayout } from "@/src/shared/layouts/chat.layout";
import { ChatUsersListWidget } from "@/src/widgets/chat-dialogs-list/chat-dialogs-list.ui";

export const ChatPage = () => {
  return (
    <ChatLayout>
      <ChatUsersListWidget dialogs={[]} />
    </ChatLayout>
  );
};
