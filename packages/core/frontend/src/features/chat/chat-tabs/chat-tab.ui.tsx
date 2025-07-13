import { useChat } from "@/providers/store/chat.store";
import { ChatDialogItem } from "../chat-dialog-item/chat-dialog-item.ui";
import { StyledEmptyTabContent } from "./chat-tabs.styled";
import { useGetDialogs } from "./hooks/use-get-dialogs";

export const ChatTab = () => {
  const { onSelectChat } = useChat();
  const { data: dialogs, isLoading } = useGetDialogs();

  if (!dialogs?.length || isLoading)
    return <StyledEmptyTabContent>Создайте ваш первый диалог</StyledEmptyTabContent>;

  return (
    <>
      {dialogs.map((chat) => (
        <ChatDialogItem key={chat.id} dialog={chat} onSelectChat={() => onSelectChat(chat.id)} />
      ))}
    </>
  );
};
