import { useChat } from "@/providers/store/chat.store";
import { ChatDialogItem } from "../chat-dialog-item/chat-dialog-item.ui";
import { StyledEmptyTabContent } from "./chat-tabs.styled";
import { useGetDialogs } from "./hooks/use-get-dialogs";

export const ChatTab = () => {
  const { onSelectChat } = useChat();
  const { data: dialogs, isLoading } = useGetDialogs();
  console.log(dialogs, "dialogs");
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
