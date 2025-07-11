import { useSearchChatContext } from "@/entities/chat/chat.context";
import { StyledRootTextFieldController } from "@/shared/ui/input-controller/input-controller.styled";
import { StyledChatHeader } from "./chat-header.styled";

export const ChatHeader = () => {
  const { rawSearchValue, onChange } = useSearchChatContext();

  return (
    <StyledChatHeader>
      <StyledRootTextFieldController
        size="3"
        onChange={onChange}
        value={rawSearchValue}
        placeholder="Поиск"
      />
    </StyledChatHeader>
  );
};
