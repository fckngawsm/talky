import { useChat } from "@/providers/store/chat.store";
import type { Dialog } from "@talky/types";
import { ChatDialogItem } from "../chat-dialog-item/chat-dialog-item.ui";
import { StyledEmptyTabContent } from "./chat-tabs.styled";

export const ChatTab = () => {
  const { onSelectChat } = useChat();
  const dialogs: Array<Dialog> = [];

  if (!dialogs?.length)
    return <StyledEmptyTabContent>Создайте ваш первый диалог</StyledEmptyTabContent>;

  return (
    <>
      {dialogs.map((chat) => (
        <ChatDialogItem key={chat.id} {...chat} onSelectChat={() => onSelectChat(chat.id)} />
      ))}
    </>
  );
};
