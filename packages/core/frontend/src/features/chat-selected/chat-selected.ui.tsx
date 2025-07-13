import { Box } from "@radix-ui/themes";
import { FormProvider, useForm } from "react-hook-form";
import { MessageList } from "./chat-messages.ui";
import { ChatSelectedForm } from "./chat-selected-form.ui";
import { ChatSelectedHeader } from "./chat-selected-header.ui";
import { StyledSelectedChatWrapper } from "./chat-selected.styled";
import { useGetDialogById } from "./hooks/useGetDialogById";
import { ChatSelectedSkeleton } from "./skeletons/chat-selected.skeleton";

export const ChatSelected = () => {
  const methods = useForm();

  const { isLoading } = useGetDialogById();

  if (isLoading) {
    return <ChatSelectedSkeleton />;
  }

  return (
    <FormProvider {...methods}>
      <StyledSelectedChatWrapper>
        <ChatSelectedHeader />
        <MessageList />
        <Box flexGrow="1" />
        <ChatSelectedForm />
      </StyledSelectedChatWrapper>
    </FormProvider>
  );
};
