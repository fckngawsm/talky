import type { Dialog } from "@/entities/chat/model/chat.types";
import { ChatDialogItem } from "@/features/chat/chat-dialog-item/chat-dialog-item.ui";
import { ChatHeader } from "@/features/chat/chat-header/chat-header.ui";
import { useChat } from "@/providers/store/chat.store";
import { Box } from "@radix-ui/themes";

interface ChatUsersListWidgetProps {
  dialogs: Dialog[];
}

export const ChatUsersListWidget = ({ dialogs }: ChatUsersListWidgetProps) => {
  const { onSelectChat } = useChat();

  return (
    <Box overflow="scroll">
      <ChatHeader />
      {dialogs.map((dialog) => (
        <ChatDialogItem onSelectChat={() => onSelectChat(dialog)} {...dialog} />
      ))}
    </Box>
  );
};
