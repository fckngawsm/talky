import { StyledChatContentContainer } from "@/shared/layouts/chat-content.layout";
import { StyledEmptyText } from "./chat-empty-selected.styled";

export const ChatEmptySelected = () => {
  return (
    <StyledChatContentContainer>
      <StyledEmptyText>Выберите чат, чтобы отправить сообщение</StyledEmptyText>
    </StyledChatContentContainer>
  );
};
