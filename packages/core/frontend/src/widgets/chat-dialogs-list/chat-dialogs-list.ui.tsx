import { ChatHeader } from "@/features/chat/chat-header/chat-header.ui";
import { ChatTabs } from "@/features/chat/chat-tabs/chat-tabs.ui";
import { ChatDialogsListWidgetWrapper } from "./chat-dialog-list.styled";

export const ChatDialogsListWidget = () => {
  return (
    <ChatDialogsListWidgetWrapper>
      <ChatHeader />
      <ChatTabs />
    </ChatDialogsListWidgetWrapper>
  );
};
