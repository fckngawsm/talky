import { ChatTabs } from "../../entities/chat/chat-tabs/chat-tabs.ui";
import { ChatLayout } from "../../shared/layouts/chat.layout";

export const ChatWidget = () => {
  return (
    <ChatLayout>
      <ChatTabs />
    </ChatLayout>
  );
};
