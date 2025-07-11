import { ChatTabNames } from "@/entities/chat/chat.constants";
import { useTabs } from "@/shared/hooks/useTabs";
import { Tabs } from "@radix-ui/themes";
import { ChatTab } from "./chat-tab.ui";
import { StyledChatTabsList, StyledChatTabsTrigger, StyledTabsContent } from "./chat-tabs.styled";
import { MembersTab } from "./members-tab.ui";

export const ChatTabs = () => {
  const { tab, handleChangeTab } = useTabs({
    defaultValue: "chats",
  });

  return (
    <Tabs.Root value={tab} onValueChange={handleChangeTab} style={{ width: "100%" }}>
      <StyledChatTabsList>
        <StyledChatTabsTrigger value={ChatTabNames.chat}>Чаты</StyledChatTabsTrigger>
        <StyledChatTabsTrigger value={ChatTabNames.members}>Контакты</StyledChatTabsTrigger>
      </StyledChatTabsList>

      <StyledTabsContent value={ChatTabNames.chat}>
        <ChatTab />
      </StyledTabsContent>
      <StyledTabsContent value={ChatTabNames.members}>
        <MembersTab />
      </StyledTabsContent>
    </Tabs.Root>
  );
};
