import type { Dialog } from "@/entities/chat/model/chat.types";
import { ChatDialogItem } from "@/features/chat/chat-dialog-item/chat-dialog-item.ui";
import { ChatHeader } from "@/features/chat/chat-header/chat-header.ui";
import { Box } from "@radix-ui/themes";

interface ChatUsersListWidgetProps {
  dialogs: Dialog[];
}

export const ChatUsersListWidget = ({ dialogs }: ChatUsersListWidgetProps) => {
  return (
    <Box overflow="scroll">
      <ChatHeader />
      {dialogs.map((dialog) => (
        <ChatDialogItem {...dialog} />
      ))}
    </Box>
  );
};
