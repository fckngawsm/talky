import { useChat } from "@/providers/store/chat.store";
import { Box } from "@radix-ui/themes";
import { FormProvider, useForm } from "react-hook-form";
import { MessageList } from "./chat-messages.ui";
import { ChatSelectedForm } from "./chat-selected-form.ui";
import { ChatSelectedHeader } from "./chat-selected-header.ui";
import { StyledSelectedChatWrapper } from "./chat-selected.styled";

export const ChatSelected = () => {
  const methods = useForm();

  const { selectedChatId } = useChat();

  return (
    <FormProvider {...methods}>
      <StyledSelectedChatWrapper>
        <ChatSelectedHeader avatarSrc="" />
        <MessageList />
        <Box flexGrow="1" />
        <ChatSelectedForm />
      </StyledSelectedChatWrapper>
    </FormProvider>
  );
};
